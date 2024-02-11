import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoRowComponent } from './components/info-row/info-row.component';
import { CardComponent } from './components/card/card.component';
import { TipSelectComponent } from './components/tip-select/tip-select.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    ButtonComponent,
    InfoRowComponent,
    CardComponent,
    TipSelectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
