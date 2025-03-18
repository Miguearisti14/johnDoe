function autenticar(e) {
  e.preventDefault();

  const elements = new Array(e.target.children);

  elements.forEach((element) => {
    console.log(typeof element);
  });
}
