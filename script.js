  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.cursor = 'none';

    document.addEventListener('mousemove', (e) => {
      // Move custom cursor
      const cursor = document.getElementById('cursor');
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      // Create sparkle
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';

      // Add sparkle symbol 
      sparkle.textContent = '✦';

      // Random size
      const size = Math.random() * 4 + 8;
      sparkle.style.fontSize = size + 'px';

      // Position at mouse
      sparkle.style.left = e.clientX + 'px';
      sparkle.style.top = e.clientY + 'px';

      // Add to page
      document.body.appendChild(sparkle);

      // Remove after animation
      sparkle.addEventListener('animationend', () => {
        sparkle.remove();
      });
    });
  });