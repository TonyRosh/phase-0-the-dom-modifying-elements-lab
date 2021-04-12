const body = document.getElementById('main');
body.remove(main.querySelector('main#main'));

const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader);
newHeader.innerHTML = "Tony is the champion";
