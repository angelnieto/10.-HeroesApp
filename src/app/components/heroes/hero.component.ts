import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  heroe:Hero = {
    nombre : 'Robin',
    casa: 'DC',
    bio: 'Amigo de Batman'
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){}

}
