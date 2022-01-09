import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { CreatePasswordStrength } from "../validators/passwordstrength";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "login",
  templateUrl: "./login-reactive.component.html",
  styleUrls: ["./login-reactive.component.css"],
})
export class LoginReactiveComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    email: [
      "",
      {
        Validators: [Validators.required, Validators.email],
        updateOn: "blur",
      },
    ],
    password: [
      "",
      [Validators.required, Validators.minLength(6), CreatePasswordStrength()],
    ],
  });

  ngOnInit() {}
}
