import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() public pPostMan : any;

  @Output()  public cData = new EventEmitter();

  onClick(){
    this.cData.emit("This is a child Component")
  }
}
