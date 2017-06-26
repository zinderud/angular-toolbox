import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arc-progress',
  templateUrl: './arc-progress.component.html',
  styleUrls: ['./arc-progress.component.scss']
})
export class ArcProgressComponent {

  @Input() percent1: number;
  @Input() percent2: number;
  @Input() shadow: boolean = true;
  @Input() colors1: Array<string> = ["#FF693C", "#FFCF7D", "#1EBE78"];
  @Input() colors2: Array<string> = ["#FF693C", "#FFCF7D", "#1EBE78"];
  @Input() size: string = 'small';
  @ViewChild('arc1') arc1: ElementRef;
  @ViewChild('arc2') arc2: ElementRef;
  dashOffset1: number;
  dashArray1: string;
  dashOffset2: number;
  dashArray2: string;
  Math: any;
  diameter: number = 120;
  ringcolor1: String;
  ringcolor2: String;
  strokecolor1: string;
  strokecolor2: string;

  constructor(private _el: ElementRef) {
    this.Math = Math;
  }

  ngOnChanges() {
    this.diameter = 120;
    if (this.size == 'medium') {
      this.diameter = 180;
    }
    if (this.size == 'large') {
      this.diameter = 240;
    }
    let radius1 = (this.diameter / 2) - 5;
    let radius2 = (this.diameter / 3) - 5;
    let circumference1 = (2 * Math.PI * radius1) / 2;
    let circumference2 = (2 * Math.PI * radius2) / 2;
    this.dashOffset1 = circumference1;
    this.dashOffset2 = circumference2;
    this.dashArray1 = circumference1 + " 1000";
    this.dashArray2 = circumference2 + " 1000";
    let colorindex1 = Math.floor(this.colors1.length * this.percent1);
    if (colorindex1 == this.colors1.length) {
      colorindex1 = this.colors1.length - 1;
    }
    this.strokecolor1 = this.colors1[colorindex1];
    let colorindex2 = Math.floor(this.colors2.length * this.percent2);
    if (colorindex2 == this.colors2.length) {
      colorindex2 = this.colors2.length - 1;
    }
    this.strokecolor2 = this.colors2[colorindex2];
    setTimeout(() => {
      this.dashOffset1 = circumference1 - (circumference1 * this.percent1);
    }, 0);
    setTimeout(() => {
      this.dashOffset2 = circumference2 - (circumference2 * this.percent2);
    }, 0);
  }
}
