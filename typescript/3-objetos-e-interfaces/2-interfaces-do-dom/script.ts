const links = document.querySelectorAll(".link");
console.log(links);

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) console.log(link.href);
  else console.log(typeof link);
});

const dados = [1, 2, 3];

const arrayLinks = Array.from(links);
const anchorLinks = arrayLinks.filter(
  (link) => link instanceof HTMLAnchorElement
);

console.log(anchorLinks);
