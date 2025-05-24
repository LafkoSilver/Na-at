document.getElementById('searchInput').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const articles = document.querySelectorAll('.article-card');
  
  articles.forEach(article => {
    const title = article.querySelector('.card-title').textContent.toLowerCase();
    const content = article.querySelector('.card-text').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || content.includes(searchTerm)) {
      article.style.display = '';
    } else {
      article.style.display = 'none';
    }
  });
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Remover clase active de todos los botones
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    // Añadir clase active al botón clickeado
    this.classList.add('active');
    
    const category = this.dataset.category;
    const articles = document.querySelectorAll('.article-card');
    
    articles.forEach(article => {
      if (category === 'all' || article.dataset.category === category) {
        article.style.display = '';
      } else {
        article.style.display = 'none';
      }
    });
  });
});