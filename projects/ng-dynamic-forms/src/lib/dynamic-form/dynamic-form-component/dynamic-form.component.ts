import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FieldConfig } from '../models/fieldConfig.model';
import { DivClass } from '../models/DivClass.class';
import { InputClass } from '../models/InputClass.class';
import { InputTypes } from '../constants/InputTypes.enum';
import { Validators, FormGroup } from '@angular/forms';
import { ButtonClass } from '../models/ButtonClass.class';
import { ButtonTypes } from '../constants/ButtonTypes.enum';
import { ComponentTypes } from '../constants/ComponentTypes.enum';
import { RadioButtonClass } from '../models/RadioButtonClass.class';
import { Button } from 'protractor';
import { DynamicFormComponent } from './../components/dynamic-form/dynamic-form.component'
import { Validator } from '../models/validator.model';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponentDemo implements OnInit {

  constructor() { }
  @ViewChild(DynamicFormComponent,{static:false}) form: DynamicFormComponent;
  ngOnInit() {
  }
  _form: FormGroup;
  ngAfterViewInit() {
    console.log(this.form.form)
    this._form = this.form.form;
    if (this._form.controls['gender'].value == "male") {
      let elem: RadioButtonClass = this.fieldConfig[0].children[11];


      elem.classes.push('hidden-class')

    }
    this._form.controls['gender'].valueChanges.subscribe(value => {
      let elem: RadioButtonClass = this.fieldConfig[0].children[11];

      if (value == 'male') {

        elem.classes.push('hidden-class')
      } else {

        elem.classes = elem.classes.filter(className => {
          if (className != 'hidden-class') { return className }
        })
      }
    })
  }

  fieldConfig: FieldConfig[] = [
    new DivClass([
      new InputClass('Name *', 'name', InputTypes.text, '', [{ name: 'required', message: 'Name is required!', validator: Validators.required }]),
      new InputClass('Description', 'description', InputTypes.text, '', []),
      new InputClass('Short Description', 'shortDescription', InputTypes.text, '', []),
      new InputClass('Medium Description', 'mediumDescription', InputTypes.text, '', []),
      new InputClass('Long Description', 'longDescription', InputTypes.text, '', []),
      new InputClass('Comments', 'comments', InputTypes.text, '', []),
      new ButtonClass('Save', ['btn', 'btn-successs'], ButtonTypes.button, this.buttonFunction)

    ])
  ]
  buttonFunction() {
    // alert('hi there!')
  }
  // fieldConfig: FieldConfig[] = [
  //   new DivClass([
  //     new InputClass('First Name', 'firstName', InputTypes.text, 'Shansa', [{ name: 'required', validator: Validators.required, message: 'First Name is required' }], '', ['col-3']),
  //     new InputClass('Middle Name', 'middleName', InputTypes.text, 'Bilal', [{ name: 'required', validator: Validators.required, message: 'Middle Name is required' }], '', ['col-3']),
  //     new InputClass('Last Name', 'lastName', InputTypes.text, 'Shah', [], '', ['col-3']),
  //     new InputClass('DOB', 'dob', InputTypes.date, '2019-12-11', [], '', ['col-3']),
  //     new InputClass('SSN*', 'ssn', InputTypes.text, '', [{ name: 'required', message: 'ssn is required', validator: Validators.required }], '', ['col-3']),
  //     new InputClass('Weight in lbs.', 'weight', InputTypes.number, '', [], '', ['col-3']),
  //     new InputClass('Height in Ft.', 'height-ft', InputTypes.text, '', [], '', ['col-3']),
  //     new InputClass('Height in inches', 'height-in', InputTypes.text, '', [], '', ['col-3']),
  //     new InputClass('Age', 'age', InputTypes.number, '', [], '', ['col-6']),
  //     new RadioButtonClass('Gender', 'gender', [{ name: 'male', label: "Male", value: "male" }, { name: 'female', value: 'female', label: 'Female' }], 'male', [], ['col-6']),
  //     new RadioButtonClass('Marital Status', 'maritalStatus', [{ name: 'single', label: 'Single', value: 'single' }, { name: 'married', label: 'Married', value: 'married' }, { name: 'widowed', label: 'Widowed', value: 'widowed' }], 'widowed', [], ['col-6']),
  //     new RadioButtonClass('Are you pregnant?', 'isPregnant', [{ name: 'yes', label: 'Yes', value: 'yes' }, { name: 'no', value: 'no', label: 'No' }], 'no', [], ['col-6']),
  //     new DivClass([
  //       new ButtonClass('Back', ['btn', 'btn-primary', 'btn-block'], ButtonTypes.reset, function () { alert("button pressed!") }),
  //       new ButtonClass('Save', ['btn', 'btn-success', 'btn-block'], ButtonTypes.submit)
  //     ], ['col-12', 'row'])
  //   ], ['row', 'ml-1'])
  // ];
  submit(event) {
    console.log(event)
  }
  enableForm() {
    this._form.disabled ? this._form.enable() : this._form.disable()

  }

}