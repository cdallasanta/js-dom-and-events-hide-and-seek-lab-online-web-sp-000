function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  return document.querySelectorAll('.ranked-list li').forEach(function(li) {
    li.innerHTML = parseInt(li.innerHTML) + n;
  })
}

function deepestChild(){
  let div = document.querySelector('div#grand-node')
  while (div.querySelector('div')) {
    div = div.querySelector('div');
  }
  return div;
}
