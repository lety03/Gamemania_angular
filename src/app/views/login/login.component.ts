import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User();

  mensagem = ""
  logado = "Login realizado com sucesso!"

  receberDados() {
    console.log(this.userModel)

    const listaPalavras: string[] = ["select ","drop ","or ", "group ", "by ", "having ", "insert ", "exec ", "\"", "\'", "--" ]

      listaPalavras.forEach(palavra => {
          if(this.userModel.email?.toLowerCase().includes(palavra)){
            
            this.mensagem = "Dados inválidos:" + palavra

            return;
          }
      });

    this.loginService.login(this.userModel).subscribe((response) => {
      console.log("Login realizado")  
      console.log(response),

        this.mensagem = this.logado;


    }, (respostaErro) => {
      console.log(respostaErro)

    this.mensagem = respostaErro.error;
    

    })
  }
}