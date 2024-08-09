import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.css'
})
export class ProfileModalComponent {
  @Input() currentUser:any;
 
  constructor(public modalRef: NgbActiveModal) {}
  ngOnInit(){
    console.log(this.currentUser,'user');
    
  }
}


