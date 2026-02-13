import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export function GifPlane() {
  const meshRef = useRef<THREE.Mesh>(null);

  const video = document.createElement("video");
  video.src = "/animation.gif";
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.autoplay = true;

  const texture = new THREE.VideoTexture(video);
  texture.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    video.play();
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.2; 
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[200, 200]} />
      <meshBasicMaterial map={texture} transparent toneMapped={false} />
    </mesh>
  );
}
