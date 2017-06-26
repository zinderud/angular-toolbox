import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
 @Input() percent: number;
  @Input() fraction: number;
  @Input() total: number;
  @Input() showFraction: boolean = false;
  @ViewChild('fractionelement') fraction_element: ElementRef;
  fractionmode: boolean = false;
  fraction_percent: number = 0;
  fraction_offset: string;

  constructor(private _el: ElementRef) { }

  ngAfterViewInit() {
    this.setFractionOffset();
  }

  changeTimer;

  ngOnChanges() {
    if (this.fraction && this.total) {
      clearTimeout(this.changeTimer);
      this.changeTimer = setTimeout(() => {
        this.fraction_percent = this.fraction / this.total;
        this.fractionmode = true;
        this.setFractionOffset();
      }, 150);
    }
  }

  setFractionOffset() {
    if (this.fraction_element != undefined) {
      setTimeout(() => {
        let fraction_width = this.fraction_element.nativeElement.offsetWidth;
        let el_width = this._el.nativeElement.offsetWidth;
        let offset_1 = fraction_width / 2;

        let total_offset = (this.fraction_percent * el_width) - offset_1;
        if (total_offset < 0) {
          total_offset = 0;
        } else if (total_offset > (el_width - fraction_width)) {
          total_offset = el_width - fraction_width;
        }

        this.fraction_offset = total_offset + 'px';
      }, 0);
    }
  }

  ngOnInit() {}

}
