import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string='';
  public longText:string='';
  
  
  constructor() { }

  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354';
    this.longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget molestie purus. Donec rhoncus nibh non leo dapibus, ultricies egestas metus facilisis. Mauris fringilla elementum bibendum. Proin sollicitudin sapien metus, vitae efficitur orci bibendum eu. Nunc sapien ipsum, blandit vel mauris eu, tincidunt congue nisl. Proin varius tellus sed diam sagittis eleifend. Suspendisse vitae feugiat eros, quis rhoncus nulla. Nam viverra tristique sem, eu sollicitudin nunc condimentum non. Donec mattis tincidunt ligula nec venenatis. Nullam';
    console.log('Llamando componente');
  }

}
