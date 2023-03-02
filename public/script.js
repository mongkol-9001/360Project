import * as THREE from 'three';
import { Viewer } from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import { UEvent } from 'uevent';

const viewer = new Viewer({
  container: document.querySelector('#viewer'),
  panorama: '../img/imgCS.jpg',
  useXmpData: false
});