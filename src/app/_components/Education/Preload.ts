// preload.ts
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import Environment from "./Enviroment";

class Preload {
  private typo: any | null = null;
  private particle: THREE.Texture | null = null;
  private container: HTMLDivElement;

  constructor(divElement: HTMLDivElement) {
    this.container = divElement;
    const manager = new THREE.LoadingManager();
    manager.onLoad = () => {
      const environment = new Environment(
        this.typo!,
        this.particle!,
        divElement,
      );
    };

    const loader = new FontLoader(manager);
    loader.load(
      "https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json",
      (font) => {
        this.typo = font;
      },
    );

    this.particle = new THREE.TextureLoader(manager).load(
      "https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png",
    );
    if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.scroll)
    ) {
      const preloadInstance = new Preload(this.container);
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        const preloadInstance = new Preload(this.container);
      });
    }
  }
}

export default Preload;
