import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options;
  @Input() model: any;
  @Output() modelChange = new EventEmitter();
  change(newValue) {
    this.model = newValue;
    this.modelChange.emit(newValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
