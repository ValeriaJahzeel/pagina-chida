const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');
info.textContent = 'A continuación se muestra una lista dinámica. Haga clic en cualquier lugar de la página para añadir un nuevo elemento de la lista.Haga clic en un elemento de la lista existente para cambiar su texto por otro.';
document.body.appendChild(info);
document.body.appendChild(list);
html.onclick = function () {
     const listItem = document.createElement('li');
     const listContent = prompt('¿Qué contenido quiere que tenga el elemento de la lista?');
     listItem.textContent = listContent;
     list.appendChild(listItem);
     listItem.onclick = function (e) {
          e.stopPropagation();
          const listContent = prompt('Introduzca el nuevo contenido del elemento de la lista');
          this.textContent = listContent;
     }
}