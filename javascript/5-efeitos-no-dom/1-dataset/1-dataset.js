const div = document.querySelector('[data-cor]');

div.dataset.heigth = 100;

delete div.dataset.width;

div.dataset.totalHeight = 200;

console.log(div.dataset);