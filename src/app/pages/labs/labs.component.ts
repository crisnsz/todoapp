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
  welcome = 'hola';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
  ]);

  name = signal('Cristian');
  age = 24;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = signal({
    name: 'Cristian',
    age: 24,
    disabled: true,
    img: 'https://w3schools.com/howto/img_avatar.png',
  });

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);

    console.log(event);
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;

    this.person.update((prevState) => {
      return { ...prevState, age: parseInt(newValue) };
    });

    console.log(event);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;

    this.person.update((prevState) => {
      return { ...prevState, name: newValue };
    });
  }

  colorCtrl = new FormControl();
  widthCtrl = new FormControl('20', {
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
