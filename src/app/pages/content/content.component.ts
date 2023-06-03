import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  authorName:string ="Steve"
  id:string  ="1"
  cardTitle:string ="My title..."
  modifiedAt:string ="June 16"
  readTime:string ="7 min"

  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
  this.route.paramMap.subscribe(val => this.id != null? val.get('id') : "0" )
  this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(item => item.id = id )[0]

    this.authorName = result.authorName
    this.cardTitle = result.cardTitle
    this.modifiedAt = result.modifiedAt
    this.readTime = result.readTime
  }
}
