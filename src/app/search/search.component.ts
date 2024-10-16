import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormsModule} from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink, Router, ActivatedRoute} from '@angular/router';
import {BrobroliService} from "../core/services/brobroli.service";
import {StateService} from "../core/services/state.service";
import {Services} from "../domains/interfaces/Services";
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NavbarComponent, MatIconModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  modalCollabOpen = false;
  serbiceId: number = 0;
  solde: number = 0;
  abuy: number = 85000;
  errorMessage: string = '';
  btnErrorText: string = '';
  connection: boolean = false  ;
  showPayButton: boolean = true;
  typeService!: string ;
  minPrice!: number ;
  maxPrice!: number ;
  services :Services[] = [];
  servicee: Services = {
    id: 0,
    description: "",
    duration: 0,
    price: 0,
    provider: {
      id: 0,
      skills: []
    },
    typeService: ""
  }
  constructor(private router: Router,private fb:FormBuilder,private service: BrobroliService,private state:StateService,private activatedRoute: ActivatedRoute) {}

  onCollabSubmit() {
    if (!this.connection) {
      this.errorMessage = "Vous devez être connecté pour effectuer cette action.";
      this.btnErrorText = 'Se connecter';
      this.showPayButton = false;
      return;
    }

    if (this.solde < this.abuy) {
      this.errorMessage = "Votre solde est insuffisant pour effectuer cette collaboration. Veuillez recharger votre compte.";
      this.btnErrorText = 'Recharger mon compte';
      this.showPayButton = false;
      return;
    }

    this.router.navigate(['/profile']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.typeService = params['typeService'];
      this.minPrice = params['minPrice'];
      this.maxPrice = params['maxPrice'];
    });
    this.service.search(this.typeService, this.minPrice, this.maxPrice).subscribe(
      (response: any) => {
        for (let i = 0; i < response.length; i++) {
          const providerSkills = response[i].provider.skills.map((skill: { skillName: string }) => skill.skillName);
          this.servicee = {
            id: response[i].id,
            description: response[i].description,
            duration: response[i].duration,
            price: response[i].price,
            provider: {
              id: response[i].provider.id,
              skills: providerSkills
            },
            typeService: response[i].typeService
          };
          this.services.push(this.servicee);
        }
        console.log(this.services);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
  formatPrice(price: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(price);
  }
}

