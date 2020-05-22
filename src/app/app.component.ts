import { Component, VERSION, ViewChild, OnInit, AfterViewInit } from "@angular/core";
// @ts-ignore
import { name, version } from "../../package.json";
import { HelloComponent } from "./hello.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
// @ts-ignore
  @ViewChild("hello", {static: true}) hello: HelloComponent<{ name: string, id: number }>;
  Version = VERSION.full;
  ProjectVersion = `${name} V${version}`;
  Item = { nome: "Dirk", id: 1 };

  ngAfterViewInit() {
    const id = this.hello.Item.id;
    console.log(`%cid is ${id}`, 'color: blue, font-size: large');
  }
}
