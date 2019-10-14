import { Component } from "@angular/core";
import { format } from "jfol";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  defaultJson = `{
    "array": [
        {
            "package": {
                "name": "pack1"
            }
        },
        {
            "package": {
                "name": "pack2"
            }
        }
    ]
}`;
  defaultJfol = `Packages Total: $$(array.length)
$array[$$index: $(package.name)$$separator[\n]]`;

  result = "";
  resultTextColor = "#000";

  json = this.defaultJson;
  jfol = this.defaultJfol;

  execute() {
    try {
      this.resultTextColor = "#000";
      this.result = format(this.jfol, this.json);
    } catch (error) {
      this.resultTextColor = "#f00";
      this.result = error.message;
    }
  }
}
