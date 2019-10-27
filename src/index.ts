const SIZE = 800;
const FPS = 50;

// Initializes and runs the simulation.
function main() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  canvas.height = SIZE;
  canvas.width = SIZE;
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, SIZE, SIZE);

  const gameState = new Uint8ClampedArray(SIZE * SIZE);
  const newState = new Uint8ClampedArray(SIZE * SIZE);
  let id = 0;

  // Keyboard controls.
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'r') {
      reset(ctx, gameState);
    } else if (e.key === ' ') {
      if (id) {
        clearInterval(id);
        id = 0;
      } else {
        id = setInterval(() => {
          update(gameState, newState);
          draw(ctx, gameState);
        }, Math.floor(1000 / FPS));
      }
    }
  });

  reset(ctx, gameState);
}

// Reset the game state.
function reset(ctx: CanvasRenderingContext2D, gameState: Uint8ClampedArray) {
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      gameState[j + SIZE * i] = Math.round(Math.random());
    }
  }
  draw(ctx, gameState);
}

// Draws the game state.
function draw(ctx: CanvasRenderingContext2D, gameState: Uint8ClampedArray) {
  const imageData = ctx.getImageData(0, 0, SIZE, SIZE);
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      const state = gameState[j + SIZE * i] * 255;
      imageData.data[4 * (j + SIZE * i)] = state;
      imageData.data[4 * (j + SIZE * i) + 1] = state;
      imageData.data[4 * (j + SIZE * i) + 2] = state;
    }
  }
  ctx.putImageData(imageData, 0, 0);
  ctx.fillStyle = 'red';
  ctx.fillText('spacebar to play/pause. r to reset', 10, 10);
}

// Updates the game state.
function update(gameState: Uint8ClampedArray, newState: Uint8ClampedArray) {
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      let count = 0;
      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          if (k === 0 && l === 0) continue;
          count += gameState[j + SIZE * (i + k) + l];
        }
      }
      let state = gameState[j + SIZE * i];
      if (count > 3 || count < 2) {
        state = 0;
      }
      if (count === 3) {
        state = 1;
      }
      newState[j + SIZE * i] = state;
    }
  }
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      gameState[j + SIZE * i] = newState[j + SIZE * i];
    }
  }
}

main();
