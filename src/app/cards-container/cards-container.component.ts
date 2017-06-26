import { Component, Input, ElementRef, HostListener, ContentChildren, ChangeDetectorRef, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {


  @Input() watch;
  @Input() notShy: boolean;
  @Input() minWidth: number;
  @Input() maxWidth: number;
  @Input() gutter: number;
  @Input() offsetTop: number = 0;
  @ContentChildren(CardComponent) cards;
  columns;
  resizeCards;
  positionCards;
  container_height: number = 0;

  constructor(private _el: ElementRef, private cdr?: ChangeDetectorRef) { }

  ngAfterViewInit() {
      let self = this;
      self.resizeCards = function () {
          let cards = self.cards;
          let container_width = self._el.nativeElement.offsetWidth;
          let max_width = self.maxWidth;
          let min_width = self.minWidth;
          let gutter = self.gutter;
          let total_cards = cards.length;
          if (container_width < min_width) {
              min_width = container_width;
          }
          self.columns = Math.floor(container_width / min_width);

          if (total_cards < self.columns) {
              self.columns = total_cards;
          }

          let gutters = (self.columns + 1) * gutter;

          let card_width = (container_width - gutters) / self.columns;
          if (card_width > max_width) {
              card_width = max_width;
          }

          cards.forEach((card) => {
              card.el.nativeElement.style.width = card_width + 'px';
          });
          self.positionCards(cards, self.columns, gutter);
      }
      self.positionCards = function(cards, columns, gutter) {
          let cards_list = [];
          let column_heights: Array<number> = new Array(columns).fill(0);
          cards.forEach((card, index) => {
              var card_info = {
                  'width': card.el.nativeElement.offsetWidth,
                  'height': card.el.nativeElement.offsetHeight,
                  'column': index % columns,
                  'row': (index - (index % columns)) / columns
              };
              column_heights[card_info.column] += parseInt(card_info.height) + parseInt(gutter);
              cards_list.push(card_info);
          });
          function getOffsetTop (i, card, gutter, columns) {
              let total_offset = parseInt(gutter);

              cards_list.forEach(function(compare_card, index) {
                  if (compare_card.column == card.column) {
                      if (compare_card.row < card.row) {
                          total_offset += parseInt(compare_card.height) + parseInt(gutter);
                      }
                  }
              })
              return total_offset + self.offsetTop + 'px'
          }
          cards.forEach((card, index) => {
              let card_info = cards_list[index];
              card.el.nativeElement.style.left = (card_info.column * card_info.width) + ((card_info.column + 1) * gutter) + 'px';
              card.el.nativeElement.style.top = getOffsetTop(index, card_info, gutter, columns);
          });
          this.container_height = Math.max.apply(null, column_heights) + gutter + this.offsetTop;
          this.cdr.detectChanges();
      }

      self.resizeCards();
  }

  resizeTimer;
  curtainTimer;
  curtain: boolean = false;

  ngOnChanges () {
      if (this.curtain === false) {
          this.curtain = true;
      }
      clearTimeout(this.curtainTimer);
      this.curtainTimer = setTimeout(() => {
          this.curtain = false;
      }, 400);
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
          this.resizeCards();
      }, 250);
  }

  @HostListener('window:resize', [])
  onResize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
          this.resizeCards();
      }, 250);
  }

  ngOnInit() {}
}

