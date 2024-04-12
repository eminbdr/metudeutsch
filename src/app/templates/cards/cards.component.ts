import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  imports: [CommonModule],
  styleUrls: ['./cards.component.scss'],
  standalone:true
})



export class CardsComponent {


  cards: any[] = [];
  currentIndex: number = 1;

  constructor() {
    // Initialize cards
    this.initializeCards();
  }

  initializeCards() {
    this.cards.push({ flipped: false ,shown:false})
    this.cards.push({ flipped: false ,shown:false})
    this.cards.push({ flipped: false ,shown:false})
    this.cards.push({flipped: false ,shown:false})
    this.cards.push({ flipped: false ,shown:false})
    this.cards.push({ flipped: false ,shown:false})
    this.cards.push({flipped: false ,shown:false})
    this.cards.push({ flipped: false ,shown:false})
    this.cards.push({ flipped: false ,shown:false})
    this.cards.push({flipped: false ,shown:false})
    this.cards.push({ flipped: false ,shown:false})
    this.cards.push({ flipped: false ,shown:false})

    this.cards.slice(this.currentIndex-1,this.currentIndex+2).forEach((ele)=>{
      ele.shown=true
    })

  }

  toggleFlip(index: number) {
    this.cards[index].flipped = !this.cards[index].flipped;
  }
  
  navigate(direction: 'prev' | 'next') {
    if (direction === 'prev' && this.currentIndex >= 1) {
      this.currentIndex -= 1;
      this.updateCards();
    } else if (direction === 'prev' && this.currentIndex === 0) {
      this.currentIndex = 0;
      this.updateCards();
    } else if (direction === 'next' && this.currentIndex < this.cards.length - 1) {
      this.currentIndex += 1;
      this.updateCards();
    } else if (direction === 'next' && this.currentIndex >= this.cards.length - 1) {
      this.currentIndex = this.cards.length - 1;
      this.updateCards();
    }
    console.log(this.currentIndex);
  }
  
  updateCards() {
    this.cards.forEach((ele) => {
      ele.selected = false;
    });
    this.cards[this.currentIndex].selected = true;
    this.cards.forEach((ele) => {
      ele.shown = false;
    });
    
    if (this.currentIndex === 0 || this.currentIndex === this.cards.length - 1) {
      this.cards.slice(Math.max(0, this.currentIndex - 1), this.currentIndex + 2).forEach((ele) => {
        ele.shown = true;
      });
    } else {
      this.cards.slice(this.currentIndex - 1, this.currentIndex + 2).forEach((ele) => {
        ele.shown = true;
      });
    }
  }
}