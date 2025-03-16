import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  myForm: FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder) {
    this.myForm = new FormGroup({
      name: new  FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required]),
      
    });
   }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
    }
  }
}
