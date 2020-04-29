let f=document.querySelector("#contact > form");
f.onsubmit=e=>setTimeout(e=>f.outerHTML='<div class="grow">Message sent!</div>',1000);