import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeserviceService } from '../homeservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  word: string = '';
  definition: any;
  errorMessage: string = '';

  constructor(private dictionaryService: HomeserviceService) { }

  fetchWordDefinition(): void {
    if (this.word.trim()) {
      this.dictionaryService.getWordDefinition(this.word.trim()).subscribe(
        (response :any) => {
          this.definition = response;
          this.errorMessage = '';
          console.log(this.definition);
        },
        (error:any) => {
          this.definition = null;
          this.errorMessage = 'Word not found or invalid input.';
          console.error('Error fetching definition:', error);
        }
      );
    } else {
      this.errorMessage = 'Please enter a word.';
    }
  }

}
