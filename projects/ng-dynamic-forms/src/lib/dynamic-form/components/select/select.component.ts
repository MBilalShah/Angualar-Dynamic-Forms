import { Component, OnInit } from '@angular/core';
import { FieldConfig } from './../../models/fieldConfig.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  field: FieldConfig;
  group: FormGroup;
  ngOnInit() {
  }

}
