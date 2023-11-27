import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  name = signal('Ana');
  age = 24;
  tasks = signal([
    {
      id: Date.now(),
      title: 'Instalar Angular',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Crear Componentes',
      completed: false,
    },
  ]);

  colorCtrl = new FormControl();
  widthCtrl = new FormControl('', {
    nonNullable: true,
  });

  nameCtrl = new FormControl('Cristian', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  constructor() {
    this.colorCtrl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
