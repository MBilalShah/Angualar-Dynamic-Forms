import { Directive, ComponentFactoryResolver, ViewContainerRef, Input, ComponentRef, Renderer2 } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { DateComponent } from '../components/date/date.component';
import { InputComponent } from '../components/input/input.component';
import { RadiobuttonComponent } from '../components/radiobutton/radiobutton.component';
import { SelectComponent } from '../components/select/select.component';
import { FieldConfig } from '../models/fieldConfig.model';
import { FormGroup } from '@angular/forms';
import { DivComponent } from '../components/div/div.component';
import { ComponentTypes } from '../constants/ComponentTypes.enum';
import { AutoCompleteComponent } from '../components/auto-complete/auto-complete.component';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective {
  componentMapper = {
    button: ButtonComponent,
    checkbox: CheckboxComponent,
    date: DateComponent,
    input: InputComponent,
    radiobutton: RadiobuttonComponent,
    select: SelectComponent,
    div: DivComponent,
    autocomplete: AutoCompleteComponent
  }
  constructor(private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef, private renderer: Renderer2) { }
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: ComponentRef<any>;
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.componentMapper[this.field.element]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
    if ((!this.field.classes || this.field.classes.length == 0 || this.field.element == 'button')) return;
    this.field.classes.forEach(className => {
      this.renderer.addClass(this.componentRef.location.nativeElement, className)
    })
  }
}
