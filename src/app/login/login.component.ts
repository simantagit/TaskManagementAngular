import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ApiServiceService } from 'src/app/service/api-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder,private http:ApiServiceService,private router:Router) {
    this.loginForm = new FormGroup({
      email: new  FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      
    });
   }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.controls['email'].value);
      let data = {
        "email":this.loginForm.controls['email'].value,
        "password" : this.loginForm.controls['password'].value
      }
      this.http.login(data).subscribe((response: any) => {
        localStorage.setItem('auth_token',response.authorisation.token);
        this.router.navigate(['/tasks']); 
      });
    }
  }

}
