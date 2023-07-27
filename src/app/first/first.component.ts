import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { RequestServiceService } from '../service/request-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{
  constructor(private service:RequestServiceService){}
  reactiveForm!:FormGroup;
  data:any
  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.pattern("^[a-zA-Z ]*$")]),
      clas:new FormControl("1",Validators.required),
      division:new FormControl(null,Validators.required),
      dob:new FormControl(null,Validators.required),
      gender:new FormControl('Male',Validators.required)

  });
    this.service.fetch().subscribe((res)=>{
      this.data=res;
      console.log(res);
    })
  }
  admId:any;
  onSubmit(){
    console.log(this.reactiveForm.value);
    this.service.save(this.reactiveForm.value).subscribe((res)=>{
      console.log(res);
      this.admId=res;
    });
    this.reactiveForm.reset();
    setTimeout(() => {
      this.service.fetch().subscribe((res)=>{
        this.data=res;
        console.log(res);
        this.admId=this.admId.id;
      })
    }, 2000);
  }
}
