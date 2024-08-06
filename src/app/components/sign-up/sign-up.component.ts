import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent {
  signUpForm : FormGroup
  public credentialData = [];

  constructor(private credentials: CourseService,private router: Router, private location: Location) {}



  onSubmitSignUP() {
    
    if (this.signUpForm.valid ) {
      console.log(this.signUpForm.value, 'signUp values');
      const newUser : any= {
        username: this.signUpForm.value.username,
        email:this.signUpForm.value.email,
        mobileNumber: Number(this.signUpForm.value.mobilenumber),
        password: this.signUpForm.value.password,
      };
      console.log(newUser);
      this.credentials.addCredentials(newUser)
       this.signUpForm.reset();
      this.router.navigate(['/login'],{replaceUrl:true});
      this.location.replaceState('/login');
    }
  }

  passwordsMatch():boolean{
    const value = this.signUpForm.value.password === this.signUpForm.value.confirmPassword;
    alert(value)
    return value
  };


  duplicateEmailValidator(control: FormControl): { [key: string]: boolean } | null {
    if (this.credentialData.some(cred => cred.email === control.value)) {
      return { 'duplicateEmail': true };
    }
    return null;
  }
  
  duplicateMobileValidator(control: FormControl): { [key: string]: boolean } | null {
    const isDuplicate = this.credentialData.some(cred => cred.mobileNumber === control.value)
    
    if (isDuplicate) {
      return { 'duplicateMobile': true };
    }
    return null;
  }
  
  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: confirmPassword } = formGroup.get('confirmpassword');
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }

  ngOnInit() {
    this.getLoginCredentials();
    
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(4), Validators.pattern("^[a-zA-Z]+$")]),
      email: new FormControl(null, [Validators.required, Validators.email, this.duplicateEmailValidator.bind(this)]),
      mobilenumber: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}"), this.duplicateMobileValidator.bind(this)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=[\\]{};:\'",.<>/?]).*$')]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
     { validators: PasswordValidatorComponent('password', 'confirmPassword') }
    // {validators: this.password.bind(this)}
    );
  }
  

  getLoginCredentials() {
    this.credentialData = this.credentials.getCredentials().data;
    console.log(this.credentialData, 'this.credentialData');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
  
}


































// export class SignUpComponent {
//   public credentialData = [];
//   regArray : any={}
//   userName: string = '';
//   mobileNumber: number;
//   password: string = '';
//   confirmPassword: string = '';
//   alert: boolean = false

//   constructor(private credentials: CourseService,private router: Router) {}

//   @ViewChild('signUP') form: NgForm;


//   onSubmitSignUP() {
//     if (this.form.valid && this.passwordsMatch()) {
//       console.log(this.form.value, 'signUp values');
//       const newUser : any= {
//         username: this.form.value.userName,
//         mobileNumber: Number(this.form.value.mobileNumber),
//         password: this.form.value.password,
//         // ConfirmPassword: this.form.value.confirmPassword
//       };
//       console.log(newUser);
//       this.credentials.addCredentials(newUser)
//       this.form.reset();
//       this.router.navigate(['/login']);
//     }
//   }

//   passwordsMatch(): boolean {
//     const value = this.form.value.password === this.form.value.confirmPassword;
//     this.alert = value
//     return value
//   }
  



//   ngOnInit() {
//     this.getLoginCredentials();
    
//   }

//   getLoginCredentials() {
//     this.credentialData = this.credentials.getCredentials().data;
//     console.log(this.credentialData, 'this.credentialData');
//   }
//   validatePasswords(){
//     return this.password === this.confirmPassword
//   }

// }
