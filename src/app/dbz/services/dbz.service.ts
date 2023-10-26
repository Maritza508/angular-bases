import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

console.log(uuid());

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 18000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Bulma',
    power: 2000
  },
  {
    id: uuid(),
    name: 'Pikoro',
    power: 70000
  }];

  addCharacter( character:Character ):void {
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter( character => character.id !== id );
  }
  // onDeleteCharacter( index:number){
  //   this.characters.splice(index, 1);
  // }
}
