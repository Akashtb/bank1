import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //property variable
  header="welcome to our bank"
  accPlaceholder="account no please"
  accno=""
  pswd=""
  //database
  database:any={
    1000:{accno:1000,username:'Neer',password:1000,balance:5000},
    1001:{accno:1001,username:'Lasha',password:1000,balance:5000},
    1002:{accno:1002,username:'Sasha',password:1000,balance:5000}
  } 

  constructor() { }

  ngOnInit(): void {

  }
  accnochange(event:any){
    this.accno=event.target.value
    
    
  }
  pswdchange(event:any){
    this.pswd=event.target.value
    
    
  }
login(){
  //fetch accno
  var accno = this.accno
  console.log(accno);
  var pswd = this.pswd
  console.log(pswd);
  
  let userdetails=this.database
  if (accno in userdetails) {
    if(pswd == userdetails[accno]['password']){
      alert('login successful')
    }
    else{
      alert('incorrect password')
    }
  }
   else{
    alert('user does not exist')
   }
}
}
