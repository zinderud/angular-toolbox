import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  @Input() placeholder: String;
  @Input() label: boolean = false;
  @Input() iconInactive: any;
  @Input() iconActive: any;
  @Input() disabled: boolean = false;
  @Output() onType: EventEmitter<any> = new EventEmitter<any>();
  @Input() model: any;
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  change(newValue) {
    this.model = newValue;
    this.modelChange.emit(newValue);
  }
  @ViewChild('field') field: ElementRef;

  constructor() { }

  type($event) {
      this.onType.emit($event.target.value);
  }

  forwardClick($event) {
    this.field.nativeElement.focus();
  }

  ngOnInit() {}

}
