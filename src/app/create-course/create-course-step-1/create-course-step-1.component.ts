import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { CoursesService } from "./../../services/courses.service";
import { getCourseCategories } from "./../../../../server/course-categories.route";

interface courseCategory {
  code: string;
  description: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "create-course-step-1",
  templateUrl: "./create-course-step-1.component.html",
  styleUrls: ["./create-course-step-1.component.scss"],
})
export class CreateCourseStep1Component implements OnInit {
  constructor(private fb: FormBuilder, private cs: CoursesService) {}
  courseCategories$: Observable<courseCategory[]>;
  form = this.fb.group({
    title: [
      "",
      {
        Validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
        updateOn: "blur",
      },
    ],
    category: ["", [Validators.required]],
    releasedAt: [new Date(), [Validators.required]],
    downloadAllowed: [false, [Validators.requiredTrue]],
    longDescription: ["", [Validators.required]],
  });
  ngOnInit() {
    this.courseCategories$ = this.cs.findCourseCategories();
    console.log(this.courseCategories$);
  }
}
