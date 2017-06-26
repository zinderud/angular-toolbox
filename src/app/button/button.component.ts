import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title: String;
  @Input() icon: String;
  @Input() icon_left: String;
  @Input() disabled: boolean = false;
  @Input() dim: boolean = true;
  @Input() lighten: boolean = false;
  @Input() secondary: boolean = false;
  @Input() color: String = 'blue';

  constructor() { }

  ngOnInit() { }

}
