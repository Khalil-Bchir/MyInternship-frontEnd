import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/views/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email: string='';
  password: string='';

  constructor(private auths: AuthService) {}

  
  ngOnInit(): void {
      
  }

  login(f:any){

    let data= f.value
    this.auths.login(data).subscribe(response=>console.log(response),err=>console.log(err))


  }
}
