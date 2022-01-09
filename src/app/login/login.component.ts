import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor() {}
  pwd;

  onsubmit(loginForm: NgForm): void {
    console.log(loginForm.value);
  }
  emailchange(email) {
    console.log(email);
  }
  ngOnInit() {}
}
