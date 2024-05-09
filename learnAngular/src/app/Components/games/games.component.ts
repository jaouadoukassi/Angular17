import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {

    @Input() username: string ='';
    @Output() addFavoriteEvent = new EventEmitter();

    fav(gamename: string){
      this.addFavoriteEvent.emit(gamename)
    }

  games = [
    {
      id: 1,
      name: 'Uncharted'
    },
    {
      id: 2,
      name: 'Mancraft'
    },
    {
      id: 3,
      name: 'FiFa 2019'
    }
  ]
}
