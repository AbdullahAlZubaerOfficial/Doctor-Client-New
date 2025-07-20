import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: { enable: true, color: "#f7a582" },
        },
        background: {
          color: "#f3f4f6",
        },
      }}
    />
  );
};

export default ParticlesBackground;
