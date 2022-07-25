import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IItem } from "../item";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})

export class ItemComponent {

  editable = false;

  @Input() item!: IItem;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<IItem>();

  saveItem(description: string) {
    if (!description) {
      return;
    }
    this.editable = false;
    this.item.description = description;
  }
}
