import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detail } from 'src/app/_core/models/drink-detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit{
  detail!: Detail;
  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
      this.activatedRoute.data.subscribe(({drink}) => {
        this.detail = drink;
      })
  }
}
