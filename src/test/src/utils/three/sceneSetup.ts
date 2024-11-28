import * as THREE from 'three';

export interface SceneConfig {
  width: number;
  height: number;
  backgroundColor: number;
  backgroundOpacity: number;
}

export const setupScene = (config: SceneConfig) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, config.width / config.height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  renderer.setSize(config.width, config.height);
  renderer.setClearColor(config.backgroundColor, config.backgroundOpacity);
  camera.position.z = 2;

  return { scene, camera, renderer };
};