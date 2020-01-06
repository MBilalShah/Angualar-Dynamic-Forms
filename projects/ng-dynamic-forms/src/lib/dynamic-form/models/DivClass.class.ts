import { FieldConfig } from './fieldConfig.model';

export class DivClass extends FieldConfig {

    constructor(children: FieldConfig[], classes?: any[], values?: any, style?: any) {
        super()
        this.element = "div"
        this.children = children;
        this.classes = classes;
        this.values = values;
        this.style = style
    }
}