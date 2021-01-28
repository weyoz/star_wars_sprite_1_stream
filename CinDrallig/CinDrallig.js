/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CinDrallig extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("stand1", "./CinDrallig/costumes/stand1.png", {
        x: 74,
        y: 102
      }),
      new Costume("stand2", "./CinDrallig/costumes/stand2.png", {
        x: 72,
        y: 102
      }),
      new Costume("stand3", "./CinDrallig/costumes/stand3.png", {
        x: 70,
        y: 102
      }),
      new Costume("stand4", "./CinDrallig/costumes/stand4.png", {
        x: 72,
        y: 102
      }),
      new Costume("stand5", "./CinDrallig/costumes/stand5.png", {
        x: 74,
        y: 102
      }),
      new Costume("stand6", "./CinDrallig/costumes/stand6.png", {
        x: 76,
        y: 102
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.15);
      yield;
    }
  }
}
