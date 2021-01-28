/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ig88 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("stand", "./Ig88/costumes/stand.png", { x: 60, y: 0 }),
      new Costume("walk1", "./Ig88/costumes/walk1.png", { x: 62, y: 0 }),
      new Costume("walk2", "./Ig88/costumes/walk2.png", { x: 38, y: 0 }),
      new Costume("walk3", "./Ig88/costumes/walk3.png", { x: 50, y: 0 }),
      new Costume("shoot1", "./Ig88/costumes/shoot1.png", { x: 112, y: 0 }),
      new Costume("shoot2", "./Ig88/costumes/shoot2.png", { x: 156, y: 0 }),
      new Costume("shoot3", "./Ig88/costumes/shoot3.png", { x: 50, y: 0 }),
      new Costume("die1", "./Ig88/costumes/die1.png", { x: 60, y: 0 }),
      new Costume("die2", "./Ig88/costumes/die2.png", { x: 78, y: -8 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    yield* this.wait(0.1);
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.1);
      yield;
    }
  }
}
