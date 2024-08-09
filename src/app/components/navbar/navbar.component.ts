import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseService } from '../../services/course.service';
import { Router, RouterLink } from '@angular/router';
import { Location, NgClass } from '@angular/common';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDropdownModule, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public imgUrl = "https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg";

  currentUser: any;

  constructor(private courseService: CourseService, private router: Router, private location: Location,
    private modalService: NgbModal,private elementRef: ElementRef) { }

  ngOnInit() {
    this.currentUser = this.courseService.getCurrentUser().data
    console.log('Current user:', this.currentUser);
  }
  // handleLogoutfun(){
  //   this.courseService.handleLogout()
  //   this.router.navigate(['/login'],{replaceUrl:true});
  //   this.location.replaceState('/login');
  // }




  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  handleLogout() {
    this.courseService.handleLogout()
    // this.router.navigate(['/login'], { replaceUrl: true });
    // this.location.replaceState('/login');
    this.isOpen = false;
  }

  naviagteProfile(){
    const modalRef = this.modalService.open(ProfileModalComponent);
    modalRef.componentInstance.currentUser = this.currentUser;
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  
}
