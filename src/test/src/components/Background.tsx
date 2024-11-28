import { useEffect, useRef } from 'react';
import { setupScene } from '../utils/three/sceneSetup';
import { createParticleSystem } from '../utils/three/particleSystem';

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { scene, camera, renderer } = setupScene({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0xffffff,
      backgroundOpacity: 0,
    });

    containerRef.current.appendChild(renderer.domElement);

    const particlesMesh = createParticleSystem({
      particleCount: 5000,
      particleSize: 0.005,
      particleColor: 0x000000,
      particleOpacity: 0.5,
      spread: 5,
    });

    scene.add(particlesMesh);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      requestAnimationFrame(animate);

      // Constant gentle rotation
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0004;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default Background;