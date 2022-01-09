import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "onlyoneerror",
})
export class OnlyoneerrorPipe implements PipeTransform {
  transform(allerrors: any, args): any {
    if (!allerrors) {
      return null;
    }
    let Onlyoneerror = {};
    for (const err of args) {
      if (allerrors[err] === err) {
        Onlyoneerror = allerrors[err];
        break;
      }
    }

    return Onlyoneerror;
  }
}
