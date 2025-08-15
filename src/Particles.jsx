import React from "react";

export default class Particles extends React.Component {
  canvasRef = React.createRef();
  rafId = null;

  componentDidMount() {
    this.init();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  handleResize = () => {
    this.resizeCanvas();
  };

  resizeCanvas = () => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    // Fill the viewport & render crisp on HiDPI
    const dpr = window.devicePixelRatio || 1;
    const cssWidth = window.innerWidth;
    const cssHeight = window.innerHeight;

    canvas.style.width = cssWidth + "px";
    canvas.style.height = cssHeight + "px";
    canvas.width = Math.floor(cssWidth * dpr);
    canvas.height = Math.floor(cssHeight * dpr);

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale drawing ops to CSS pixels
  };

  init = () => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");

    this.resizeCanvas();

    const NUM = 150;
    const DOT_RADIUS_MIN = 0.5;
    const DOT_RADIUS_RANGE = 2.5;
    const COLOR = "#fff";
    const BG = "#001B2E";
    const MIN_SPEED = 0.5;
    const MAX_SPEED = 1;
    const LINK_DIST = 80;

    const randVelocity = () => MAX_SPEED * Math.random() - MIN_SPEED;
    const dist = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.clientWidth;
        this.y = Math.random() * canvas.clientHeight;
        this.vx = randVelocity();
        this.vy = randVelocity();
        this.radius = DOT_RADIUS_MIN + Math.random() * DOT_RADIUS_RANGE;
      }
      step() {
        this.x += this.vx;
        this.y += this.vy;

        // bounce on edges
        if (this.x <= this.radius || this.x >= canvas.clientWidth - this.radius) this.vx *= -1;
        if (this.y <= this.radius || this.y >= canvas.clientHeight - this.radius) this.vy *= -1;
      }
      draw() {
        ctx.fillStyle = COLOR;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: NUM }, () => new Particle());

    const draw = () => {
      // background
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // lines
      ctx.lineWidth = 0.2;
      ctx.strokeStyle = COLOR;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          if (dist(p, q) <= LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // dots + motion
      for (const p of particles) {
        p.draw();
        p.step();
      }

      this.rafId = requestAnimationFrame(draw);
    };

    draw();
  };

  render() {
    return (
      <canvas
        id="particles"
        ref={this.canvasRef}
        aria-hidden="true"
        role="presentation"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,           // behind all content
          pointerEvents: "none" // never intercept clicks
        }}
      />
    );
  }
}

// import React from "react";

// export default class Particles extends React.Component {
//   componentDidMount() {
//     this.generateParticles();
//   }

//   generateParticles = () => {
//     const canvas = document.getElementById("particles");
//     const ctx = canvas.getContext("2d");
//     canvas.width = document.documentElement.clientWidth;
//     canvas.height = document.documentElement.clientHeight;

//     let num = 150;
//     let size = 1;
//     let color = "#fff";
//     let min_speed = 0.5;
//     let max_speed = 1;
//     let line_distance = 80;
//     let particles = [];

//     const distance = (pointA, pointB) => {
//       let dx = Math.abs(pointB.x - pointA.x);
//       let dy = Math.abs(pointB.y - pointA.y);
//       return Math.sqrt(dx * dx + dy * dy);
//     };

//     const randVelocity = () => {
//       return max_speed * Math.random() - min_speed;
//     };

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;

//         // Random velocities, that will move the particle in a random direction. ex: -1 on the x-plane and 1 on the y-plane.
//         this.vx = randVelocity();
//         this.vy = randVelocity();

//         this.color = color;
//         this.radius = Math.floor(Math.random() * 3) + 0.5;
//       }
//     }

//     for (let i = 0; i < num; i++) {
//       particles.push(new Particle());
//     }

//     const draw = () => {
//       ctx.fillStyle = "#001B2E";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Lets draw particles from the array now
//       for (let t = 0; t < particles.length; t++) {
//         // This particle
//         let p = particles[t];

//         for (let q = 0; q < particles.length; q++) {
//           // Check position distance
//           if (distance(particles[q], p) <= line_distance) {
//             ctx.beginPath();
//             ctx.lineWidth = 0.2;
//             ctx.strokeStyle = "#fff";
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(particles[q].x, particles[q].y);
//             ctx.stroke();
//           }
//         }

//         ctx.fillStyle = color;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
//         ctx.fill();

//         p.x += p.vx;
//         p.y += p.vy;

//         // Invert values if they touch the canvas borders
//         if (p.x <= size || p.x >= canvas.width - size) {
//           p.vx *= -1;
//         }
//         if (p.y <= size || p.y > +canvas.height - size) {
//           p.vy *= -1;
//         }
//       }

//       requestAnimationFrame(draw);
//     };

//     draw();
//   };
//   render() {
//     return <canvas id="particles"></canvas>;
//   }
// }

// //By: Sharna Hossain - CodePen.io
