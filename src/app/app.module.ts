import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArcProgressComponent } from './arc-progress/arc-progress.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressLargeComponent } from './progress-large/progress-large.component';
import { ProgressSmallComponent } from './progress-small/progress-small.component';
import { QuestionComponent } from './question/question.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { SwitchComponent } from './switch/switch.component';
import { CardComponent } from './card/card.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CompareComponent } from './compare/compare.component';

import { RawHtmlPipe } from './raw-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArcProgressComponent,
    ButtonComponent,
    CheckboxComponent,
    ComboBoxComponent,
    DatePickerComponent,
    ProgressBarComponent,
    ProgressLargeComponent,
    ProgressSmallComponent,
    QuestionComponent,
    RadioComponent,
    SelectComponent,
    SliderComponent,
    TextBoxComponent,
    SwitchComponent,
    CardComponent,
    CardsContainerComponent,
    CompareComponent,
    RawHtmlPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
