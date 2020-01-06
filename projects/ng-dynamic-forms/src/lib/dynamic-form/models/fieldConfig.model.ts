import { Validator } from './validator.model';
import { Options } from './options.model';
import { InputTypes } from '../constants/InputTypes.enum';

export class FieldConfig {
    label?: string;
    name?: string;
    type?: InputTypes | string;
    options?: Options[];
    collections?: any;
    element: string;
    values?: any;
    validations?: Validator[]
    style?: string;
    classes?: string[];
    children?: FieldConfig[]
    onSubmit?: any;
    //for autocomplete
    bindLabel?: string;
    bindValue?: string;
    multiple?: boolean
}