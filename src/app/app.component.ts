import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public textArea: string = '';
  public isEmojiPickerVisible: boolean= false;
  public addEmoji(event: { emoji: { native: any; }; }) {
     this.textArea = `${this.textArea}${event.emoji.native}`;
     this.isEmojiPickerVisible = false;
  }
 
  displayHtml = `
  Wow, man :open_mouth:! That was kind of illegal :smirk:
`;

  ngOnInit(): void {
   
  }

  constructor(){

  }

}
