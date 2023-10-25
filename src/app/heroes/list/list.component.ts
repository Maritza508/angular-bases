import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] =
  ["Superman",
  "Batman",
  "Spider-Man",
  "Wonder Woman",
  "Iron Man",
  "Captain America",
  "The Flash",
  "Thor",
  "Black Widow",
  "Hulk",
  "Aquaman",];

  public deleteHero?:string

  removeLastHero():void {
   this.deleteHero =  this.heroNames.pop();
  }
}

