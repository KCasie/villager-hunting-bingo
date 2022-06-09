import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BingoService implements OnInit{
  // public id: string;
  localUrl = '../../assets/villagers.json'
  villagers: Array<Object> = [];
  personality: Array<String> = [
    "Cranky", "Jock", "Lazy", "Normal", "Peppy", "Sisterly", "Smug", "Snooty"
  ];
  animalType: Array<String> = [
    "Alligator", "Anteater",
    "Bear", "Bear cub", "Bird", "Bull",
    "Cat", "Chicken", "Cow", "Deer",
    "Dog", "Duck", "Eagle", "Elephant", "Frog",
    "Goat", "Gorilla", "Hamster", "Hippo",
    "Horse", "Kangaroo", "Koala", "Lion",
    "Monkey", "Mouse", "Octopus", "Ostrich",
    "Penguin", "Pig", "Rabbit", "Rhinoceros",
    "Sheep", "Squirrel", "Tiger", "Wolf"];

  bingoCard: Array<Object> = []

  constructor() { }

  ngOnInit(): void {
    this.getAll()
  }

  async getAll() {
    await fetch(this.localUrl).then(res => res.json())
    .then(jsonData => {
      this.villagers = jsonData;
      console.log(this.villagers)
      this.getRandom()
    })
    return this.villagers
  }

  async getRandom() {
    console.log(this.villagers[Math.round(Math.random() * 412)])
    return this.villagers[Math.round(Math.random() * 412)]
  }

  async generateBingoCard() {

  }

}
