// JavaScript import that imports Angular
import { Component } from "@angular/core";

// Specifies metadata about the AppComponent
@Component({

  // name of the CSS selector that you use in a template
  // to instantiate this component
  selector: "app-root",

  // Specifies the HTML file to associate with this component
  templateUrl: "./app.component.html",

  // Provides the location and name of the file for styles
  // that apply specifically to this component
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = "todo";

  // filter property is of type union, which means filter
  // could have the value of all, active, or done
  filter: "all" | "active" | "done" = "all";


  // contains the to-do items and whether they are done
  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  // method that retrieves the items from the allItems array
  get items() {

    // if the filter is equal to all
    if (this.filter === "all") {

      // retrieves the items from the allItems array
      return this.allItems;
    }

    // Otherwise, returns the done items or the outstanding
    // items depending on how the user filters the view
    return this.allItems.filter(item =>
      this.filter === "done" ? item.done : !item.done);
  }

  // method to add items to the todo list array
  addItem(description: string) {

    // add a new item to the beginning of
    // the array and the top of the list
    this.allItems.unshift({
      description,
      done: false
    });
  }

  // method uses the JavaScript Array.splice()
  // method to remove one item at the indexOf the relevant item
  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
