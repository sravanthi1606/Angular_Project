import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '../../services/course.service';
import { tick } from '@angular/core/testing';
interface Employee {
	id: number;
	employee: string;
	technology: string[];
	experience: number;
	noticePeriod: number;
	verified: string;
}

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
	selector: 'app-employee-modal',
	standalone: true,
	imports: [],
	templateUrl: './employee-modal.component.html',
	styleUrl: './employee-modal.component.css',
	providers: [NgbModalConfig, NgbModal],
})
export class EmployeeModalComponent {
	@Input() employees!: EmployeeData;


	constructor(public activeModal: NgbActiveModal) { }

}











//   public employeeData : EmployeeData[]=[]
//   public data : EmployeeData | undefined
