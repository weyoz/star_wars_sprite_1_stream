/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color
  // Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("", "", {
        x: 480,
        y: 360
      })
    ];

    // this.sounds = [
    //   new Sound("Star Wars - The ", "./Stage/sounds/Star Wars - The .wav")
    // ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("Star Wars - The ");
      yield;
    }
  }
}
