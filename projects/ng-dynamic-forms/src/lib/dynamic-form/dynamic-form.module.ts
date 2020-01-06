import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { DivComponent } from './components/div/div.component';
// import { DynamicFormComponentDemo } from './dynamic-form-component/dynamic-form.component';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
// import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    DivComponent,
    // DynamicFormComponentDemo,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    AutoCompleteComponent
  ], exports: [
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    DivComponent,
    // DynamicFormComponentDemo,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // SharedModule
  ], entryComponents: [
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    DivComponent,
    InputComponent,
    SelectComponent,
    RadiobuttonComponent,
    AutoCompleteComponent,
    // CheckboxComponent
  ]
})
export class DynamicFormModule { }
