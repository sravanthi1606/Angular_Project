import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { Router, RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule, EmployeeTableComponent, AddEmployeeModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  public technologie: any = []
  public show: boolean = false
  public tech: string[] = [];
  public category:string

  showTable(x: any) {
    this.show = true;
    this.tech = x.technologies
    this.category = x.technologyName
    // this.router.navigate(['/home', x.technologyName]);
  }
  onBack() {
    this.show = false;
  }

  constructor(private courseService: CourseService, private router: Router) {
  }

  ngOnInit() {
    this.getTechnologies()
  }

  getTechnologies() {
    this.technologie = this.courseService.getData().data
    // console.log(this.technologie, 'techs');
  }

}






































// constructor(private courseService:CourseService,private router:Router) {
//   // this.technologies = courseService.getData()

// }

// ngOnInit() {
//   this.getTechnologies()
// }

// getTechnologies() {
//   this.technologies = this.courseService.getData().data
//   console.log(this.technologies,'techs');
// }

// onTechnology(technology:string){
//   this.show = true
//   // this.router.navigate(['/employeeTable',technology])
// }



// export class HomeComponent {
//   name='priya';
//   emp={
//     name:'honey',
//     age:21,
//   }
//   employee=[
//     {
//       name:'honey',
//       age:21,
//     },
//     {
//       name:'rani',
//       age:22,
//     }
//   ];

//   myText='textColor'
//   myGroup={
//     textColor:true,
//     textSize:true,
//   };
//   isRequired:boolean=true;

//   myColor='red';
//   myGroupStyle={
//     color:'green',
//     fontSize:'30px',
//     fontStyle:'italic',
//   }

//   onClick(){
//     console.log('click here');
//   };
//   onDblClick(){
//     console.log('Double click here');
//   };
//   onOver(){
//     console.log('Mouse Over');
//   };
//   onOut(){
//     console.log('Mouse Out');
//   };
//   onMove(){
//     console.log('Mouse Move');
//   };
//   kDown(){
//     console.log('Key Down');
//   };
//   kUp(){
//     console.log('Key Up');
//   };
//   kPress(){
//     console.log('Key Press');
//   };
//   onFocus(){
//     console.log('Focusin');
//   };
//   onFocusLost(){
//     console.log('blur/focus out');
//   };
//   onInput(){
//     console.log('input');
//   };
//   // onClick1(val){
//   //   console.log("name :",val);

//   // }

// }