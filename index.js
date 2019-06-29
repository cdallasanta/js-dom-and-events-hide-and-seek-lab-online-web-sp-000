function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li')
  debugger;
  lis.forEach(function(li) {
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
