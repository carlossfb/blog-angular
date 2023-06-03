import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input()
  authorName:string=""
  @Input()
  cardTitle:string = ""
  @Input()
  modifiedAt:string = ""
  @Input()
  readTime:string = ""

  constructor(){}

  ngOnInit(): void {
  }

}
