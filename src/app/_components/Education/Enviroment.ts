// Environment.ts
import * as THREE from "three";
import CreateParticles from "./CreateParticle";

class Environment {
  private font: any;
  private particle: THREE.Texture;
  private container: HTMLDivElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  private createParticles!: CreateParticles;

  constructor(font: any, particle: THREE.Texture, divElement: HTMLDivElement) {
    this.font = font;
    this.particle = particle;
    this.container = divElement;
    this.scene = new THREE.Scene();
    this.createCamera();
    this.createRenderer();
    this.setup();
    this.bindEvents();
  }

  private bindEvents() {
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  private setup() {
    this.createParticles = new CreateParticles(
      this.scene,
      this.font,
      this.particle,
      this.camera,
      this.renderer,
    );
  }

  public render() {
    this.createParticles.render();
    this.renderer.render(this.scene, this.camera);
  }

  private createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      65,
      this.container.clientWidth / this.container.clientHeight,
      1,
      10000,
    );
    this.camera.position.set(0, 0, 100);
  }

  private createRenderer() {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight,
    );
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);

    this.renderer.setAnimationLoop(() => {
      this.render();
    });
  }

  private onWindowResize() {
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight,
    );
  }
}

export default Environment;
