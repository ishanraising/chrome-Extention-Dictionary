import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';
  constructor(private http : HttpClient) { }
 
  getWordDefinition(word: string){
    const url = `${this.apiUrl}/${word}`;
    console.log('Fetching URL:', url); // Add this line to debug the URL
    return this.http.get<any>(url);
  }
}
