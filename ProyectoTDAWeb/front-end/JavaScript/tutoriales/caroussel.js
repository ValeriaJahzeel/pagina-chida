/* etiqueta las imágenes pra poder rastrearlas, solo por conveniencia */
let i = 1;
for (let li of carousel1.querySelectorAll('li')) {
     li.style.position = 'relative';
     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
     i++;
}

/* configuración */
let width = 560; // ancho de las imágenes
let count = 1; // conteo de las imágenes visibles

let list = carousel1.querySelector('ul');
let listElems = carousel1.querySelectorAll('li');

let position = 0; // posición del desplazamiento del carrete

carousel1.querySelector('.prev').onclick = function () {
     // desplazamiento izquierdo
     position += width * count;
     // no podemos mover demasiado a la izquierda, se acaban las imágenes
     position = Math.min(position, 0)
     list.style.marginLeft = position + 'px';
};

carousel1.querySelector('.next').onclick = function () {
     // desplazamiento derecho
     position -= width * count;
     // solo se puede desplazar el carrete de imágenes (longitud total de la cinta - conteo visibles)
     position = Math.max(position, -width * (listElems.length - count));
     list.style.marginLeft = position + 'px';
};

let list2 = carousel2.querySelector('ul');
let listElems2 = carousel2.querySelectorAll('li');

for (let li of carousel2.querySelectorAll('li')) {
     li.style.position = 'relative';
     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
     i++;
}
carousel2.querySelector('.prev').onclick = function () {
     // desplazamiento izquierdo
     position += width * count;
     // no podemos mover demasiado a la izquierda, se acaban las imágenes
     position = Math.min(position, 0)
     list2.style.marginLeft = position + 'px';
};

carousel2.querySelector('.next').onclick = function () {
     // desplazamiento derecho
     position -= width * count;
     // solo se puede desplazar el carrete de imágenes (longitud total de la cinta - conteo visibles)
     position = Math.max(position, -width * (listElems2.length - count));
     list2.style.marginLeft = position + 'px';
};

let list3 = carousel3.querySelector('ul');
let listElems3 = carousel3.querySelectorAll('li');

for (let li of carousel3.querySelectorAll('li')) {
     li.style.position = 'relative';
     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
     i++;
}
carousel3.querySelector('.prev').onclick = function () {
     // desplazamiento izquierdo
     position += width * count;
     // no podemos mover demasiado a la izquierda, se acaban las imágenes
     position = Math.min(position, 0)
     list3.style.marginLeft = position + 'px';
};

carousel3.querySelector('.next').onclick = function () {
     // desplazamiento derecho
     position -= width * count;
     // solo se puede desplazar el carrete de imágenes (longitud total de la cinta - conteo visibles)
     position = Math.max(position, -width * (listElems3.length - count));
     list3.style.marginLeft = position + 'px';
};

