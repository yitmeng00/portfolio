import * as THREE from "three";

export const COLOR_A = new THREE.Color("#e8d7c4");

export const COLOR_B = new THREE.Color("#e7dbd4");

export const COLOR_C = new THREE.Color("#eee5de");

export const LIGHT_DIR = new THREE.Vector3(0.5, 0.8, 1.0).normalize();

export const VERTEX_SHADER = `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying float vLocalY;

  void main() {
    vLocalY = position.y;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(cameraPosition - worldPos.xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const FRAGMENT_SHADER = `
  uniform vec3 colorA;
  uniform vec3 colorB;
  uniform vec3 colorC;
  uniform vec3 lightDir;
  uniform float yMin;
  uniform float yMax;

  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying float vLocalY;

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewDir);
    vec3 L = normalize(lightDir);

    float t = clamp((vLocalY - yMin) / (yMax - yMin), 0.0, 1.0);

    vec3 baseColor;
    if (t < 0.5) {
      baseColor = mix(colorC, colorB, t / 0.5);
    } else {
      baseColor = mix(colorB, colorA, (t - 0.5) / 0.5);
    }

    float diff = max(dot(N, L), 0.0);
    vec3 col = baseColor * (0.45 + 0.55 * diff);

    vec3 H = normalize(L + V);
    float spec = pow(max(dot(N, H), 0.0), 40.0);
    col += vec3(1.0, 0.97, 0.93) * spec * 0.3;

    float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.5);
    col += colorA * fresnel * 0.2;

    float alpha = mix(0.5, 0.9, fresnel);

    gl_FragColor = vec4(col, alpha);
  }
`;
