// Glitter effect for all pages
const colors = ['#ffb6e6', '#7ecbff', '#fff0fa', '#c2e9fb'];
function createGlitter() {
  const glitter = document.createElement('div');
  glitter.className = 'glitter';
  const size = Math.random() * 6 + 6;
  glitter.style.width = `${size}px`;
  glitter.style.height = `${size}px`;
  glitter.style.background = colors[Math.floor(Math.random() * colors.length)];
  glitter.style.left = `${Math.random() * 100}vw`;
  glitter.style.animationDuration = `${Math.random() * 2 + 2.5}s`;
  glitter.style.opacity = Math.random() * 0.5 + 0.5;
  document.body.appendChild(glitter);
  setTimeout(() => glitter.remove(), 4000);
}
setInterval(createGlitter, 120);

// Add CSS for glitter
const style = document.createElement('style');
style.innerHTML = `
  .glitter {
    position: fixed;
    top: -12px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    box-shadow: 0 0 8px #ffb6e6, 0 0 12px #7ecbff;
    animation: glitter-fall linear forwards;
  }
  @keyframes glitter-fall {
    to {
      transform: translateY(110vh) rotate(360deg);
      opacity: 0.2;
    }
  }
`;
document.head.appendChild(style);
