import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-large',
  templateUrl: './progress-large.component.html',
  styleUrls: ['./progress-large.component.scss']
})
export class ProgressLargeComponent implements OnInit {
 @Input() percent: number;
  @Input() shadow: boolean = true;
  @Input() colors: Array<string> = ["#FF693C", "#FFCF7D", "#1EBE78"];
  @Input() size: string = 'small';
  @Input() checkComplete: boolean = false;
  @ViewChild('circle') circle:ElementRef;
  dashOffset: number;
  dashArray: string;
  Math: any;
  ringcolor: String;
  diameter: number = 120;
  checkmark = require('../../assets/checkmark_white.svg');
  strokecolor: string;

  constructor(private _el: ElementRef) {
      this.Math = Math;
  }

  ngOnInit() { }

  ngOnChanges() {
      // let radius = this.circle.nativeElement.attributes.r.value;
      this.diameter = 120;
      if (this.size == 'medium') {
        this.diameter = 180;
      }
      if (this.size == 'large') {
        this.diameter = 240;
      }
      let radius = (this.diameter / 2) - 5
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
