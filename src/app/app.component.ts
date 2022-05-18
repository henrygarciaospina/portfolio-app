import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio-app';
  public cards:Array<any> = [];
  ngOnInit(): void {
     this.cards = [
       {
        title:'Vídeo 1',
        subtitle:'Subtitle Vídeo 1'
       },
       {
        title:'Vídeo 2',
        subtitle:'Subtitle Vídeo 2'
       },
       {
        title:'Vídeo 3',
        subtitle:'Subtitle Vídeo 3'
       }    
     ]
  }
}
