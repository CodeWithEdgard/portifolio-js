function createArticleWithText(className, textAbout, textContent) {
  const article = document.querySelector(className);

  const h2 = document.createElement('h2');
  h2.innerHTML = textAbout;
  article.append(h2);

  const p = document.createElement('p');
  p.innerHTML = textContent;
  article.append(p);
}

function createArticleWithList(className, textAbout, arrayItens) {
  const article = document.querySelector(className);
  
  const h2 = document.createElement('h2');
  h2.innerHTML = textAbout;
  article.append(h2);

  const ul = document.createElement('ul');
  arrayItens.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item;
    ul.append(li);
  });

  article.append(ul);
}

function positionTooltip(event) {
  const tooltip = document.getElementById('tooltip');
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;
  const pageWidth = window.innerWidth;

  let left = event.pageX + 10;
  let top = event.pageY + 10;

  if (left + tooltipWidth > pageWidth) {
    left = event.pageX - tooltipWidth - 10;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

export { createArticleWithList, createArticleWithText, positionTooltip}