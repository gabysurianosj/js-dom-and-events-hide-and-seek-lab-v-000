function getFirstSelector(selector){
  return document.querySelector(selector)
};

function nestedTarget(){
  return document.querySelector('#nested .target')
};

function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list li')

  for (let i=0)
