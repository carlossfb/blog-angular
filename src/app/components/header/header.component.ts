import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Input()
  titlePage:string=""
  @Input()
  descriptionPage:string=""
  @Input()
  btnAction:string=""

  constructor(){}

  ngOnInit(): void {
  }

}
