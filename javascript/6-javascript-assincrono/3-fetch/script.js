const imagem = fetch('https://google.com');

imagem.then(response => {
  console.log(response.type);
  if(response.status === 404) {
    console.log('Página não existe');
  }
});