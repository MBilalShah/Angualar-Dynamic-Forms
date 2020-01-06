import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../models/fieldConfig.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  constructor() { }

  field: FieldConfig;
  group: FormGroup;
  items: [] = []
  ngOnInit() {
  }
  keyDownEvent(event) {
    this.field.onSubmit(event.target.value).then(items => {
      this.items = items
    })
  }
}
