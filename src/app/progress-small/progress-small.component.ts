import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-small',
  templateUrl: './progress-small.component.html',
  styleUrls: ['./progress-small.component.scss']
})
export class ProgressSmallComponent implements OnInit {

  @Input() percent: number;
  @Input() shadow: boolean = true;
  @Input() showPercent: boolean = true;
  @Input() colors: Array<string> = ["#FF693C", "#FFCF7D", "#1EBE78"];
  @ViewChild('circle') circle:ElementRef;
  dashOffset: number;
  dashArray: string;
  Math: any;
  ringcolor: String;
  checkmark = require('../../assets/checkmark_white.svg');
  strokecolor: string;

  constructor(private _el: ElementRef) {
      this.Math = Math;
  }

  ngOnInit() { }

  ngOnChanges() {
    let radius = this.circle.nativeElement.attributes.r.value;
    let circumference = 2 * Math.PI * radius;
    this.dashOffset = circumference;
    this.dashArray = circumference + " 1000";

    let colorindex = Math.floor(this.colors.length * this.percent);
    if (colorindex == this.colors.length) {
      colorindex = this.colors.length - 1;
    }
    this.strokecolor = this.colors[colorindex];

    setTimeout(() => {
        this.dashOffset = circumference - (circumference * this.percent);
    }, 0);
  }
}
