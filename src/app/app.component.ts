import { Component, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logo = require('../assets/sm_logo.svg');
  searchblack = require('../assets/search_icon_black.svg');
  searchblue = require('../assets/search_icon_blue.svg');
  arrowicon = require('../assets/arrow_icon_white.svg');
  arrow_left_icon = require('../assets/arrow_small_blue_left.svg');
  progressPercent: number = 0.25;
  componentFilter = {
    'value': ''
  };
  model: boolean = true;
  answer = 'yes';
  Math: any;
  options = [
    'yes',
    'no',
    'maybe',
    'nice try',
    'knock-knock',
    'goodbye'
  ]
  multiple_options = [
    {
      'value': 'option 1',
      'selected': false
    },{
      'value': 'option 2',
      'selected': false
    },{
      'value': 'option 3',
      'selected': true
    }
  ]
  pagenumber: number = 0;
  date: Date = new Date("March 25, 2017 1:30 PM");
  colorarray: Array<string> = ["#FF693C", "#FFCF7D", "#1EBE78"];
  compareData: Array<any> = [
    {
      'name': 'Failed',
      'number': 10,
      'color': '#FF693C'
    },{
      'name': 'Passed',
      'number': 15,
      'color': '#1EBE78'
    },{
      'name': 'Unscanned',
      'number': 108,
      'color': '#2196F3'
    }
  ]

  constructor(private _renderer: Renderer) {
    this.Math = Math;
  }

  updatePageNumber(number) {
    setTimeout(() => {
      this.pagenumber = number;
    }, 0);
  }

  log(message) {
    console.log(message);
  }

  components = [
      {
        'name': 'compare',
        'componentName': 'app-compare',
        'tags': 'percent, three, comparison, chart, data, display, numbers, stat',
        'code': '<app-compare></app-compare>',
        'unfinished': true,
        'dependencies': null,
        'notes': 'compare lets you show a comparison between two or more components of a larger data set.',
        'api': [
          {
            'name': 'data',
            'type': 'input',
            'format': 'Array of objects, which should each include keys \'name\', \'number\', and \'color\'',
            'description': 'The data you want to show a comparison for'
          },{
            'name': 'total_height',
            'type': 'input',
            'format': 'number',
            'description': 'This will default to 350 pixels, but you can change the widget height to whatever you want'
          }
        ]
      },{
        'name': 'datepicker-input',
        'componentName': 'app-datepicker-input',
        'tags': 'date, datepicker, input, schedule, scheduler, time, picker, calendar',
        'code': '<app-datepicker-input></app-datepicker-input>',
        'dependencies': 'app-datepicker',
        'notes': 'datepicker-input is an input box wrapper for the datepicker component. Clicking on it will display a pop-up calendar.',
        'api': [
          {
            'name': 'utc',
            'type': 'input',
            'format': 'boolean (true)',
            'description': 'Sets datepicker to expect a date object in UTC time when true. The date will be displayed to the user in their local time, but represented as utc time behind the scenes'
          },{
            'name': 'timepicker',
            'type': 'input',
            'format': 'boolean (false)',
            'description': 'Displays a timepicker below the datepicker'
          },{
            'name': 'date',
            'type': 'input/output',
            'format': 'Javascript Date Object',
            'description': 'The date to be displayed / modified.'
          },{
            'name': 'dateChange',
            'type': 'output',
            'format': 'function(Date)',
            'description': 'An event that is fired when the date or time is changed'
          }
        ]
      }, {
        'name': 'combo-box',
        'componentName': 'app-combo-box',
        'tags': 'select, input, text, combo, dropdown, suggestion, suggestions, form',
        'code': `<app-combo-box [placeholder]="'Type something...'" [label]="true" [(model)]="someVar" [options]="someArray"></app-combo-box>`,
        'dependencies': null,
        'notes': 'app-combo-box is a combination of a text input field and a select element. You can either enter text manually or select from a list. As you type, suggestions will appear from the list.',
        'api': [
          {
            'name': 'options',
            'type': 'input',
            'format': 'array of strings',
            'description': 'A list of possible options to display if used as a dropdown, and to display as suggestions while typing'
          },{
            'name': 'placeholder',
            'type': 'input',
            'format': 'string',
            'description': 'placeholder value to display when field is empty, also shows as label when label input is set to true',
          },{
            'name': 'label',
            'type': 'input',
            'format': 'boolean (false)',
            'description': 'If a placeholder is set and this is set to true, the placeholder text will pop above the field when focused or when not empty'
          },{
            'name': 'model',
            'type': 'input/output',
            'format': 'string (passed in as a variable)',
            'description': 'the variable you want to be changed by the combo-box. Should be a string'
          }
        ]
      },{
        'name': 'progress-large',
        'componentName': 'app-progress-large',
        'tags': 'progress, chart, graph, percent, data, large',
        'code': `<app-progress-large [percent]="someVariable" [size]="'small'" [showPercent]="true" [shadow]="true" [colors]="true" [checkComplete]="false">
          content here
        </app-progress-large>`,
        'dependencies': null,
        'notes': 'The interior of the progress-large component is fully customizable, just treat it like a container',
        'api': [
          {
            'name': 'percent',
            'type': 'input',
            'format': 'number (0-1)',
            'description': 'The percent (from 0 to 1) that you want represented. Updates in real time.'
          },{
            'name': 'size',
            'type': 'input',
            'format': 'string (small)',
            'description': 'Sets the size of the component. Available options are small, medium and large. Defaults to small'
          },{
            'name': 'shadow',
            'type': 'input',
            'format': 'boolean (true)',
            'description': 'Gray background ring for unfilled area visible when true.'
          },{
            'name': 'colors',
            'type': 'input',
            'format': 'Array of strings',
            'description': 'An array of colors (in hex format) which the graph will change to depending on the given percentage.'
          },{
            'name': 'checkComplete',
            'type': 'input',
            'format': 'boolean (false)',
            'description': 'Replace contents with checkmark upon completion when true.'
          }
        ]
      },{
        'name': 'progress-small',
        'componentName': 'app-progress-small',
        'tags': 'progress, chart, graph, percent, data',
        'code': `<app-progress-small [percent]="someVariable" [showPercent]="true" [shadow]="true" [colors]="true"></app-progress-small>`,
        'dependencies': null,
        'notes': null,
        'api': [
          {
            'name': 'percent',
            'type': 'input',
            'format': 'number (0-1)',
            'description': 'The percent (from 0 to 1) that you want represented. Updates in real time.'
          },{
            'name': 'showPercent',
            'type': 'input',
            'format': 'boolean (true)',
            'description': 'Shows current percent completion in the middle when true.'
          },{
            'name': 'shadow',
            'type': 'input',
            'format': 'boolean (true)',
            'description': 'Gray background ring for unfilled area visible when true.'
          },{
            'name': 'colors',
            'type': 'input',
            'format': 'Array of strings',
            'description': 'An array of colors (in hex format) which the graph will change to depending on the given percentage.'
          }
        ]
      },{
        'name': 'arc-progress',
        'componentName': 'app-arc-progress',
        'tags': 'progress, arc, arc-progress, rainbow, chart, graph, percent, data',
        'code': '<app-arc-progress [percent1]="someVariable" [percent2]="someVariable"></app-arc-progress>',
        'dependencies': null,
        'notes': null,
        'api': [
          {
            'name': 'percent1',
            'type': 'input',
            'format': 'number (0-1)',
            'description': 'The percent (from 0 to 1) that you want represented by the outer circle. Updates in real time.'
          },{
            'name': 'percent2',
            'type': 'input',
            'format': 'number (0-1)',
            'description': 'The percent (from 0 to 1) that you want represented by the inner circle. Updates in real time.'
          },{
            'name': 'shadow',
            'type': 'input',
            'format': 'boolean (true)',
            'description': 'Gray background ring for unfilled area visible when true.'
          },{
            'name': 'size',
            'type': 'input',
            'format': 'string (small)',
            'description': 'Sets the size of the component. Available options are small, medium and large. Defaults to small'
          },{
            'name': 'colors1',
            'type': 'input',
            'format': 'Array of strings',
            'description': 'An array of colors (in hex format) which the outer graph will change to depending on the given percentage.'
          },{
            'name': 'colors2',
            'type': 'input',
            'format': 'Array of strings',
            'description': 'An array of colors (in hex format) which the inner graph will change to depending on the given percentage.'
          }
        ]
      },{
        'name': 'progress-bar',
        'componentName': 'app-progress-bar',
        'tags': 'progress, percent, completion, bar, progress-bar, percentage, status, chart, graph, data',
        'code': `<app-progress-bar [percent]="someVar" [fraction]="someNumber" [total]="someNumber" [showFraction]="true"></app-progress-bar>`,
        'dependencies': null,
        'notes': 'app-progress-bar is a simple progress bar with the option to show the number complete of a total number. If you specify number and total, percent will be calculated and take priority over the percent input',
        'api': [
          {
            'name': 'percent',
            'type': 'input',
            'format': 'number (0-1)',
            'description': 'Simple way of representing a passed in percent (no label this way)',
          },{
            'name': 'fraction',
            'type': 'input',
            'format': 'number',
            'description': 'If specified along with \'total\', this will override percent and calculate the percent automatically. This gives you the option of showing the fraction above the bar'
          },{
            'name': 'total',
            'type': 'input',
            'format': 'number',
            'description': 'If specified along with \'number\', this will override percent and calculate the percent automatically. This gives you the option of showing the fraction above the bar'
          },{
            'name': 'showFraction',
            'type': 'input',
            'format': 'boolean (false)',
            'description': 'If you have specified a number and a total as inputs, this will show the fraction above the bar'
          }
        ]
      },{
        'name': 'button',
        'componentName': 'app-button',
        'tags': 'button, click, input, submit, controls, link',
        'code': `<app-button [lighten]="true" [color]="'blue'" [icon]="icon1" (click)="someFunction()">button</app-button>`,
        'dependencies': null,
        'notes': 'Solid button should be used for primary actions, outline button for secondary action',
        'api': [
          {
            'name': 'title',
            'type': 'input',
            'format': 'string',
            'description': 'Set the text of the button (deprecated, just put the text inside the app-button tags now). Overrides inner text.',
          },{
            'name': 'lighten',
            'type': 'input',
            'format': 'boolean (false)',
            'description': 'Animates button to lighter color on hover when true'
          },{
            'name': 'dim',
            'type': 'input',
            'format': 'boolean (true)',
            'description': 'Animates button to darker color on hover when true'
          },{
            'name': 'icon',
            'type': 'input',
            'format': 'image source (set with require)',
            'description': 'Adds an icon to the right side of the button'
          },{
            'name': 'icon_left',
            'type': 'input',
            'format': 'image source (set with require)',
            'description': 'Adds an icon to the left side of the button'
          },{
            'name': 'secondary',
            'type': 'input',
            'format': 'boolean (false)',
            'description': 'Display button as secondary (outline) version'
          },{
            'name': 'color',
            'type': 'input',
            'format': 'string (blue [ red | green | white ])',
            'description': 'Set background color of button'
          },{
            'name': 'disabled',
            'type': 'input',
            'format': 'boolean (false)',
            'description': 'Disables all button events, turns it gray'
          }
        ]
      },
      {
        'name': 'textbox',
        'componentName': 'app-text-box',
        'tags': 'field, input, text, type, form, search, box',
        'code': `<app-text-box [placeholder]="'Text...'" [iconInactive]="icon1" [iconActive]="icon2" [(model)]="someVar" (modelChange)="someFunction($event)"></app-text-box>`,
        'dependencies': null,
        'notes': 'A custom underline style text box with a label/placeholder that gets out of the way when you focus or enter text in the field.',
        'api': [
          {
            'name': 'placeholder',
            'type': 'input',
            'format': 'string',
            'description': 'The placeholder / label for the text box.'
          },{
            'name': 'label',
            'type': 'input',
            'format': 'boolean (false)',
            'description': 'if a placeholder is set, setting the label input to true will cause it to pop above the field as a label when text is entered or the field is focused'
          },{
            'name': 'iconInactive',
            'type': 'input',
            'format': 'image source (set with require)',
            'description': 'An icon to display on the right side when the text field is inactive'
          },{
            'name': 'iconActive',
            'type': 'input',
            'format': 'image source (set with require)',
            'description': 'An icon to display on the right side when the text field is active'
          },{
            'name': 'model',
            'type': 'input/output',
            'format': 'string',
            'description': 'String to control with the text field'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(string)',
            'description': 'An event that fires when the model is changed. Returns the model string as $event'
          },{
            'name': 'disabled',
            'type': 'input',
            'format': 'boolean (false)',
            'description': 'Sets the text box to disabled'
          }
        ]
      },
      {
        'name': 'slider',
        'componentName': 'app-slider',
        'tags': 'slider, percent, controls, input',
        'code': `<app-slider [(model)]="someVar" (modelChange)="someFunction($event)"></app-slider>`,
        'dependencies': null,
        'notes': 'A slider to control percentage or range based data',
        'api': [
          {
            'name': 'model',
            'type': 'input/output',
            'format': 'number (0-1)',
            'description': 'The number (from 0 to 1) that should be manipulated by the slider'
          },{
            'name': 'watch',
            'type': 'input',
            'format': 'any',
            'description': 'A way of providing a variable to watch that will tell the slider handle to be respositioned when it is changed'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(number)',
            'description': 'An event that is fired when the model is updated. Returns the model number as $event'
          }
        ]
      },
      {
        'name': 'switch',
        'componentName': 'app-switch',
        'tags': 'switch, on, off, toggle, controls',
        'code': `<app-switch [(model)]="someVar" (modelChange)="someFunction($event)"></app-switch>`,
        'dependencies': null,
        'notes': 'A switch that can be used to toggle on/off state data',
        'api': [
          {
            'name': 'model',
            'type': 'input/output',
            'format': 'boolean (false)',
            'description': 'The boolean that should be toggled by the switch'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(boolean)',
            'description': 'An event that is fired when the model is updated. Returns the model boolean as $event'
          }
        ]
      },
      {
        'name': 'card',
        'componentName': 'app-card',
        'tags': 'card, container',
        'code':
          `<app-card>
            <div class="example-card-content">Example Card</div>
          </app-card>`,
        'dependencies': null,
        'notes': 'A simple container that puts the content inside of a pre-styled card.',
        'api': null
      },{
        'name': 'checkbox',
        'componentName': 'app-checkbox',
        'tags': 'checkbox, select, input, choose',
        'code':
          `<app-checkbox [(model)]="someVar" (modelChange)="someFunction($event)"></app-checkbox>`,
        'dependencies': null,
        'notes': 'A pre-styled checkbox',
        'api': [
          {
            'name': 'model',
            'type': 'input/output',
            'format': 'boolean (false)',
            'description': 'The boolean that should be toggled by the checkbox'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(boolean)',
            'description': 'An event that is fired when the model is updated. Returns the model boolean as $event'
          }
        ]
      },{
        'name': 'radio',
        'componentName': 'app-radio',
        'tags': 'radio, select, choose, input',
        'code':
          `<app-radio class="block" [(model)]="someVar" [value]="true">true</app-radio>`,
        'dependencies': null,
        'notes': 'A pre-styled radio button',
        'api': [
          {
            'name': 'model',
            'type': 'input/output',
            'format': 'any',
            'description': 'The variable that should be set by the radio'
          },{
            'name': 'value',
            'type': 'input',
            'format': 'any',
            'description': 'The value the radio should set the model to'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(boolean)',
            'description': 'An event that is fired when the model is updated. Returns the current value of model as $event'
          }
        ]
      },{
        'name': 'select',
        'componentName': 'app-select',
        'tags': 'select, dropdown, input, choose, pick',
        'code':
          `<app-select [(model)]="someVar" (modelChange)="someFunction($event)" [options]="someArray"></app-select>`,
        'dependencies': null,
        'notes': 'A pre-styled select element',
        'api': [
          {
            'name': 'model',
            'type': 'input/output',
            'format': 'any',
            'description': 'The variable that should be set by the select'
          },{
            'name': 'options',
            'type': 'input',
            'format': 'array',
            'description': 'An array of values the select should display as options'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(boolean)',
            'description': 'An event that is fired when the model is updated. Returns the current value of model as $event'
          }
        ]
      },{
        'name': 'question',
        'componentName': 'app-question',
        'type': 'yesno',
        'tags': 'question, answer, card, form',
        'code':
          `<app-question [type]="'yesno'" [(model)]="someVar">
            <div class="example-question-text">Question Text</div>
          </app-question>`,
        'dependencies': 'app-card (component), app-select (component), app-radio (component), app-checkbox (component)',
        'notes': 'There are currently 4 question types available: Yes/No, Multiple Choice, Select, Multiple Answer and Free Response',
        'api': [
          {
            'name': 'type',
            'type': 'input',
            'format': 'string',
            'description': 'Determines what type of question this is. Options are \'yesno\', \'multiplechoice\', \'multipleanswer\', \'select\', and \'freeresponse\''
          },{
            'name': 'model',
            'type': 'input/output',
            'format': 'string (yes or no)',
            'description': 'A string (or variable string) set to \'yes\' or \'no\' representing the answer to the question'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(model)',
            'description': 'An event that is fired when answer is updated. Returns the model string as $event'
          }
        ]
      },{
        'name': 'question',
        'componentName': 'app-question',
        'type': 'multiplechoice',
        'tags': 'question, answer, card, multiplechoice, radio, form',
        'code':
          `<app-question [type]="'multiplechoice'" [(model)]="someVar" [options]="someArray">
            <div class="example-question-text">Question Text</div>
          </app-question>`,
        'dependencies': 'app-card (component), app-select (component), app-radio (component), app-checkbox (component)',
        'notes': 'There are currently 4 question types available: Yes/No, Multiple Choice, Select, Multiple Answer and Free Response',
        'api': [
          {
            'name': 'type',
            'type': 'input',
            'format': 'string',
            'description': 'Determines what type of question this is. Options are \'yesno\', \'multiplechoice\', \'multipleanswer\', \'select\', and \'freeresponse\''
          },{
            'name': 'options',
            'type': 'input',
            'format': 'Array of strings',
            'description': 'An array of strings to be made available as response options'
          },{
            'name': 'model',
            'type': 'input/output',
            'format': 'string',
            'description': 'A string (or variable string) representing the answer to the question'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(model)',
            'description': 'An event that is fired when answer is updated. Returns the model string as $event'
          }
        ]
      },{
        'name': 'question',
        'componentName': 'app-question',
        'type': 'multipleanswer',
        'tags': 'question, answer, card, multipleanswer, radio, form',
        'code':
          `<app-question [type]="'multipleanswer'" [(model)]="someObjArray">
            <div class="example-question-text">Question Text</div>
          </app-question>`,
        'dependencies': 'app-card (component), app-select (component), app-radio (component), app-checkbox (component)',
        'notes': 'There are currently 4 question types available: Yes/No, Multiple Choice, Select, Multiple Answer and Free Response',
        'api': [
          {
            'name': 'type',
            'type': 'input',
            'format': 'string',
            'description': 'Determines what type of question this is. Options are \'yesno\', \'multiplechoice\', \'multipleanswer\', \'select\', and \'freeresponse\''
          },{
            'name': 'model',
            'type': 'input/output',
            'format': 'Array of objects',
            'description': 'Format would be [{\'value\': \'option 1\', \'selected\': \'false\'}]'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(model)',
            'description': 'An event that is fired when answer is updated. Returns the model array as $event'
          }
        ]
      },{
        'name': 'question',
        'componentName': 'app-question',
        'type': 'select',
        'tags': 'question, answer, card, select, radio, form',
        'code':
          `<app-question [type]="'select'" [(model)]="someVar" [options]="someArray">
            <div class="example-question-text">Question Text</div>
          </app-question>`,
        'dependencies': 'app-card (component), app-select (component), app-radio (component), app-checkbox (component)',
        'notes': 'There are currently 4 question types available: Yes/No, Multiple Choice, Select, Multiple Answer and Free Response',
        'api': [
          {
            'name': 'type',
            'type': 'input',
            'format': 'string',
            'description': 'Determines what type of question this is. Options are \'yesno\', \'multiplechoice\', \'multipleanswer\', \'select\', and \'freeresponse\''
          },{
            'name': 'options',
            'type': 'input',
            'format': 'Array of strings',
            'description': 'An array of strings to be made available as response options'
          },{
            'name': 'model',
            'type': 'input/output',
            'format': 'string',
            'description': 'A string (or variable string) representing the answer to the question'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(model)',
            'description': 'An event that is fired when answer is updated. Returns the model string as $event'
          }
        ]
      },{
        'name': 'question',
        'componentName': 'app-question',
        'type': 'freeresponse',
        'tags': 'question, answer, card, free response, freeresponse, radio, form',
        'code':
          `<app-question [type]="'freeresponse'" [(model)]="someVar">
            <div class="example-question-text">Question Text</div>
          </app-question>`,
        'dependencies': 'app-card (component), app-select (component), app-radio (component), app-checkbox (component)',
        'notes': 'There are currently 5 question types available: Yes/No, Multiple Choice, Select, Multiple Answer and Free Response',
        'api': [
          {
            'name': 'type',
            'type': 'input',
            'format': 'string',
            'description': 'Determines what type of question this is. Options are \'yesno\', \'multiplechoice\', \'multipleanswer\', \'select\', and \'freeresponse\''
          },{
            'name': 'model',
            'type': 'input/output',
            'format': 'string',
            'description': 'A string (or variable string) representing the answer to the question'
          },{
            'name': 'modelChange',
            'type': 'output',
            'format': 'function(model)',
            'description': 'An event that is fired when answer is updated. Returns the model string as $event'
          }
        ]
      }
   ]
}

