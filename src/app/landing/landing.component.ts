import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterLink,HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  title = 'metudeut';
  buttons = [
    { name: "Lese Über Metu Deutsch / Read About Metu Deutsch", value:"/faq-component", ico_url: "../assets/Deutsch2.png", style: "background-color: #f5f5f5; color: black;"},
    { name: 'Folgen Unsere Instagram Seite / Follow Our Instagram Page', value: 'https://www.instagram.com/metu_deutsch/', ico_url: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico" },
    { name: '"Nur" Deutsch WP Gruppe / Only German WP Group', value: 'https://chat.whatsapp.com/COtxkSLWE0i6zZ84A9aWT9', ico_url: "../assets/wp.svg" },
    { name: 'Anderer WP Gruppe / Other WP Group', value: 'https://chat.whatsapp.com/F8i0FhuHVn78cMlwbxNX7L', ico_url: "../assets/wp.svg" },
    { name: "Unsere Discord Server / Our Discord Server", value: "https://discord.gg/3t3z3t3", ico_url: "../assets/discord.svg" },
    { name: "Unsere Deutsch Playlist / Our German Playlist", value:"./faq", ico_url: "../assets/YTMusic.svg"},
    {name: "Unsere Spotify Playlist / Our Spotify Playlist", value: "", ico_url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg"},
    {name: "Bist du ein Entwickler? / Are you a Developer?", value: "https://github.com/eminbdr/metudeutsch",ico_url: "../assets/github.svg" }

  ];
  socials = {instagram: "https://www.instagram.com/metu_deutsch/", spotify: "https://open.spotify.com/"};
}
