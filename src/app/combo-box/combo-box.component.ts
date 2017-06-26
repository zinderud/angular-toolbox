import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})
export class ComboBoxComponent implements OnInit {

  @Input() options: Array<string>;
  @Input() placeholder: string = '';
  @Input() label: boolean = false;
  @Input() model: string = '';
  @Output() modelChange: EventEmitter<string> = new EventEmitter();
  @ViewChild('inputElement') inputElement: ElementRef;
  @ViewChild('comboBoxContainer') container: ElementRef;
  focused: boolean = false;
  position = {'x': 0, 'y': 0};
  width: number = 0;
  suggestions_active: boolean = false;
  clicked_dropdown: boolean = false;
  clicked_suggestions: boolean = false;
  current_option: number;
  filtered_options: Array<string>;
  scroll_listener;
  manually_triggered: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.filtered_options = this.options;
  };

  activateSuggestions() {
    let position = this.container.nativeElement.getBoundingClientRect();
    this.position.x = position.left;
    this.position.y = position.top;
    this.width = this.container.nativeElement.offsetWidth;

    this.inputElement.nativeElement.focus();
    this.suggestions_active = !this.suggestions_active;
    this.manually_triggered = true;
    this.filtered_options = this.options;
    this.clicked_dropdown = false;
    this.bindScroll();
  }

  bindScroll() {
    if (this.scroll_listener !== undefined) {
      // unbind scroll if it's already listening
      this.scroll_listener();
    }
    this.scroll_listener = this.renderer.listen('window', 'wheel', (evt) => {
      let position = this.container.nativeElement.getBoundingClientRect();
      this.position.y = position.top;
    });

  }

  clickedDropdown() {
    if (this.suggestions_active) {
      // without this, clicking the dropdown icon while suggestions are open immediately
      // hides suggestions on mousedown (due to blur event) then shows them again on mouseup
      // (due to click event)
      // this prevents that and just hides them on mouseup
      this.clicked_dropdown = true;
    }
  }

  clickedSuggestions() {
    // very similar to above. Without this, clicking a suggestion immediately
    // blurs the field on mousedown (due to blur event) and doesn't actually
    // select the option you clicked, because mouseup doesn't get a chance to fire
    this.clicked_suggestions = true;
  }

  focusBox() {
    this.focused = true;
  }

  blurBox(event) {
    if (this.clicked_dropdown === false && this.clicked_suggestions === false) {
      this.focused = false;
      this.suggestions_active = false;
    }
    this.clicked_dropdown = false;
    this.clicked_suggestions = false;
    this.manually_triggered = false;
    if (this.scroll_listener) {
      this.scroll_listener();
    }
  }

  selectOption(option) {
    this.model = option;
    this.modelChange.emit(this.model);
    this.suggestions_active = false;
    this.clicked_suggestions = false;
    this.inputElement.nativeElement.focus();
    this.current_option = undefined;
  }

  textChanged(event) {
    if (event.which != 13 && event.which != 27 && event.which != 9 && event.which != 16) {
      if (!this.manually_triggered) {
        this.filtered_options = this.options.filter(item => {
            if (item.toLowerCase().indexOf(this.model.toLowerCase()) > -1) {
              return true;
            }
        });
      }
      this.modelChange.emit(this.model);
      let position = this.container.nativeElement.getBoundingClientRect();
      this.position.x = position.left;
      this.position.y = position.top;
      this.width = this.container.nativeElement.offsetWidth;
      this.suggestions_active = true;
      this.bindScroll();
    }
  };

  pressedKey(event) {
    if (this.suggestions_active) {
      if (event.which == 38) {
        // pressed up
        event.preventDefault();
        if (this.current_option && this.current_option > 0) {
          this.current_option -= 1;
        } else {
          this.current_option = this.filtered_options.length - 1;
        }
      } else if (event.which == 40) {
        // pressed down
        event.preventDefault();
        if (this.current_option != undefined && this.current_option < this.filtered_options.length - 1) {
          this.current_option += 1;
        } else {
          this.current_option = 0;
        }
      } else if (event.which == 27) {
        // pressed escape—hide suggestions
        this.suggestions_active = false;
        this.clicked_suggestions = false;
        this.manually_triggered = false;
        this.current_option = undefined;
        this.scroll_listener();
      } else if (event.which == 13) {
        // pressed enter—select value and hide suggestions
        if (this.current_option != undefined) {
          this.model = this.filtered_options[this.current_option];
          this.modelChange.emit(this.model);
          this.manually_triggered = false;
          this.suggestions_active = false;
          this.clicked_suggestions = false;
          this.current_option = undefined;
        }
        this.scroll_listener();
      }
    } else {
      if (event.which == 40) {
        // pressed down, manually trigger suggestions list
        // this.suggestions_active = true;
        this.activateSuggestions();
      }
    }
  }

}
