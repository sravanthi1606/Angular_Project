import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { CommonModule, Location } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule,ReactiveFormsModule,NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  public imgUrl = "https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg";
  loginForm : FormGroup
  public credentialData = [];
  public loginError: string | null = null;


  constructor(private credentials: CourseService,private router: Router,private location : Location) {}


  onSubmitLogin() {
    console.log(this.loginForm, 'submit');
    console.log(this.loginForm.value.username, 'userName');
    console.log(this.loginForm.value.password, 'password');
  
    const foundUser = this.credentialData.find(cre => cre.username === this.loginForm.value.username);
    console.log(foundUser,'foundUser');
    
    
  
    if (!foundUser) {
      this.loginForm.get('username')?.setErrors({ userNotFound: true });
    } else if (foundUser.password !== this.loginForm.value.password) {
      this.loginForm.get('password')?.setErrors({ passwordMismatch: true });
    }
    else {
      console.log(foundUser, 'foundUser');
      this.loginForm.reset();
      this.credentials.initalempData();
      this.router.navigate(['/home'])
      // this.router.navigate(['/home'], { replaceUrl: true });

      // this.location.replaceState('/home');
      this.credentials.addcurrentUserCredentials(foundUser)

    }    
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required]),
    })
    this.getLoginCredentials();

  }

  getLoginCredentials() {
    this.credentialData = this.credentials.getCredentials().data;
    console.log(this.credentialData, 'this.credentialData');
  }
}


































  // onSubmitLogin() {
  //   console.log(this.loginForm, 'submit');
  //   console.log(this.loginForm.value.username, 'userName');
  //   console.log(this.loginForm.value.password, 'password');

  //   const foundCredentials = this.credentialData.find(cre =>
  //     cre.username === this.loginForm.value.username && cre.password === this.loginForm.value.password
  //   );
  //   console.log(foundCredentials.username === this.loginForm.value.username);


  //   if (foundCredentials) {
  //     console.log(foundCredentials,'foundCredentials')
  //     this.loginForm.reset();
  //     this.router.navigate(['/home']);
  //   }
  //   else {
  //     console.log('Invalid credentials');
  //   }
  // }






// export class LoginComponent {
//   public imgUrl = "https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg";
//   credentialData = []
//   username= ''
//   password= ''
//   errorMessage=''

//   constructor(private credentials: CourseService, private router: Router) { }

//   @ViewChild('login') form: NgForm;


//   onSubmitLogin() {
//     console.log(this.form, 'submit');
//     console.log(this.form.value.username, 'userName');
//     console.log(this.form.value.password, 'password');

//     const foundCredentials = this.credentialData.find(cre =>
//       cre.username === this.form.value.username && cre.password === this.form.value.password
//     );
//     console.log(foundCredentials.username === this.form.value.username);


//     if (foundCredentials) {
//       console.log(foundCredentials,'foundCredentials')
//       this.form.reset();
//       this.router.navigate(['/home']);
//     }
//     // else if(foundCredentials.username === this.form.value.username){
//       // console.log(foundCredentials.username === this.form.value.username);
      
//         //   this.errorMessage = 'Password is incorrect';
//         // }
//     //     else if(foundCredentials.password === this.form.value.password){
//     //       this.errorMessage = 'UserName is incorrect';
//     //     } 
//     else {
//       console.log('Invalid credentials');
//     }
//     console.log(foundCredentials, 'data')

//     // if (foundCredentials) {
//     //   if (foundCredentials.password === this.password && foundCredentials.username === this.username) {
//     //     this.form.reset();
//     //     this.router.navigate(['/home']);
//     //   } 
//     //   else if(foundCredentials.username === this.form.value.username){
//     //     this.errorMessage = 'Password is incorrect';
//     //   }
//     //   else if(foundCredentials.password === this.form.value.password){
//     //     this.errorMessage = 'UserName is incorrect';
//     //   }
     
//     // } 
//     // else {
//     //   this.errorMessage = 'Username does not exist';
//     // }
    


//   }

//   ngOnInit() {
//     this.getLoginCredentials();

//   }

//   getLoginCredentials() {
//     this.credentialData = this.credentials.getCredentials().data;
//     console.log(this.credentialData, 'this.credentialData');
//   }
// }
