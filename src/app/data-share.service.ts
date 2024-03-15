import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { reference } from './firebase.config';
import { getDownloadURL,getBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class DatashareService {
  static fetchedData: any;
  constructor(private http: HttpClient) { }

  async fetchData() {
    if (DatashareService.fetchedData) {
      return of(DatashareService.fetchedData);
    }
    else {
      return this.http.get('https://raw.githubusercontent.com/eminbdr/datasets_from_books/main/constants.json').pipe(
        map((data) => {
          DatashareService.fetchedData = data;
          return data;
        }),
        catchError((error) => {
          console.error('Error fetching data:', error);
          return of(null);
        })
      );
      
      /*return getBytes(reference).then((bytes) => {
        const data = new TextDecoder().decode(bytes);
        DatashareService.fetchedData = JSON.parse(data);
        return DatashareService.fetchedData;
      }
      ).catch((error) => {
        console.log(error);
        return null;
      });*/

  }
}
}
