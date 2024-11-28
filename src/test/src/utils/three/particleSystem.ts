import * as THREE from 'three';

export interface ParticleSystemConfig {
  particleCount: number;
  particleSize: number;
  particleColor: number;
  particleOpacity: number;
  spread: number;
}

export const createParticleSystem = (config: ParticleSystemConfig) => {
  const geometry = new THREE.BufferGeometry();
  const posArray = new Float32Array(config.particleCount * 3);

  for (let i = 0; i < config.particleCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * config.spread;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const material = new THREE.PointsMaterial({
    size: config.particleSize,
    color: config.particleColor,
    transparent: true,
    opacity: config.particleOpacity,
  });

  return new THREE.Points(geometry, material);
};