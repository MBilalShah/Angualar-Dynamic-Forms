import { FieldConfig } from './fieldConfig.model';
import { ComponentTypes } from '../constants/ComponentTypes.enum';
import { Options } from './options.model';
import { Validator } from './validator.model';

export class SelectClass extends FieldConfig{
    constructor(
        label:string,
        name:string,
        options:Options[],
        values?:any,
        validations?:Validator[],
        classes?:any[]){
        super();
        this.element=ComponentTypes.select;
        this.label=label;
        this.name=name;
        this.options=options;
        this.values=values;
        this.validations=validations;
        this.classes=classes;
    }
} 