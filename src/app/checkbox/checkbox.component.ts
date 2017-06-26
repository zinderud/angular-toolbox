import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checkmark = require('../../assets/checkbox_checkmark.svg');
  @Input() model: boolean = false;
  @Output() modelChange = new EventEmitter();
  change(newValue) {
      this.model = newValue;
      this.modelChange.emit(newValue);
  }

  constructor() { }

  ngOnInit() { }

}
