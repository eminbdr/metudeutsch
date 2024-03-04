import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landingen',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingenComponent {

  title = 'metudeut';
  buttons = [
    { name: "Read About Metu Deutsch", value:"/faq-en", ico_url: "../assets/Deutsch2.png", style: "background-color: #f5f5f5; color: black;",status:"active",},
    { name: 'Follow Our Instagram Page', value: 'https://www.instagram.com/metu_deutsch/', ico_url: "https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico",status:"active",},
    { name: 'Only German WP Group', value: 'https://docs.google.com/forms/d/e/1FAIpQLSdohsi2XKvEB5yFHi4epYBM9FLE68RxM_CV3rC_etro8SWADw/viewform?usp=sf_link', ico_url: "../assets/wp.svg",status:"active",},
    { name: 'Other WP Group', value: 'https://chat.whatsapp.com/F8i0FhuHVn78cMlwbxNX7L', ico_url: "../assets/wp.svg",status:"active",},
    { name: "Our Discord Server", value: "https://discord.gg/3t3z3t3", ico_url: "../assets/discord.svg",status:"active",},
    { name: "Our Youtube Playlist", value:"./faq", ico_url: "../assets/YTMusic.svg",status:"hidden"},
    {name: "Our Spotify Playlist", value: "", ico_url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",status:"disabled",},
    {name: "Are you a Developer?", value: "https://github.com/eminbdr/metudeutsch",ico_url: "../assets/github.svg",status:"hidden"},

  ];
  socials = {instagram: "https://www.instagram.com/metu_deutsch/", spotify: "https://open.spotify.com/"};

}
