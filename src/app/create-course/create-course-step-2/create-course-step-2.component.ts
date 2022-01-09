import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "create-course-step-2",
  templateUrl: "create-course-step-2.component.html",
  styleUrls: ["create-course-step-2.component.scss"],
})
export class CreateCourseStep2Component implements OnInit {
  form = this.fb.group({
    courseType: ["premium", [Validators.required]],
    price: [
      null,
      [
        Validators.required,
        Validators.min(1),
        Validators.max(999),
        Validators.pattern("[0-9]+"),
      ],
    ],
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form.valueChanges.subscribe((val) => {
      const pricecontrol = this.form.controls["price"];
      if (val.courseType === "free" && pricecontrol.enabled) {
        pricecontrol.disable({
          emitEvent: false,
        });
      } else if (val.courseType === "premium" && pricecontrol.disabled) {
        pricecontrol.enable({
          emitEvent: false,
        });
      }
    });
  }
}
