import { Component, Output, ViewChild, EventEmitter, TemplateRef, inject, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbDatepickerModule, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';

interface EmployeeData {
  id: number;
  employee: string;
  mobileNumber: number;
  projectName: string;
  company: string;
  projectDescription: string;
  technology: string[];
  experience: number;
  noticePeriod: number;
  verified: string;
}


@Component({
  selector: 'app-add-employee-modal',
  standalone: true,
  imports: [FormsModule, NgbDatepickerModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-employee-modal.component.html',
  styleUrl: './add-employee-modal.component.css',
  providers: [NgbModalConfig, NgbModal],
})

export class AddEmployeeModalComponent {


  constructor(public activeModal: NgbActiveModal, private empDetails: CourseService) { }
  @Output() employeeAdded = new EventEmitter<any>();
  @Input() employee: any;

  @Input() technologies: []
  @Input() technologName: string


  addEditForm: FormGroup

  OnAddEditSubmit() {
    console.log('submit', this.addEditForm.value);

    if (this.employee) {
      const editedEmp = {
        id: this.employee.id,
        employee: this.addEditForm.value.employee,
        mobileNumber: Number(this.addEditForm.value.mobileNumber),
        company: this.addEditForm.value.company,
        projectName: this.addEditForm.value.projectName,
        projectDescription: this.addEditForm.value.projectDescription,
        category : this.addEditForm.value.category,
        technology: this.addEditForm.value.technology,
        experience: Number(this.addEditForm.value.experience),
        noticePeriod: Number(this.addEditForm.value.noticePeriod),
        // verified: this.addEditForm.value.verified,
        verified : 'No',
      }
      const updateEmp = { ...this.employee, ...editedEmp }
      this.empDetails.EditUpdateEmployee(updateEmp)
      console.log(updateEmp, 'updateEmp');
      console.log(this.employee, 'hjfdsf')
    }
    else {
      const newEmployee: any = {
        id: this.empDetails.getSingleEmpData().data.length + 1,
        employee: this.addEditForm.value.employee,
        mobileNumber: Number(this.addEditForm.value.mobileNumber),
        gender: this.addEditForm.value.gender,
        company: this.addEditForm.value.company,
        projectName: this.addEditForm.value.projectName,
        projectDescription: this.addEditForm.value.projectDescription,
        category : this.addEditForm.value.category,
        technology: this.addEditForm.value.technology,
        experience: Number(this.addEditForm.value.experience),
        noticePeriod: Number(this.addEditForm.value.noticePeriod),
        verified: this.addEditForm.value.verified,
      }
      console.log('submit', this.addEditForm.value);

      console.log(newEmployee, 'newEmployee');
      this.empDetails.addEmployee(newEmployee)

    }
    this.employeeAdded.emit(true);
    this.addEditForm.reset();

  }

  ngOnInit() {
    this.addEditForm = new FormGroup({
      employee: new FormControl(this.employee ? this.employee.employee : null, [Validators.required, Validators.maxLength(10), Validators.minLength(4), Validators.pattern("^[a-zA-Z]+$")]),
      mobileNumber: new FormControl(this.employee ? this.employee.mobileNumber : null, [Validators.required, Validators.pattern("[0-9]{10}")]),
      gender : new FormControl(this.employee ? this.employee.gender : null, Validators.required),
      company: new FormControl(this.employee ? this.employee.company : null, Validators.required),
      projectName: new FormControl(this.employee ? this.employee.projectName : null, Validators.required),
      projectDescription: new FormControl(this.employee ? this.employee.projectDescription : null, Validators.required),
      category :new FormControl(this.employee ? this.employee.category : this.technologName),
      technology: new FormControl(this.employee ? this.employee.technology : [], Validators.required),
      experience: new FormControl(this.employee ? this.employee.experience : null, [Validators.required]),
      noticePeriod: new FormControl(this.employee ? this.employee.noticePeriod : null, Validators.required),
      verified: new FormControl(this.employee ? this.employee.verified : 'No',),

    })
    console.log(this.technologies, 'this.technologies in modal');
    console.log(this.technologName, 'this.technologName in modal');



    // this.getCardsData()
  }

  // getCardsData(){
  //   const data = this.empDetails.getData().data
  //   console.log(data,'data');

  // }

}






















// export class AddEmployeeModalComponent {


//   constructor(public activeModal: NgbActiveModal, private empData: CourseService) { }
//   @Output() employeeAdded = new EventEmitter<any>();
//   employee: any

//   EmployeeName = ''
//   MobileNumber: number
//   CompanyName = ''
//   ProjectName = ''
//   ProjectDescription = ''
//   Technologies = ''
//   Experience: number
//   NoticePeriod: number
//   Verified = ''

//   newEmployee: EmployeeData

//   @Output() employeeUpdated = new EventEmitter<any>();




//   @ViewChild('employeeForm') form: NgForm;
//   onSubmitForm() {

//     // if (this.employee) {
//     //   this.empData.updateEmployee(this.employee);
//     //   this.employeeUpdated.emit(true);
//     //   this.activeModal.close();
//     // }
//     // else{
//     console.log(this.form);

//     console.log(this.form.value.EmployeeName);
//     this.newEmployee = {
//       id: this.empData.getSingleEmpData().data.length + 1,
//       employee: this.form.value.EmployeeName,
//       mobileNumber: Number(this.form.value.MobileNumber),
//       company: this.form.value.CompanyName,
//       projectName: this.form.value.ProjectName,
//       projectDescription: this.form.value.ProjectDescription,
//       technology: [this.form.value.Technologies],
//       experience: this.form.value.Experience,
//       noticePeriod: Number(this.form.value.NoticePeriod),
//       verified: this.form.value.Verified
//     }
//     console.log('obj', this.newEmployee);
//     this.empData.addEmployee(this.newEmployee);


//     this.employeeAdded.emit(true);

//     this.activeModal.close();
//   }

//   ngOnInit() {
//     this.getEmpData();
//   }
//   getEmpData() {
//     const data = this.empData.getSingleEmpData();
//     console.log(data);

//   }

// }





