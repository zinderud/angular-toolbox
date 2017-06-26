import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  @Input() data: Array<any>;
  @Input() total_height: number = 350;
  total: number = 0;
  min_height_offset: number = 0;
  parseInt;

  constructor() {
    this.parseInt = parseInt;
  }

  positionLeft(part, index) {
    let counter = index;
    let middle = ((part.number / this.total) * (this.total_height - this.min_height_offset) / 2);
    let index_offset = 0;
    while (counter >= 0) {
      counter -= 1;
      if (this.data[counter]) {
        index_offset += (this.data[counter].number / this.total) * (this.total_height - this.min_height_offset) + 10;
      }
    }
    return middle + index_offset + 5;
  }

  positionRight(part, index) {
    let total_height = this.total_height - 60;
    let item_height = total_height / this.data.length;
    let index_offset = (item_height * (index + 1)) - (item_height / 2) + 30;
    return index_offset;
  }

  ngOnChanges() {
    this.data.forEach((part) => {
      this.total += part.number;
      this.min_height_offset += 10;
    });
    if (this.total === 0) {
      this.total = 1;
    }
    this.data.forEach((part, index) => {
      part.position_left = this.positionLeft(part, index);
      part.position_right = this.positionRight(part, index);
    });
  }

  ngOnInit() {}

}
