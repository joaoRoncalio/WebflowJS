<script>
document.querySelectorAll('.button, .mini-button, .nav-link').forEach(link => {
  link.addEventListener('mouseover', () => {
    const originalText = link.textContent;
    const textArray = originalText.split('');
    
    let interval = setInterval(() => {
      const scrambledText = textArray
        .sort(() => Math.random() - 0.5) // Shuffle existing characters
        .join('');
      
      link.textContent = scrambledText;
    }, 50); // Adjust scramble speed here

    setTimeout(() => {
      clearInterval(interval);
      link.textContent = originalText; // Restore original text
    }, 500); // Adjust scramble duration here
  });
});
</script>