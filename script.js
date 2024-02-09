document.addEventListener('DOMContentLoaded', function () {
    // Función para crear emojis de confeti
    function createConfetti() {
      const confettiContainer = document.createElement('div');
      confettiContainer.className = 'confetti-container';
  
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('span');
        confetti.className = 'emoji-confetti';
        confetti.innerHTML = [ '🥰', '❤️', '😘']; // Puedes cambiar el emoji según tus preferencias
        confetti.style.left = Math.random() * 150 + 'vw';
        confetti.style.animationDuration = Math.random() * 1 + 2 + 's';
  
        confettiContainer.appendChild(confetti);
      }
  
      document.body.appendChild(confettiContainer);
  
      // Eliminar el contenedor de confeti después de la animación
      confettiContainer.addEventListener('animationend', function () {
        document.body.removeChild(confettiContainer);
      });
    }
  
    // Llamar a la función de confeti al cargar la página
    createConfetti();
  });
  