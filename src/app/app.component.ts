import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { CourseService } from './services/course.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ParentComponent, AngularMaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CourseService, NgbActiveModal]
})
export class AppComponent {
  title = 'angular-app';
  public imgUrl = "https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg";

  // constructor(private courseService: CourseService) { }


  // @HostListener('window:popstate', ['$event'])
  // onPopState(event: any) {
  //   this.courseService.handleLogout()
  // }

}
