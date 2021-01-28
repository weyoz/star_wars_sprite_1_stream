/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SlaveI extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SlaveI/costumes/costume1.png", {
        x: 98,
        y: 184
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
