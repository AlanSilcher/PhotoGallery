/* import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.css']
})
export class ColorFilterComponent {
  @Output() colorSelected = new EventEmitter<string>();

  selectedColor: string = '';

  colors: string[] = [
    '', 
    'black_and_white',
    'black',
    'white',
    'yellow',
    'orange',
    'red',
    'purple',
    'magenta',
    'green',
    'teal',
    'blue'
  ];

  selectColor(color: string) {
    this.selectedColor = color;
    this.colorSelected.emit(this.selectedColor);
  }
}
 */