import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import BobaFett from "./BobaFett/BobaFett.js";
import Ig88 from "./Ig88/Ig88.js";
import AtSt from "./AtSt/AtSt.js";
import SlaveI from "./SlaveI/SlaveI.js";
import _327thClone from "./_327thClone/_327thClone.js";
import CinDrallig from "./CinDrallig/CinDrallig.js";
import Commander from "./Commander/Commander.js";
import SecurityBattleDroid from "./SecurityBattleDroid/SecurityBattleDroid.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  BobaFett: new BobaFett({
    x: 82,
    y: -5,
    direction: -270,
    costumeNumber: 29,
    size: 215,
    visible: true,
    layerOrder: 8
  }),
  Ig88: new Ig88({
    x: 128,
    y: 178,
    direction: -270,
    costumeNumber: 2,
    size: 200,
    visible: false,
    layerOrder: 5
  }),
  AtSt: new AtSt({
    x: -173,
    y: 67,
    direction: -270,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  SlaveI: new SlaveI({
    x: 184,
    y: 84,
    direction: -89,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  _327thClone: new _327thClone({
    x: 41,
    y: -40,
    direction: -270,
    costumeNumber: 5,
    size: 200,
    visible: false,
    layerOrder: 6
  }),
  CinDrallig: new CinDrallig({
    x: -53,
    y: -41,
    direction: -270,
    costumeNumber: 1,
    size: 200,
    visible: false,
    layerOrder: 2
  }),
  Commander: new Commander({
    x: -142,
    y: -163,
    direction: -270,
    costumeNumber: 13,
    size: 200,
    visible: false,
    layerOrder: 7
  }),
  SecurityBattleDroid: new SecurityBattleDroid({
    x: -25,
    y: 59,
    direction: -270,
    costumeNumber: 12,
    size: 200,
    visible: false,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
