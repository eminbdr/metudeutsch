import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: ` <div class="sc-bdfBwQ sc-gsTCUz dTcluo bhdLno">
      <div class="eZNKTD" style="place-content: center; display: inline-flex">
        <a routerLink="/" style="display: contents;" >
          <img class="animate__animated animate__pulse"
            src="assets/Deutsch2.png"
            alt=""
            role="presentation"
            data-testid="ProfileImage"
            crossorigin="anonymous"
            class="sc-iBPRYJ flTywP sc-hBEYos czEoCL"
            filter="none"
            style="
  flex-flow: nowrap;
  display: inline-flex;
  height: 20%;
  width: 20%;
"
          />
        </a>
      </div>
      <div class="sc-bdfBwQ sc-kstrdz llgrqs btjemE">
        <h1 class="sc-dlfnbm hJicDA">Metu Deutsch</h1>
      </div>
      <div class="sc-bdfBwQ jWrdnz">
        <h2 class="sc-hKgILt gEbEcU" style="font-weight: 600">
          Lasst Uns Zusammen Die Beste Community Aufbauen !!!
        </h2>
      </div>
    </div>
    <div
      class="sc-bdfBwQ sc-eLgOdN la-DUvP fNmjUi"
      style="
background: linear-gradient(
  0deg,
  rgba(0, 0, 0, 0.75) 16.7%,
  rgba(255, 0, 0, 0.75) 50%,
  rgba(255, 204, 0, 0.75) 83.3%
);
"
    ></div>`,

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
