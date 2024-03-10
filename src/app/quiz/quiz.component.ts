import { CommonModule,NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

class CommonQuizInterface{
generator(lengthofitem:number) {
  return  Array.from({ length: lengthofitem }, (_, i) => i);}
}
@Component({
  selector: 'app-quiz-a',
  standalone: true,
  imports: [CommonModule,NgFor, RouterLink],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizAComponent extends CommonQuizInterface{

  questions = [
    {
      question: 'Q. which option best describes your job role?',
      choices: [
        `Small Business Owner or Employee EmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployee`,
        `Small Business Owner or Employee`,
        `Small Business Owner or Employee`,
        `Small Business Owner or Employee`,
      ],
      answer: 0
    },
    {
      question: 'Q. which option best describes your job role?',
      choices: [
        `Small Business Owner or Employee EmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployee`,
        `Small Business Owner or Employee`,
        `Small Business Owner or Employee`,
        `Small Business Owner or Employee`,
      ],
      answer: 0
    },
  ];
}

@Component({
  selector: 'app-quiz-b',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizBComponent extends CommonQuizInterface{

  questions = [
    {
      question: 'Q. which option best describes your job role?',
      choices: [
        `Small Business Owner or Employee EmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployeeEmployee`,
        `Small Business Owner or Employee`,
        `Small Business Owner or Employee`,
        `Small Business Owner or Employee`,
      ],
      answer: 0
    },

  ];


}
