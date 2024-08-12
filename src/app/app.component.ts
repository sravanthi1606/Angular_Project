import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { CourseService } from './services/course.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgModel, NgSelectOption, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ParentComponent, AngularMaterialModule, FormsModule, ReactiveFormsModule,
    NgSelectOption],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CourseService, NgbActiveModal]
})
export class AppComponent {
  title = 'angular-app';
  public imgUrl = "https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg";

  constructor(private courseService: CourseService, private router: Router) { }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.handleLogout();
  }


  ngOnInit(){
    this.courseService.initialSignUpData()
  }

  handleLogout() {
    this.courseService.handleLogout();

    this.router.navigate(['/login'], { replaceUrl: true });

    history.pushState(null, '', window.location.href);
    window.onpopstate = () => {
      history.pushState(null, '', window.location.href);
    };
  }



  selectedCar: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
}
