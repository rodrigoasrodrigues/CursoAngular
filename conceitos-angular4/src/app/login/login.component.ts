import { Component, OnInit } from '@angular/core';
import * as md5 from "js-md5";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  senha:string = "";
  email:string = "";
  error: boolean = false;
  imagePath: string = "//ssl.gstatic.com/accounts/ui/avatar_2x.png";
  user = {'usuario':'rodrigo@rodrigorodrigues.info', 'senha': '123456'}
  setImage(eml){
    if(eml=="")
      this.imagePath = "//ssl.gstatic.com/accounts/ui/avatar_2x.png";
    else
      this.imagePath = 'https://www.gravatar.com/avatar/' +  md5(eml);
  }
  login(){
    console.log('Shazam!');
    if(this.email != this.user.usuario || this.senha != this.user.senha)
      this.error = true;
    else
      this.error=false;
  }

}
