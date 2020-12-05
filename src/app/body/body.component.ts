import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit, OnDestroy, OnChanges {
  constructor() {
    console.log('constructor');
  }
  myPet: Pet = {
    name: 'doggy',
    age: 20,
    birthDate: new Date('2020-01-01'),
    canSwim: false,
    type: 'ชิสุ',
    weight: 17,
  };
  myPets: Pet[] = [];

  name = '';
  age = 0;
  weight = 0;
  birthDate = new Date();
  type = '';
  canSwim = false;

  ngOnInit(): void {
    console.log('on init');
    for (let index = 0; index < 10; index++) {
      this.myPets.push({
        name: 'doggy',
        age: Math.floor(Math.random() * 100),
        birthDate: new Date('2020-01-01'),
        canSwim: Math.floor(Math.random() * 100) % 2 === 0,
        type: 'ชิสุ',
        weight: Math.random() * 100,
      });
    }
    console.log(this.myPets);
  }

  onSave(): void {
    this.myPets.push({
      name: this.name,
      age: this.age,
      birthDate: this.birthDate,
      canSwim: this.canSwim,
      type: this.type,
      weight: this.weight,
    });
    alert('saved!!');
  }

  ngOnChanges(): void {
    console.log('on change');
  }

  ngOnDestroy(): void {
    console.log('on destroy');
  }
}
