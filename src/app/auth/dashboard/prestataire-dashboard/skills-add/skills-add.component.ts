import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-skills-add',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, FormsModule, MatIconModule],
  templateUrl: './skills-add.component.html',
  styleUrl: './skills-add.component.css'
})
export class SkillsAddComponent {




  onSkillsSubmit(){
    console.log('skills submitted');
  }
}
