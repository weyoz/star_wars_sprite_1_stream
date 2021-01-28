/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Commander extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("shoot", "./Commander/costumes/shoot.png", { x: 42, y: 104 }),
      new Costume("shoot2", "./Commander/costumes/shoot2.png", {
        x: 40,
        y: 104
      }),
      new Costume("shoot3", "./Commander/costumes/shoot3.png", {
        x: 40,
        y: 104
      }),
      new Costume("shoot4", "./Commander/costumes/shoot4.png", {
        x: 40,
        y: 104
      }),
      new Costume("shoot5", "./Commander/costumes/shoot5.png", {
        x: 40,
        y: 104
      }),
      new Costume("shoot6", "./Commander/costumes/shoot6.png", {
        x: 60,
        y: 104
      }),
      new Costume("shoot7", "./Commander/costumes/shoot7.png", {
        x: 84,
        y: 104
      }),
      new Costume("shoot8", "./Commander/costumes/shoot8.png", {
        x: 40,
        y: 104
      }),
      new Costume("stand/shoot9", "./Commander/costumes/stand/shoot9.png", {
        x: 42,
        y: 104
      }),
      new Costume("walk", "./Commander/costumes/walk.png", { x: 40, y: 100 }),
      new Costume("walk2", "./Commander/costumes/walk2.png", { x: 40, y: 102 }),
      new Costume("walk3", "./Commander/costumes/walk3.png", { x: 40, y: 104 }),
      new Costume("walk4", "./Commander/costumes/walk4.png", { x: 40, y: 102 }),
      new Costume("walk5", "./Commander/costumes/walk5.png", { x: 40, y: 100 }),
      new Costume("walk6", "./Commander/costumes/walk6.png", { x: 40, y: 102 }),
      new Costume("walk7", "./Commander/costumes/walk7.png", { x: 40, y: 104 }),
      new Costume("walk8", "./Commander/costumes/walk8.png", { x: 40, y: 102 }),
      new Costume("hurt", "./Commander/costumes/hurt.png", { x: 48, y: 124 }),
      new Costume("hurt2", "./Commander/costumes/hurt2.png", { x: 50, y: 102 }),
      new Costume("hurt3", "./Commander/costumes/hurt3.png", { x: 46, y: 88 }),
      new Costume("hurt4", "./Commander/costumes/hurt4.png", { x: 40, y: 70 }),
      new Costume("hurt5", "./Commander/costumes/hurt5.png", { x: 46, y: 84 }),
      new Costume("hurt6", "./Commander/costumes/hurt6.png", { x: 56, y: 46 }),
      new Costume("hurt7", "./Commander/costumes/hurt7.png", { x: 56, y: 40 }),
      new Costume("hurt/dazed", "./Commander/costumes/hurt/dazed.png", {
        x: 58,
        y: 58
      }),
      new Costume("hurt/dazed2", "./Commander/costumes/hurt/dazed2.png", {
        x: 54,
        y: 64
      }),
      new Costume("hurt/dazed3", "./Commander/costumes/hurt/dazed3.png", {
        x: 68,
        y: 92
      }),
      new Costume("hurt/dazed4", "./Commander/costumes/hurt/dazed4.png", {
        x: 70,
        y: 100
      }),
      new Costume("hurt/dazed5", "./Commander/costumes/hurt/dazed5.png", {
        x: 58,
        y: 100
      }),
      new Costume("hurt/dazed6", "./Commander/costumes/hurt/dazed6.png", {
        x: 36,
        y: 104
      }),
      new Costume("melee attack", "./Commander/costumes/melee attack.png", {
        x: 42,
        y: 104
      }),
      new Costume("melee attack2", "./Commander/costumes/melee attack2.png", {
        x: 42,
        y: 102
      }),
      new Costume("melee attack3", "./Commander/costumes/melee attack3.png", {
        x: 32,
        y: 102
      }),
      new Costume("melee attack4", "./Commander/costumes/melee attack4.png", {
        x: 32,
        y: 102
      }),
      new Costume("melee attack5", "./Commander/costumes/melee attack5.png", {
        x: 42,
        y: 102
      }),
      new Costume("melee attack6", "./Commander/costumes/melee attack6.png", {
        x: 66,
        y: 116
      }),
      new Costume("melee attack7", "./Commander/costumes/melee attack7.png", {
        x: 56,
        y: 122
      }),
      new Costume("melee attack8", "./Commander/costumes/melee attack8.png", {
        x: 58,
        y: 122
      }),
      new Costume("melee attack9", "./Commander/costumes/melee attack9.png", {
        x: 72,
        y: 106
      }),
      new Costume("melee attack10", "./Commander/costumes/melee attack10.png", {
        x: 58,
        y: 104
      }),
      new Costume("melee attack11", "./Commander/costumes/melee attack11.png", {
        x: 36,
        y: 104
      }),
      new Costume("fall", "./Commander/costumes/fall.png", { x: 30, y: 102 }),
      new Costume("upaiming", "./Commander/costumes/upaiming.png", {
        x: 40,
        y: 88
      }),
      new Costume("upaiming2", "./Commander/costumes/upaiming2.png", {
        x: 40,
        y: 88
      }),
      new Costume("upaiming3", "./Commander/costumes/upaiming3.png", {
        x: 40,
        y: 88
      }),
      new Costume("upaiming4", "./Commander/costumes/upaiming4.png", {
        x: 46,
        y: 94
      }),
      new Costume(
        "upaiming/downaiming",
        "./Commander/costumes/upaiming/downaiming.png",
        { x: 40, y: 98 }
      ),
      new Costume(
        "upaiming/downaiming2",
        "./Commander/costumes/upaiming/downaiming2.png",
        { x: 38, y: 104 }
      ),
      new Costume("die", "./Commander/costumes/die.png", { x: 42, y: 104 }),
      new Costume("die2", "./Commander/costumes/die2.png", { x: 36, y: 106 }),
      new Costume("die3", "./Commander/costumes/die3.png", { x: 38, y: 114 }),
      new Costume("die4", "./Commander/costumes/die4.png", { x: 52, y: 124 }),
      new Costume("die5", "./Commander/costumes/die5.png", { x: 70, y: 128 }),
      new Costume("die6", "./Commander/costumes/die6.png", { x: 88, y: 148 }),
      new Costume("die7", "./Commander/costumes/die7.png", { x: 92, y: 154 }),
      new Costume("die8", "./Commander/costumes/die8.png", { x: 98, y: 146 }),
      new Costume("die9", "./Commander/costumes/die9.png", { x: 112, y: 130 }),
      new Costume("die10", "./Commander/costumes/die10.png", {
        x: 110,
        y: 128
      }),
      new Costume("die11", "./Commander/costumes/die11.png", { x: 114, y: 52 }),
      new Costume("die12", "./Commander/costumes/die12.png", { x: 118, y: 36 }),
      new Costume("die13", "./Commander/costumes/die13.png", { x: 118, y: 38 }),
      new Costume("die14", "./Commander/costumes/die14.png", { x: 118, y: 32 }),
      new Costume("die15", "./Commander/costumes/die15.png", { x: 118, y: 32 })
    ];

    this.sounds = [new Sound("blaster3", "./Commander/sounds/blaster3.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "shoot";
    yield* this.wait(0.04);
    while (true) {
      this.costumeNumber += 1;
      yield* this.wait(0.04);
      yield;
    }
  }
}
