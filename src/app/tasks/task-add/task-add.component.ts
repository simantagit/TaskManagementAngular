import { Component, OnInit,Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApiServiceService } from 'src/app/service/api-service.service';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Input() action: string='';
  @Input() data:any;
  editRowData:any;
  act:string='';
  myForm: FormGroup;
  formSubmitted = false;
  
  constructor(private fb: FormBuilder,private http:ApiServiceService) {
    this.myForm = new FormGroup({  
      name: new  FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required]),
      
    });
   }
ngOnChanges(){
  this.act=this.action;
  this.editRowData=this.data;
  console.log(this.editRowData)
}
  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }
  onSubmit() {
    this.formSubmitted = true;
      if(this.act=='Edit')
      {
        let data={
          "name":this.myForm.controls['name'].value,
          "description":this.myForm.controls['description'].value
        }
        this.http.updateTasks(data,this.editRowData?.id).subscribe((response: any) => {
          this.myForm.reset();
        });
      }else{
        if (this.myForm.valid) {
        let data={
          "name":this.myForm.controls['name'].value,
          "description":this.myForm.controls['description'].value
        }
        this.http.addTasks(data).subscribe((response: any) => {
          this.myForm.reset();
        });
      }
      }
      
    
  }
}
