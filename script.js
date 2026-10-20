
(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});
  var tabs=document.querySelectorAll('.tabs button');
  tabs.forEach(function(t){t.addEventListener('click',function(){
    tabs.forEach(function(x){x.setAttribute('aria-selected',x===t)});
    document.querySelectorAll('.menu').forEach(function(m){m.classList.toggle('show',m.id===t.dataset.t)});
  })});
})();
