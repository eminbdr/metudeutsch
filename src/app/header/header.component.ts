import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',

  styles: `div.translator-flag-cont {
    margin-top: 20px;
    display: inline-flex;
    place-content: center;
    width: 100%;
    border-width: 5px;
    border-radius: 10px;
    $value: 30;
    img{
      max-width: 3px*$value;
      width: 2px*$value;
      height: 1px*$value;
  
    }
  }
`,
encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent { }
