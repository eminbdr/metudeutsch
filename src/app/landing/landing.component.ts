import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  title = 'metudeut';
  buttons = [
    { name: "Lese Über Metu Deutsch", value:"/faq", ico_url: "../assets/Deutsch2.png", style: "background-color: #f5f5f5; color: black;", status: "active"},
    { name: 'Folgen Unsere Instagram Seite', value: 'https://www.instagram.com/metu_deutsch/', ico_url: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico",status: "active"},
    { name: '"Nur" Deutsch WP Gruppe (Öffnet sich im März 9)', value: 'https://docs.google.com/forms/d/e/1FAIpQLSdohsi2XKvEB5yFHi4epYBM9FLE68RxM_CV3rC_etro8SWADw/viewform?usp=sf_link', ico_url: "../assets/wp.svg",status: "active" },
    { name: 'Anderer WP Gruppe', value: 'https://chat.whatsapp.com/F8i0FhuHVn78cMlwbxNX7L', ico_url: "../assets/wp.svg",status: "active" },
    { name: "Unsere Discord Server", value: "https://discord.gg/3t3z3t3", ico_url: "https://upload.wikimedia.org/wikipedia/tr/c/c7/Discord_logo_new.svg",status: "active", style:"width:32px"},
    { name: "Unsere Youtube Playlist", value:"https://music.youtube.com/playlist?list=PL02TqV5xmkLHpmmHVrtZHPXGQ8Fn5E2Um&si=b7KfAeYGvABvozly", ico_url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Youtube_Music_icon.svg", status: "active"},
    {name: "Unsere Spotify Playlist", value: "https://open.spotify.com/playlist/4OOwZqXG8mAMoClVhPZYGo?si=ce12e1fa677c4b97", ico_url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg", status: "active"},
    {name: "Bist du ein Entwickler?", value: "https://github.com/eminbdr/metudeutsch",ico_url: "../assets/github.svg",status: "hidden" }

  ];
  socials = {instagram: "https://www.instagram.com/metu_deutsch/", spotify: "https://open.spotify.com/"};
}
