import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

var module_imports = 

var button_names_de = [
  'Lese Über Metu Deutsch',
  'Folgen Unsere Instagram Seite',
  'Anderer WP Gruppe',
  'Unsere Discord Server',
  'Goethe Sprachcafe Anmeldung',
];

var button_names_en = [
  'Read About Metu Deutsch',
  'Follow Our Instagram Page',
  'Other WP Group',
  'Our Discord Server',
  'Goethe "Sprachcafe" Registration',
];

var other_platforms = [
  {
    id: "yt-music",
    value:
      'https://music.youtube.com/playlist?list=PL02TqV5xmkLHpmmHVrtZHPXGQ8Fn5E2Um&si=b7KfAeYGvABvozly',
    ico_url:
      'https://img.icons8.com/?size=160&id=v2g5nBwZDzuw&format=png',
    status: 'active',
  },
  {
    id: "spotify",
    value:
      'https://open.spotify.com/playlist/4OOwZqXG8mAMoClVhPZYGo?si=ce12e1fa677c4b97',
    ico_url:
      'https://img.icons8.com/?size=160&id=116712&format=png',
    status: 'active',
  },

]

var button_values = [
  {
    id: "faq",
    value: '/faq',
    ico_url: '../assets/Deutsch2.png',
    style: 'background-color: #f5f5f5; color: black;',
    status: 'active',
  },
  {
    id: "instagram",
    value: 'https://www.instagram.com/metu_deutsch/',
    ico_url: 'https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico',
    status: 'active',
  },
  {
    id: "other-whatsapp",
    value: 'https://chat.whatsapp.com/F8i0FhuHVn78cMlwbxNX7L',
    ico_url: '../assets/wp.svg',
    status: 'active',
  },
  {
    id: "discord",
    value: 'https://discord.gg/45Qzy9qduV',
    ico_url:
      'https://upload.wikimedia.org/wikipedia/tr/c/c7/Discord_logo_new.svg',
    status: 'active',
    style: 'width:32px',
  },


  {
    id: "goethe",
    value: 'https://forms.office.com/e/M7G2SA3NF2',
    ico_url: '../assets/goethe.svg',
    status: 'active',
  },
];

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  encapsulation: ViewEncapsulation.None,
})

export class LandingComponent {
  buttons = button_names_de.map((name, i) => ({
    name,
    ...button_values[i],
  }));
  other_platforms = other_platforms;
}

@Component({
  selector: 'app-landingen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LandingenComponent {
  buttons = button_names_en.map((name, i) => ({
    name,
    ...button_values[i],
  }));
  other_platforms = other_platforms;

}