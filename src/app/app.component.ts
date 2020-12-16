import { Component, VERSION } from "@angular/core";
import { from } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {
    const map = new Map();

    map.set(1, "cart");
    map.set(2, "curt");

    const fromSample = from(map);

    fromSample.subscribe(val => {
      console.log(`${val[0]} ${val[1]}`);
    });
  }
}
