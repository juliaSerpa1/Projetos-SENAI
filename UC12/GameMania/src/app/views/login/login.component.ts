import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  userModel = new User ();
  recebeDados(){
    console.log(this.userModel)
    this.loginService.login(this.userModel).subscribe((response) => {
      console.log("Deu certo!")
      localStorage.setItem("nomeUsuario", response.body.user.nome)
      this.router.navigateByUrl("/")
    },(erro)=>{
      console.log("Deu erro!")
      alert("erro")
    })
  }
}
