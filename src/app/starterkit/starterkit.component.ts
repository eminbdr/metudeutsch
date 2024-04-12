import { Component,OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as words from './verb.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-starterkit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starterkit.component.html',
  styleUrl: './starterkit.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StarterkitComponent {
  order = ["Verb", "Adverb","Adjective", "Noun", "Preposition"]

  constructor() {
    this.words = words
  }

  ngOnInit() {   
  }
  

  words: any;
  randomWords: any = {
    Noun: "Die Frau",
    Verb: "aussehen",
    Adjective: "sehr",
    Adverb: "schön",
    Preposition: "mit"
  }

  randomWord(pos: string){
    let random = Math.floor(Math.random() * this.words[pos.toLowerCase()].length)
    console.log( this.words[pos.toLowerCase()][random]["de"])
    this.randomWords[pos] =  this.words[pos.toLowerCase()][random]
  }

}
