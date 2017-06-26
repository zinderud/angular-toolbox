import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() type: string;
  @Input() options;
  @Input() model;
  @Output() modelChange = new EventEmitter();

  constructor() { }

  setAnswer(answer) {
      this.model = answer;
      this.modelChange.emit(this.model);
  }

  toggleAnswer(option, answer) {
      option.selected = answer;
      this.modelChange.emit(this.model);
  }

  ngOnInit() {}
}
