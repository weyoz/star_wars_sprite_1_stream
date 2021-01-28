/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BobaFett extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("walk1", "./BobaFett/costumes/walk1.png", { x: 26, y: 62 }),
      new Costume("walk2", "./BobaFett/costumes/walk2.png", { x: 18, y: 64 }),
      new Costume("walk3", "./BobaFett/costumes/walk3.png", { x: 28, y: 62 }),
      new Costume("gun", "./BobaFett/costumes/gun.png", { x: 34, y: 62 }),
      new Costume("wristrocket1", "./BobaFett/costumes/wristrocket1.png", {
        x: 36,
        y: 62
      }),
      new Costume("wristrocket2", "./BobaFett/costumes/wristrocket2.png", {
        x: 114,
        y: 62
      }),
      new Costume("wristrocket3", "./BobaFett/costumes/wristrocket3.png", {
        x: 164,
        y: 62
      }),
      new Costume("wristrocket4", "./BobaFett/costumes/wristrocket4.png", {
        x: 36,
        y: 62
      }),
      new Costume("shoot1", "./BobaFett/costumes/shoot1.png", { x: 34, y: 62 }),
      new Costume("shoot2", "./BobaFett/costumes/shoot2.png", { x: 36, y: 62 }),
      new Costume("shoot3", "./BobaFett/costumes/shoot3.png", { x: 70, y: 62 }),
      new Costume("shoot4", "./BobaFett/costumes/shoot4.png", { x: 34, y: 62 }),
      new Costume("rocket1", "./BobaFett/costumes/rocket1.png", {
        x: 52,
        y: 36
      }),
      new Costume("rocket2", "./BobaFett/costumes/rocket2.png", {
        x: 124,
        y: 36
      }),
      new Costume("rocket3", "./BobaFett/costumes/rocket3.png", {
        x: 42,
        y: 36
      }),
      new Costume("rocket4", "./BobaFett/costumes/rocket4.png", {
        x: 44,
        y: 40
      }),
      new Costume("jetpack1", "./BobaFett/costumes/jetpack1.png", {
        x: 36,
        y: 62
      }),
      new Costume("jetpack2", "./BobaFett/costumes/jetpack2.png", {
        x: 36,
        y: 62
      }),
      new Costume("jetpack3", "./BobaFett/costumes/jetpack3.png", {
        x: 30,
        y: 68
      }),
      new Costume("jetpack4", "./BobaFett/costumes/jetpack4.png", {
        x: 28,
        y: 68
      }),
      new Costume("jetpack5", "./BobaFett/costumes/jetpack5.png", {
        x: 18,
        y: 64
      }),
      new Costume("jetpack6", "./BobaFett/costumes/jetpack6.png", {
        x: 44,
        y: 48
      }),
      new Costume("jetpack7", "./BobaFett/costumes/jetpack7.png", {
        x: 44,
        y: 48
      }),
      new Costume("jetpack8", "./BobaFett/costumes/jetpack8.png", {
        x: 18,
        y: 64
      }),
      new Costume("wristtrap1", "./BobaFett/costumes/wristtrap1.png", {
        x: 36,
        y: 62
      }),
      new Costume("wristtrap2", "./BobaFett/costumes/wristtrap2.png", {
        x: 126,
        y: 62
      }),
      new Costume("wristtrap3", "./BobaFett/costumes/wristtrap3.png", {
        x: 126,
        y: 62
      }),
      new Costume("flamethrower1", "./BobaFett/costumes/flamethrower1.png", {
        x: 36,
        y: 62
      }),
      new Costume("flamethrower2", "./BobaFett/costumes/flamethrower2.png", {
        x: 256,
        y: 62
      }),
      new Costume("flamethrower3", "./BobaFett/costumes/flamethrower3.png", {
        x: 256,
        y: 66
      }),
      new Costume("flamethrower4", "./BobaFett/costumes/flamethrower4.png", {
        x: 256,
        y: 62
      }),
      new Costume("flamethrower7", "./BobaFett/costumes/flamethrower7.png", {
        x: 256,
        y: 66
      }),
      new Costume("flamethrower5", "./BobaFett/costumes/flamethrower5.png", {
        x: 36,
        y: 62
      }),
      new Costume("flamethrower6", "./BobaFett/costumes/flamethrower6.png", {
        x: 36,
        y: 62
      })
    ];

    this.sounds = [
      new Sound("Blaster Fire", "./BobaFett/sounds/Blaster Fire.wav"),
      new Sound("FlameThrower", "./BobaFett/sounds/FlameThrower.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "walk1";
    yield* this.wait(0.15);
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.15);
      yield;
    }
  }

  *whenGreenFlagClicked2() {}
}
