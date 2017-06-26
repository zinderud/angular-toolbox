import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() { }
}
