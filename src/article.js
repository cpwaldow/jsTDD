// Usando template string para HTML Fragments

const article = {
  title: 'Aprendendo template literals',
  intro:
    'Um breve explicação de como utilizar template string do ES6 em seu código hoje',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro, sequi libero amet itaque ipsum aperiam sed laboriosam harum iste dicta maiores animi deserunt aliquam.',
  tags: ['ES6', 'JavaScript', 'template-literal'],
  author: 'Carlos',
};

const handleAuthor = (name) => (name ? article.author : 'unkwon');

const markup = `
<article>
  <header>
    <h1>${article.title}</h1>
  </header>
  <section>
    <p>${article.intro}</p>
  </section>
  <footer>
    <ul>
      ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
    </ul>
    <p>${handleAuthor(article.author)}</p>
  </footer>
</article>
`;

//document.body.innerHTML = markup;
