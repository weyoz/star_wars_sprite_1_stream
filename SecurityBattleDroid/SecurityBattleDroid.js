/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SecurityBattleDroid extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("shoot", "./SecurityBattleDroid/costumes/shoot.png", {
        x: 42,
        y: 104
      }),
      new Costume("shoot2", "./SecurityBattleDroid/costumes/shoot2.png", {
        x: 40,
        y: 104
      }),
      new Costume("shoot3", "./SecurityBattleDroid/costumes/shoot3.png", {
        x: 40,
        y: 104
      }),
      new Costume("shoot4", "./SecurityBattleDroid/costumes/shoot4.png", {
        x: 40,
        y: 104
      }),
      new Costume("shoot5", "./SecurityBattleDroid/costumes/shoot5.png", {
        x: 40,
        y: 104
      }),
      new Costume("shoot6", "./SecurityBattleDroid/costumes/shoot6.png", {
        x: 60,
        y: 104
      }),
      new Costume("shoot7", "./SecurityBattleDroid/costumes/shoot7.png", {
        x: 84,
        y: 104
      }),
      new Costume("shoot8", "./SecurityBattleDroid/costumes/shoot8.png", {
        x: 40,
        y: 104
      }),
      new Costume(
        "stand/shoot9",
        "./SecurityBattleDroid/costumes/stand/shoot9.png",
        { x: 42, y: 104 }
      ),
      new Costume("walk", "./SecurityBattleDroid/costumes/walk.png", {
        x: 40,
        y: 100
      }),
      new Costume("walk2", "./SecurityBattleDroid/costumes/walk2.png", {
        x: 40,
        y: 102
      }),
      new Costume("walk3", "./SecurityBattleDroid/costumes/walk3.png", {
        x: 40,
        y: 104
      }),
      new Costume("walk4", "./SecurityBattleDroid/costumes/walk4.png", {
        x: 40,
        y: 102
      }),
      new Costume("walk5", "./SecurityBattleDroid/costumes/walk5.png", {
        x: 40,
        y: 100
      }),
      new Costume("walk6", "./SecurityBattleDroid/costumes/walk6.png", {
        x: 40,
        y: 102
      }),
      new Costume("walk7", "./SecurityBattleDroid/costumes/walk7.png", {
        x: 40,
        y: 104
      }),
      new Costume("walk8", "./SecurityBattleDroid/costumes/walk8.png", {
        x: 40,
        y: 102
      }),
      new Costume("hurt", "./SecurityBattleDroid/costumes/hurt.png", {
        x: 48,
        y: 124
      }),
      new Costume("hurt2", "./SecurityBattleDroid/costumes/hurt2.png", {
        x: 50,
        y: 102
      }),
      new Costume("hurt3", "./SecurityBattleDroid/costumes/hurt3.png", {
        x: 46,
        y: 88
      }),
      new Costume("hurt4", "./SecurityBattleDroid/costumes/hurt4.png", {
        x: 40,
        y: 70
      }),
      new Costume("hurt5", "./SecurityBattleDroid/costumes/hurt5.png", {
        x: 46,
        y: 84
      }),
      new Costume("hurt6", "./SecurityBattleDroid/costumes/hurt6.png", {
        x: 56,
        y: 46
      }),
      new Costume("hurt7", "./SecurityBattleDroid/costumes/hurt7.png", {
        x: 56,
        y: 40
      }),
      new Costume(
        "hurt/dazed",
        "./SecurityBattleDroid/costumes/hurt/dazed.png",
        { x: 58, y: 58 }
      ),
      new Costume(
        "hurt/dazed2",
        "./SecurityBattleDroid/costumes/hurt/dazed2.png",
        { x: 54, y: 64 }
      ),
      new Costume(
        "hurt/dazed3",
        "./SecurityBattleDroid/costumes/hurt/dazed3.png",
        { x: 68, y: 92 }
      ),
      new Costume(
        "hurt/dazed4",
        "./SecurityBattleDroid/costumes/hurt/dazed4.png",
        { x: 70, y: 100 }
      ),
      new Costume(
        "hurt/dazed5",
        "./SecurityBattleDroid/costumes/hurt/dazed5.png",
        { x: 58, y: 100 }
      ),
      new Costume(
        "hurt/dazed6",
        "./SecurityBattleDroid/costumes/hurt/dazed6.png",
        { x: 36, y: 104 }
      ),
      new Costume(
        "melee attack",
        "./SecurityBattleDroid/costumes/melee attack.png",
        { x: 42, y: 104 }
      ),
      new Costume(
        "melee attack2",
        "./SecurityBattleDroid/costumes/melee attack2.png",
        { x: 42, y: 102 }
      ),
      new Costume(
        "melee attack3",
        "./SecurityBattleDroid/costumes/melee attack3.png",
        { x: 32, y: 102 }
      ),
      new Costume(
        "melee attack4",
        "./SecurityBattleDroid/costumes/melee attack4.png",
        { x: 32, y: 102 }
      ),
      new Costume(
        "melee attack5",
        "./SecurityBattleDroid/costumes/melee attack5.png",
        { x: 42, y: 102 }
      ),
      new Costume(
        "melee attack6",
        "./SecurityBattleDroid/costumes/melee attack6.png",
        { x: 66, y: 116 }
      ),
      new Costume(
        "melee attack7",
        "./SecurityBattleDroid/costumes/melee attack7.png",
        { x: 56, y: 122 }
      ),
      new Costume(
        "melee attack8",
        "./SecurityBattleDroid/costumes/melee attack8.png",
        { x: 58, y: 122 }
      ),
      new Costume(
        "melee attack9",
        "./SecurityBattleDroid/costumes/melee attack9.png",
        { x: 72, y: 106 }
      ),
      new Costume(
        "melee attack10",
        "./SecurityBattleDroid/costumes/melee attack10.png",
        { x: 58, y: 104 }
      ),
      new Costume(
        "melee attack11",
        "./SecurityBattleDroid/costumes/melee attack11.png",
        { x: 36, y: 104 }
      ),
      new Costume("fall", "./SecurityBattleDroid/costumes/fall.png", {
        x: 30,
        y: 102
      }),
      new Costume("upaiming", "./SecurityBattleDroid/costumes/upaiming.png", {
        x: 40,
        y: 88
      }),
      new Costume("upaiming2", "./SecurityBattleDroid/costumes/upaiming2.png", {
        x: 40,
        y: 88
      }),
      new Costume("upaiming3", "./SecurityBattleDroid/costumes/upaiming3.png", {
        x: 40,
        y: 88
      }),
      new Costume("upaiming4", "./SecurityBattleDroid/costumes/upaiming4.png", {
        x: 46,
        y: 94
      }),
      new Costume(
        "upaiming/downaiming",
        "./SecurityBattleDroid/costumes/upaiming/downaiming.png",
        { x: 40, y: 98 }
      ),
      new Costume(
        "upaiming/downaiming2",
        "./SecurityBattleDroid/costumes/upaiming/downaiming2.png",
        { x: 38, y: 104 }
      ),
      new Costume("die", "./SecurityBattleDroid/costumes/die.png", {
        x: 42,
        y: 104
      }),
      new Costume("die2", "./SecurityBattleDroid/costumes/die2.png", {
        x: 36,
        y: 106
      }),
      new Costume("die3", "./SecurityBattleDroid/costumes/die3.png", {
        x: 38,
        y: 114
      }),
      new Costume("die4", "./SecurityBattleDroid/costumes/die4.png", {
        x: 52,
        y: 124
      }),
      new Costume("die5", "./SecurityBattleDroid/costumes/die5.png", {
        x: 70,
        y: 128
      }),
      new Costume("die6", "./SecurityBattleDroid/costumes/die6.png", {
        x: 88,
        y: 148
      }),
      new Costume("die7", "./SecurityBattleDroid/costumes/die7.png", {
        x: 92,
        y: 154
      }),
      new Costume("die8", "./SecurityBattleDroid/costumes/die8.png", {
        x: 98,
        y: 146
      }),
      new Costume("die9", "./SecurityBattleDroid/costumes/die9.png", {
        x: 112,
        y: 130
      }),
      new Costume("die10", "./SecurityBattleDroid/costumes/die10.png", {
        x: 110,
        y: 128
      }),
      new Costume("die11", "./SecurityBattleDroid/costumes/die11.png", {
        x: 114,
        y: 52
      }),
      new Costume("die12", "./SecurityBattleDroid/costumes/die12.png", {
        x: 118,
        y: 36
      }),
      new Costume("die13", "./SecurityBattleDroid/costumes/die13.png", {
        x: 118,
        y: 38
      }),
      new Costume("die14", "./SecurityBattleDroid/costumes/die14.png", {
        x: 118,
        y: 32
      }),
      new Costume("die15", "./SecurityBattleDroid/costumes/die15.png", {
        x: 118,
        y: 32
      })
    ];

    this.sounds = [
      new Sound("blaster3", "./SecurityBattleDroid/sounds/blaster3.wav")
    ];

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
