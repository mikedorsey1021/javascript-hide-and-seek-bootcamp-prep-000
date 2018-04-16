function getFirstSelector (selector){
  return document.querySelector(selector);
}

function nestedTarget (nested){
  return document.querySelector('#nested .target');
}

function increaseRankBy (n){
  const lis = document.getElementById('app').querySelectorAll('.ranked-list li');

  for (let i = 0; i < lis.length; i++){
    let inner = parseInt(lis[i].innerHTML);
     inner = (inner + n).toString();
  }
}
