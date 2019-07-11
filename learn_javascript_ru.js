window.onload = () => {
  document.querySelector('#messages').addEventListener('click', e=>{
    if (e.target.getAttribute('data-action')=='close') {
      e.target.parentNode.style.display = 'none';
    } 
  })

  Array.from(document.querySelectorAll('#messages>li')).map(el=>el.innerHTML+="<span data-action=\"close\" style=\"position: absolute; right: 5px; top: 5px;\">[x]</span>")

  tree.addEventListener('click', e=>{
    var el = e.target.nextSibling;
    if (el == null) return;
    if (el.style.display == 'none') el.style.display = 'block'
    else el.style.display = 'none'
  })
}
