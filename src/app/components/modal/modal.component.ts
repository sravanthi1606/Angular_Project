import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() employeeAdded = new EventEmitter<void>();
  private modalService = inject(NgbModal);

  constructor(private empDetails: CourseService) { }


  openLg(content: TemplateRef<any>) {
    const modal = this.modalService.open(content, { size: 'lg' });
    console.log(modal.componentInstance, 'modal');

  }

  openXl(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'xl' });
  }

  addEditForm: FormGroup

  OnAddEditSubmit() {
    console.log('submit', this.addEditForm);
    const newEmployee: any = {
      id: this.empDetails.getSingleEmpData().data.length + 1,
      employee: this.addEditForm.value.employee,
      mobileNumber: Number(this.addEditForm.value.mobileNumber),
      company: this.addEditForm.value.company,
      projectName: this.addEditForm.value.projectName,
      projectDescription: this.addEditForm.value.projectDescription,
      technology: [this.addEditForm.value.technology],
      experience: Number(this.addEditForm.value.experience),
      noticePeriod: Number(this.addEditForm.value.noticePeriod),
      verified: this.addEditForm.value.verified,
    }
    console.log(newEmployee, 'newEmployee');
    this.empDetails.addEmployee(newEmployee)
    this.employeeAdded.emit();
    this.addEditForm.reset();

  }

  ngOnInit() {
    this.addEditForm = new FormGroup({
      employee: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(4), Validators.pattern("^[a-zA-Z]+$")]),
      mobileNumber: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
      company: new FormControl(null, Validators.required),
      projectName: new FormControl(null, Validators.required),
      projectDescription: new FormControl(null, Validators.required),
      technology: new FormControl(null, Validators.required),
      experience: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{2}")]),
      noticePeriod: new FormControl(null, Validators.required),
      verified: new FormControl(null, Validators.required),

    })
  }

}


