import { Component, ElementRef, Renderer, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() model: number;
  @Input() watch;
  @Output() modelChange:EventEmitter<number> = new EventEmitter<number>();
  moving = false;
  position;
  percent = 0;
  moveFunc: Function;
  touchMoveFunc: Function;
  releaseFunc: Function;
  touchReleaseFunc: Function;

  constructor(private _el: ElementRef, private _renderer: Renderer) {
    this.moveFunc = _renderer.listen(document, 'mousemove', (event) => {
      this.moveHandle(event);
    });
    this.touchMoveFunc = _renderer.listen(document, 'touchmove', (event) => {
      this.moveHandle(event);
    });
    this.releaseFunc = _renderer.listen(document, 'mouseup', (event) => {
      this.doneMoving(event);
    });
    this.touchReleaseFunc = _renderer.listen(document, 'touchend', (event) => {
      this.doneMoving(event);
    });
  }

  startMoving($event) {
    this.changePosition($event);
    this.moving = true;
  }
  moveHandle($event) {
    if (this.moving === true) {
      this.changePosition($event);
    }
  }
  changePosition ($event) {
    $event.preventDefault();
    let offsetleft = this._el.nativeElement.getBoundingClientRect().left;
    let width = this._el.nativeElement.offsetWidth - 40;
    let position = 0;
    if ($event.type == 'touchstart' || $event.type == 'touchmove') {
      position = $event.touches[0].clientX - offsetleft - 20;
    } else {
      position = $event.clientX - offsetleft - 20;
    }
    if (position < 0) {
      position = 0;
    } else if (position > width) {
      position = width;
    }
    this.position = position;
    this.percent = this.position / width;
    this.modelChange.emit(this.percent);
  }
  doneMoving($event) {
    this.moving = false;
  }

  initialize () {
    let width = this._el.nativeElement.offsetWidth - 40;
    let position = this.model * width;
    this.position = position;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initialize();
    }, 0);
  }

  ngOnChanges() {
    setTimeout(() => {
      this.initialize();
    }, 250);
  }

  resizeTimer;

  @HostListener('window:resize', [])
  onResize() {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.initialize();
    }, 250);
  }

  ngOnDestroy() {
    // Release custom event listeners
    this.moveFunc();
    this.touchMoveFunc();
    this.releaseFunc();
    this.touchReleaseFunc();
  }

  ngOnInit() {}

}
