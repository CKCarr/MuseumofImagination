function isInViewport(e){const t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.left>=0&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}document.addEventListener("scroll",(function(){document.querySelectorAll(".reveal, .reveal2, .reveal3, .reveal4, .treereveal").forEach((function(e){isInViewport(e)&&e.classList.add("active")}))}));