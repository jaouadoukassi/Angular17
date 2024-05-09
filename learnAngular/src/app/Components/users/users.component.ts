import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  name: string = 'Jaouad Oukassi'
  isLoggedIn = false;

  greet(){
    alert('I am Web developper from morocco')
  }

}
