import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-final-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './final-registration.component.html',
  styleUrl: './final-registration.component.css'
})
export class FinalRegistrationComponent implements OnInit {
  currentStep: number = 1;
  totalSteps: number = 2;
  questions: string[][] = [
    [
      'Ville de résidence ?',
      'Quartier de résidence ?',
      'Code postal ?',
      'Parlez-nous de vous'
    ],
    [
      'Quelle est votre profession ?',
      'Comment avez-vous entendu parler de nous ?',
      'Quelles sont vos attentes principales ?',
      'Acceptez-vous nos conditions d\'utilisation ?'
    ]
  ];
  answers: string[][] = Array(4).fill([]).map(() => Array(2).fill(''));

  ngOnInit() {}

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    console.log('Réponses soumises :', this.answers);
    window.location.href = '/dashboard-prestataire';
  }
}
