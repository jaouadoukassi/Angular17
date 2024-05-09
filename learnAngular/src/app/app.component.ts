import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './Components/users/users.component';
import { GamesComponent } from './Components/games/games.component';

@Component({
  selector: 'app-root',   // app ==> el nombre principal de la app // root ==> es la rèiz del proyecto
  standalone: true,
  imports: [RouterOutlet, UsersComponent, GamesComponent, CommonModule],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnAngular';
  name = "Jaouad - Oukassi"
}
