/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AtSt extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("walk1", "./AtSt/costumes/walk1.png", { x: 114, y: 164 }),
      new Costume("walk2", "./AtSt/costumes/walk2.png", { x: 116, y: 172 }),
      new Costume("walk3", "./AtSt/costumes/walk3.png", { x: 132, y: 164 }),
      new Costume("walk4", "./AtSt/costumes/walk4.png", { x: 120, y: 148 }),
      new Costume("walk5", "./AtSt/costumes/walk5.png", { x: 120, y: 156 }),
      new Costume("walk6", "./AtSt/costumes/walk6.png", { x: 120, y: 164 }),
      new Costume("walk7", "./AtSt/costumes/walk7.png", { x: 120, y: 124 }),
      new Costume("stand", "./AtSt/costumes/stand.png", { x: 120, y: 148 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.1);
      yield;
    }
  }
}
