import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/_core/models/drink.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() drink: Drink = {
    idDrink: '',
    strDrink: ''
  }
}
