import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  // service-in-service
  constructor(private messageService: MessageService) { }
}
