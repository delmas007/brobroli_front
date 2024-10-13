import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { User } from '../../interface/user';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as AOS from 'aos';
import {Login} from "../../interface/Login";
import {BrobroliService} from "../../services/brobroli.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  errorMessage: any;
  formLogin!: FormGroup;
  user: Login = {
    userName: '',
    password: ''
  };


  constructor(private router: Router,private fb:FormBuilder,private service: BrobroliService) {
  }


  ngOnInit(): void {AOS.init();
    this.formLogin = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    });
  }

  onLogin() {
    this.user.userName = this.formLogin.value.username;
    this.user.password = this.formLogin.value.password;
    this.errorMessage = null;
    if (this.formLogin.invalid) {
      this.errorMessage = "Veuillez corriger les erreurs dans le formulaire.";
      return;
    }

    this.router.navigate(['/home']);
  }
}
