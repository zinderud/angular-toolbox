import { Component, OnInit, Input, Output, ElementRef, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input() utc: boolean = true;
  @Input() timepicker: boolean = false;
  @Input() date: Date = new Date;
  @Output() dateChange: EventEmitter<Date> = new EventEmitter();
  @ViewChild('hour') hourField: ElementRef;
  @ViewChild('minutes') minutesField: ElementRef;
  @ViewChild('ampm') amPmField: ElementRef;
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  arrow_left = require('../../assets/arrow_small_black_left.svg');
  arrow_right = require('../../assets/arrow_small_black_right.svg');
  arrow_up_gray = require('../../assets/arrow_small_gray_up.svg');
  arrow_down_gray = require('../../assets/arrow_small_gray_down.svg');
  arrow_up = require('../../assets/arrow_small_black_up.svg');
  arrow_down = require('../../assets/arrow_small_black_down.svg');
  active_date: Date;
  active_month_index: number;
  active_month_array: Array<Date> = [];
  days_offset: number = 0;
  hourup: boolean = false;
  hourdown: boolean = false;
  minutesup: boolean = false;
  minutesdown: boolean = false;
  ampmup: boolean = false;
  ampmdown: boolean = false;

  constructor() { }

  initialize() {
    this.active_date = this.convertUTCDateToLocalDate(this.date);
    this.active_month_index = this.active_date.getMonth();
    this.initializeMonth();
  }

  initializeMonth() {
    let days_in_month = this.daysInMonth(this.active_date.getMonth(), this.active_date.getFullYear());
    for (let i = 0; i < days_in_month; i ++) {
        let day_of_month = new Date(this.active_date.getFullYear(), this.active_month_index, i + 1);
        this.active_month_array.push(day_of_month);
    }
    this.getDaysOffset();
  }

  prevMonth() {
      this.active_month_array = [];
      this.active_month_index -= 1;
      let decrement_year: number = 0;
      if (this.active_month_index < 0) {
          this.active_month_index = 11;
          decrement_year = 1;
      }
      this.active_date = new Date(this.active_date.getFullYear() - decrement_year, this.active_month_index + 1, 0);
      this.initializeMonth();
  }

  nextMonth() {
      this.active_month_array = [];
      this.active_month_index += 1;
      let increment_year: number = 0;
      if (this.active_month_index > 11) {
          this.active_month_index = 0;
          increment_year = 1;
      }
      this.active_date = new Date(this.active_date.getFullYear() + increment_year, this.active_month_index + 1, 0);
      this.initializeMonth();
  }

  selectDay(day) {
      this.date = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        this.date.getHours(),
        this.date.getMinutes()
      );
      this.dateChange.emit(this.convertLocalDateToUTCDate(this.date));
  }

  daysInMonth(month, year) {
      let d = new Date(year, month + 1, 0).getDate();
      return d;
  }

  getDaysOffset() {
      let first_day = new Date(this.active_date.getFullYear(), this.active_month_index, 1).getDay();
      this.days_offset = first_day;
  }

  convertUTCDateToLocalDate(date) {
    let date_copy = new Date(date);
    if (this.utc === true) {
      let offset = date_copy.getTimezoneOffset();
      date_copy.setMinutes(date_copy.getMinutes() - offset);
    }
    return date_copy;
  }

  convertLocalDateToUTCDate(date) {
    let date_copy = new Date(date);
    if (this.utc === true) {
      let offset = date_copy.getTimezoneOffset();
      date_copy.setMinutes(date_copy.getMinutes() + offset);
    }
    return date_copy;
  }

  addHour() {
    let new_hour = this.date.getHours() + 1;
    if (new_hour == 24) {
      new_hour = 0;
    }
    this.setHour(new_hour);
  }
  subtractHour() {
    let new_hour = this.date.getHours() - 1;
    if (new_hour < 0) {
      new_hour = 23;
    }
    this.setHour(new_hour);
  }
  adjustHour($event) {
    if ($event.which == 38) {
      this.hourup = true;
      $event.preventDefault();
      this.addHour();
    } else if ($event.which == 40) {
      this.hourdown = true;
      $event.preventDefault();
      this.subtractHour();
    }
  }
  manualAdjustHour($event) {
    let value = this.hourField.nativeElement.value;
    let intValue = parseInt(value);
    let hours = this.date.getHours();
    let ampm = 'AM';
    if (hours >= 12) {
      ampm = 'PM'
    }
    if (isNaN(intValue)) {
      this.hourField.nativeElement.value = hours % 12 || 12;
    } else {
      if (intValue > 12) {
        this.hourField.nativeElement.value = hours % 12 || 12;
      } else if (intValue < 1) {
        this.hourField.nativeElement.value = hours % 12 || 12;
      } else {
        if (intValue == 12) {
          if (ampm == 'AM') {
            this.setHour(0);
          } else if (ampm == 'PM') {
            this.setHour(12);
          }
        } else {
          if (ampm == 'PM') {
            this.setHour(intValue + 12);
          } else {
            this.setHour(intValue);
          }
        }
      }
    }
  }
  setHour(hour) {
    this.date = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      this.date.getDate(),
      hour,
      this.date.getMinutes()
    );
    this.dateChange.emit(this.convertLocalDateToUTCDate(this.date));
  }



  addMinutes() {
    let new_minutes = this.date.getMinutes() + 1;
    if (new_minutes == 60) {
      new_minutes = 0;
    }
    this.setMinutes(new_minutes);
  }
  subtractMinutes() {
    let new_minutes = this.date.getMinutes() - 1;
    if (new_minutes < 0) {
      new_minutes = 59;
    }
    this.setMinutes(new_minutes);
  }
  adjustMinutes($event) {
    if ($event.which == 38) {
      $event.preventDefault();
      this.minutesup = true;
      this.addMinutes();
    } else if ($event.which == 40) {
      $event.preventDefault();
      this.minutesdown = true;
      this.subtractMinutes();
    }
  }
  manualAdjustMinutes($event) {
    let value = this.minutesField.nativeElement.value;
    let intValue = parseInt(value);
    let minutes = this.date.getMinutes();
    if (isNaN(intValue)) {
      this.minutesField.nativeElement.value = minutes;
    } else {
      if (intValue >= 60) {
        this.minutesField.nativeElement.value = minutes;
      } else if (intValue < 0) {
        this.minutesField.nativeElement.value = minutes;
      } else {
        this.setMinutes(intValue);
        this.minutesField.nativeElement.value = ("0" + intValue).slice(-2);
      }
    }
  }
  formatMinutes(dateobj) {
    let minutes = ("0" + dateobj.getMinutes()).slice(-2);
    return minutes;
  }
  setMinutes(minutes) {
    this.date = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      this.date.getDate(),
      this.date.getHours(),
      minutes
    );
    this.dateChange.emit(this.convertLocalDateToUTCDate(this.date));
  }

  toggleAmPm() {
    let new_hour = this.date.getHours() + 12;
    if (new_hour >= 24) {
      new_hour = new_hour - 24;
    } else if (new_hour < 0) {
      new_hour = new_hour + 24;
    }
    this.setHour(new_hour);
  }
  manualAdjustAmPm($event) {
    let value = this.amPmField.nativeElement.value;
    let hours = this.date.getHours();
    let ampm = 'AM';
    if (hours >= 12) {
      ampm = 'PM'
    }
    if (value.toLowerCase() != 'am' && value.toLowerCase() != 'pm') {
      this.amPmField.nativeElement.value = ampm;
    } else {
      if (value.toUpperCase() == ampm) {
        // don't need to change anything
        this.amPmField.nativeElement.value = ampm;
      } else {
        // actually set AM or PM here
        this.toggleAmPm();
      }
    }
  }
  adjustAmPm($event) {
    if ($event.which == 38) {
      this.ampmup = true;
    }
    if ($event.which == 40) {
      this.ampmdown = true;
    }
    if ($event.which == 38 || $event.which == 40) {
      $event.preventDefault();
      this.toggleAmPm();
    }
  }

  releaseTimeButtons() {
    this.hourup = false;
    this.hourdown = false;
    this.minutesup = false;
    this.minutesdown = false;
    this.ampmup = false;
    this.ampmdown = false;
  }

  ngOnInit() {
    this.initialize();
  }

}
