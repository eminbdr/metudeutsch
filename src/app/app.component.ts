import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'metudeut';
  buttons = [
    { name: 'button1_name', value: 'button1_value', ico_url: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico" },
    { name: 'button2_name', value: 'button2_value', ico_url: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico" },
    { name: 'button3_name', value: 'button3_value', ico_url: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico" },
    { name: 'button4_name', value: 'button4_value', ico_url: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico" }
  ];
  socials = {instagram: "https://www.instagram.com/metu_deutsch/", spotify: "https://open.spotify.com/"};





}
