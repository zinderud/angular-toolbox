import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @Input() model;
  @Input() value: any;
  @Output() modelChange = new EventEmitter();
  change(newValue) {
      this.model = newValue;
      this.modelChange.emit(newValue);
  }

  constructor() { }

  ngOnInit() {}

}
