import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldConfig } from './../../models/fieldConfig.model';
import { Validator } from '../../models/validator.model';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldConfig[]
  @Output() submit = new EventEmitter<any>();
  constructor(private fb: FormBuilder) { }
  form: FormGroup;

  ngOnInit() {
    //creates formcontrols according to field array
    this.form = this.createControl(this.fields);
  }
  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  /**
   * Accepts an array of FieldConfig and creates controls accordingly.
   * @param fields :FieldConfig[]
   * @returns FormGroup
   */
  createControl(fields: FieldConfig[]) {
    const group = this.fb.group({});

    this.createChildControls(fields, group)

    return group;
  }

  /**
   * Recursive function that creates form controls including children of elements
   * @param fields array to map to form controls
   * @param group form group reference to add fields to
   */
  createChildControls(fields: FieldConfig[], group: FormGroup) {
    console.log('HHHHHIOIH')
    fields.forEach(field => {
      if (field.element === "button") return;

      if (field.element === "div") {
        if (field.children && field.children.length > 0) {
          this.createChildControls(field.children, group)
        }
        return;
      }
      const control = this.fb.control(
        field.values
        , this.bindValidations(field.validations)
      )
      group.addControl(field.name, control)

    })
  }
  /**
   * binds validations to form controls
   * @param validations validations to bind to
   */
  bindValidations(validations: Validator[]) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
