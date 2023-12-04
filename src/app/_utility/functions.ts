export const initFireCursorTrail = (targetElement: HTMLDivElement) => {
  const coords: { x: number; y: number } = { x: 0, y: 0 };
  window.onmousemove = (event: MouseEvent) => {
    coords.x = event.clientX;
    coords.y = event.clientY;
  };
};
