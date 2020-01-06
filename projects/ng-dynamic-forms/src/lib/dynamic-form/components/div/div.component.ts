import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from './../../models/fieldConfig.model';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {

  constructor() { }
  group: FormGroup;
  field: FieldConfig;
  ngOnInit() {
    console.log('HHHHH')
    console.log(this.group, this.field)
  }

}
