import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { EmployeeModalComponent } from '../employee-modal/employee-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule,RouterLink,EmployeeModalComponent,AddEmployeeModalComponent,ModalComponent],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {
  @Input() public shows:any
  @Output() back = new EventEmitter()

  @Input() public techs: string[] = [];

  @Input() public postTechnology :any=[]

  @Input() public technologyName : string

  public employeedata:any=[]

  public mergedData :any= [];
  selectedEmployee : any


  constructor(private empData: CourseService, private modalService: NgbModal,private route : ActivatedRoute) {}


  onBack(){
    this.back.emit();
  }



  ngOnInit() {
    this.getEmployees();

    console.log(this.technologyName,'this.technologyName');
    console.log(this.techs,'this.technologies');
    
    
  }

  getEmployees() {
    console.log("this.employees",this.empData.getSingleEmpData())
    const data = this.empData.getSingleEmpData();
    this.mergedData = data.data.filter((userObj: any) =>
      userObj.technology.find((item: any) => this.techs.includes(item)))
    
  }
    openAddEmpModal() {
    const modalRef = this.modalService.open(AddEmployeeModalComponent);
    modalRef.componentInstance.technologies = this.techs
    modalRef.componentInstance.technologName = this.technologyName
    modalRef.componentInstance.employeeAdded.subscribe(() => {
      this.getEmployees();
    });
  }
  employeeAdded(event:any){
    this.getEmployees()
  }


  openEditEmpModal(employee: any) {
    const modalRef = this.modalService.open(AddEmployeeModalComponent);
    modalRef.componentInstance.employee = employee;
    modalRef.componentInstance.employeeAdded.subscribe(() => this.getEmployees()); 
  }


  openModal(employee : any){
    const modalRef = this.modalService.open(EmployeeModalComponent);
    modalRef.componentInstance.employees = employee;
  }


  onDelete(id : number){
    this.empData.deleteEmployee(id)
    this.getEmployees();
  }



}






 


  // ngOnInit() {
    // console.log('text',this.techs);
    // this.getFrontendData();
  // }
  // ngOnChanges(changes: SimpleChanges) {
    // if (changes['techs']) {
    //   this.getFrontendData();
    //   console.log(changes['techs'].currentValue, 'Received technologies in child component on changes');
    // }
  // }\\ employees: EmployeeData[] = [];


  // getFrontendData(){


  //   const data = this._employeeDetails.getSingleEmpData()
  //   // if(data.status == 'success') {
  //     this.mergedData = data.data.filter((userObj: any) =>
  //       userObj.technology.find((item: any) => this.techs.includes(item))
  //     );
    // } else {
    //   this.mergedData = []
    // }
    // console.log('employeedata',data);
    
   
    // console.log(this.mergedData,'employee');

   
    // console.log(this.mergedData, 'Merged data');
  // }




























    // console.log(this.employeedata,'Employee Data');
    // console.log('hi')

 
      // this.postTechnology.forEach((d : any) => {
      //   // console.log('Processing data entry:', d);
      //   d.technologies.forEach((tech : any) => {
      //     // console.log('Processing technology:', tech);
      //     console.log(this.employeedata,'nfslflk');
          
      //     const employee = this.employeedata.find((e : any) => e.technology === tech);
      //     console.log(employee,'employee');
          
      //     if (employee) {
      //   //     console.log('Found employee for technology', tech, ':', employee);
      //       this.mergedData.push({(name: employee.name) });
      //     }
      //   //  else {
      //   //     console.log('No employee found for technology:', tech);
      //   //   }
      //   });
      // });
    

    // this.postTechnology.forEach(d => {
    //   console.log(d,'d');
      
    //   d.technologies.forEach(tech => {
    //     const employee = this.employeedata.find(e => e.technology === tech);
    //     if (employee) {
    //       this.mergedData.push({name:employee.name});
    //     }
    //     console.log(employee,'fsjhfn');

    //   });
    // });
    
  

    

    // console.log(this.postTechnology,'this.postTechnology');
    
    // this.postTechnology.map((technology)=>console.log(technology)
    // )
    // this.postTechnology = this.postTechnology.filter(technology =>{
    //   if(technology.category === 'Frontend'){

    //   }
    // })
    
    // this.selectedTechnology = this.routes.snapshot.paramMap.get('technology');
    // console.log("this.seected",this.selectedTechnology);

    // this.technology = this.technology.getData().data.filter(technologyCard => technologyCard.technologyName === this.selectedTechnology);
    // console.log("this.technology",this.technology.getData().data);

    // this.postMan = this.postMan.filter(technologyCard=> technologyCard.technologyName === this.selectedTechnology);
    // console.log("this.technology",this.postMan);

    // this.employeedata = this.technology.getData().employeeData,
    // console.log("this.employeedata",this.employeedata); 



