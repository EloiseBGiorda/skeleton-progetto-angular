import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Drink } from 'src/app/_core/models/drink.model';
import { ApiService } from 'src/app/_core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: Drink[] = [];
  searchedDrink:string = '';

  constructor(private service: ApiService){}
  
  ngOnInit(): void {
    this.setAllDrinks();
  }

  async setAllDrinks()  {
    await this.service.getAllDrinks().then((res: any) => 
     {
       this.drinks = res;}
    ).catch((e:any )=> console.log(e));
  }

  async setSearchedDrinks()  {
    await this.service.getSearchedDrinks(this.searchedDrink).then((res: any) => 
     {
       this.drinks = res;}
    ).catch((e:any )=> console.log(e));
  }

  clearSearch() {
    this.searchedDrink = '';
    this.setAllDrinks()
  }
}
