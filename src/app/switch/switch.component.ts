import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() model: boolean = false;
  @Output() modelChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  toggleSwitch () {
      this.model = !this.model;
      this.modelChange.emit(this.model);
  }

  ngOnInit() {}

}
