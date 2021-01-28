/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _327thClone extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("shoot&walk", "./_327thClone/costumes/shoot&walk.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk2", "./_327thClone/costumes/shoot&walk2.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk3", "./_327thClone/costumes/shoot&walk3.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk4", "./_327thClone/costumes/shoot&walk4.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk5", "./_327thClone/costumes/shoot&walk5.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk6", "./_327thClone/costumes/shoot&walk6.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk7", "./_327thClone/costumes/shoot&walk7.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk9", "./_327thClone/costumes/shoot&walk9.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk10", "./_327thClone/costumes/shoot&walk10.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk8", "./_327thClone/costumes/shoot&walk8.png", {
        x: 32,
        y: 114
      }),
      new Costume("shoot&walk11", "./_327thClone/costumes/shoot&walk11.png", {
        x: 32,
        y: 114
      }),
      new Costume("shoot&walk12", "./_327thClone/costumes/shoot&walk12.png", {
        x: 32,
        y: 114
      }),
      new Costume("shoot&walk13", "./_327thClone/costumes/shoot&walk13.png", {
        x: 32,
        y: 114
      }),
      new Costume("shoot&walk14", "./_327thClone/costumes/shoot&walk14.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk15", "./_327thClone/costumes/shoot&walk15.png", {
        x: 32,
        y: 112
      }),
      new Costume("shoot&walk16", "./_327thClone/costumes/shoot&walk16.png", {
        x: 32,
        y: 114
      }),
      new Costume(
        "hurt&dazed part1",
        "./_327thClone/costumes/hurt&dazed part1.png",
        { x: 32, y: 116 }
      ),
      new Costume(
        "hurt&dazed part2",
        "./_327thClone/costumes/hurt&dazed part2.png",
        { x: 32, y: 120 }
      ),
      new Costume(
        "hurt&dazed part3",
        "./_327thClone/costumes/hurt&dazed part3.png",
        { x: 44, y: 120 }
      ),
      new Costume(
        "hurt&dazed part4",
        "./_327thClone/costumes/hurt&dazed part4.png",
        { x: 54, y: 142 }
      ),
      new Costume(
        "hurt&dazed part5",
        "./_327thClone/costumes/hurt&dazed part5.png",
        { x: 64, y: 98 }
      ),
      new Costume(
        "hurt&dazed part6",
        "./_327thClone/costumes/hurt&dazed part6.png",
        { x: 62, y: 60 }
      ),
      new Costume(
        "hurt&dazed part7",
        "./_327thClone/costumes/hurt&dazed part7.png",
        { x: 60, y: 66 }
      ),
      new Costume(
        "hurt&dazed part15",
        "./_327thClone/costumes/hurt&dazed part15.png",
        { x: 62, y: 52 }
      ),
      new Costume(
        "hurt&dazed part8",
        "./_327thClone/costumes/hurt&dazed part8.png",
        { x: 62, y: 30 }
      ),
      new Costume(
        "hurt&dazed part9",
        "./_327thClone/costumes/hurt&dazed part9.png",
        { x: 62, y: 30 }
      ),
      new Costume(
        "hurt&dazed part10",
        "./_327thClone/costumes/hurt&dazed part10.png",
        { x: 62, y: 30 }
      ),
      new Costume("dazed part1", "./_327thClone/costumes/dazed part1.png", {
        x: 32,
        y: 114
      }),
      new Costume(
        "dazed part two&18",
        "./_327thClone/costumes/dazed part two&18.png",
        { x: 30, y: 112 }
      ),
      new Costume("run", "./_327thClone/costumes/run.png", { x: 32, y: 116 }),
      new Costume("run2", "./_327thClone/costumes/run2.png", { x: 32, y: 120 }),
      new Costume("run3", "./_327thClone/costumes/run3.png", { x: 36, y: 122 }),
      new Costume("run4", "./_327thClone/costumes/run4.png", { x: 32, y: 118 }),
      new Costume("run5", "./_327thClone/costumes/run5.png", { x: 32, y: 116 }),
      new Costume("run6", "./_327thClone/costumes/run6.png", { x: 32, y: 120 }),
      new Costume("run7", "./_327thClone/costumes/run7.png", { x: 36, y: 122 }),
      new Costume("run8", "./_327thClone/costumes/run8.png", { x: 32, y: 118 }),
      new Costume("shoot&walk17", "./_327thClone/costumes/shoot&walk17.png", {
        x: 32,
        y: 114
      })
    ];

    this.sounds = [new Sound("blaster1", "./_327thClone/sounds/blaster1.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.size = 200;
    this.costume = "dazed part1";
    while (true) {
      yield* this.wait(0.04);
      this.costumeNumber += 1;
      yield;
    }
  }
}
