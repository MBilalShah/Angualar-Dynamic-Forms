import { InputTypes } from '../constants/InputTypes.enum';
import { Options } from './options.model';
import { Validator } from './validator.model';
import { FieldConfig } from './fieldConfig.model';
import { ComponentTypes } from '../constants/ComponentTypes.enum';
import { Validators } from '@angular/forms';

export class AutoCompleteClass extends FieldConfig {

    constructor(
        label: string,
        name: string,
        bindLabel: string,
        bindValue: string,
        onSubmit: any,
        mulitple: any,
        // inputType: InputTypes | string,
        values?: any,
        validations?: Validator[],
        style?: string,
        classes?: string[],

    ) {
        super();
        this.element = ComponentTypes.autocomplete;
        this.label = label;
        this.name = name;
        this.multiple = mulitple
        this.bindLabel = bindLabel;
        this.bindValue = bindValue;
        this.onSubmit = onSubmit;
        // this.type = inputType;
        this.values = values;
        this.validations = validations;
        this.style = style;
        this.classes = classes;
    }
}