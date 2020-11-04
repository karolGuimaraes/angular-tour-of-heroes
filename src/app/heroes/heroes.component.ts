import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    birthday: new Date(2020, 11, 3),
  };

  constructor() {

  }

  ngOnInit(): void {
    alert("ngOnInit diz oi");
  }

}
