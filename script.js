const bodyEl = document.body;
bodyEl.addEventListener('mousemove' ,(e) => {
    const random = Math.random()
   
   if(random > 0.4)
   {const x = e.offsetX
   const y = e.offsetY
   const spanEl = document.createElement('span');
   spanEl.style.left = x + 'px';
   spanEl.style.top = y + 'px';
   const size = Math.random()
   spanEl.style.width= size * 100 + 'px'
   spanEl.style.height= size * 100 + 'px'
   bodyEl.append(spanEl)
   setTimeout(() => {
     spanEl.remove()
   },3000)}
})