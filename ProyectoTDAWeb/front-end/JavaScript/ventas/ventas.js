document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Curso Completo de Desarrollo Web 2023 Bootcamp',
            precio: 199,
            imagen: "images/venta/curso1.jpg"
        },
        {
            id: 2,
            nombre: 'Curso Completo de Desarrollo Web 2023 Bootcamp',
            precio: 250,
            imagen: "images/venta/curso1.jpg"
        },
        {
            id: 3,
            nombre: 'Curso Completo de Desarrollo Web 2023 Bootcamp',
            precio: 180,
            imagen: "images/venta/curso1.jpg"
        },
        {
            id: 4,
            nombre: 'Curso Completo de Desarrollo Web 2023 Bootcamp',
            precio: 200,
            imagen: "images/venta/curso1.jpg"
        }

    ];

    let carrito = [];
    let total = 0;
    let precios = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const DOMbotonEnviar = document.querySelector('#boton-enviar');

    let cont = 1;

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        // Peticion AJAX
        axios.get(`http://localhost:3000/api/cursos`)
            .then(response => {
                const datos = response.data;
                // Crear los nuevo elementos HTML
                datos.forEach(data => {
                    // Estructura
                    const miNodo = document.createElement('div');
                    miNodo.classList.add('card', 'col-sm-4');
                    // Body
                    const miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('card-body');
                    // Titulo
                    const miNodoTitle = document.createElement('h5');
                    miNodoTitle.classList.add('card-title');
                    miNodoTitle.textContent = data.nombreCurso;
                    // Imagen
                    const miNodoImagen = document.createElement('img');
                    miNodoImagen.classList.add('img-fluid');
                    miNodoImagen.setAttribute('src', `images/venta/curso${cont}.jpg`);
                    cont += 1;
                    // Precio
                    const miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('card-text');
                    miNodoPrecio.textContent = `${data.precio}${divisa}`;
                    // Boton 
                    const miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn', 'btn-primary');
                    miNodoBoton.textContent = 'Añadir al Carrito';
                    miNodoBoton.setAttribute('marcador', data.idcurso);
                    miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                    // Insertamos
                    miNodoCardBody.appendChild(miNodoImagen);
                    miNodoCardBody.appendChild(miNodoTitle);
                    miNodoCardBody.appendChild(miNodoPrecio);
                    miNodoCardBody.appendChild(miNodoBoton);
                    miNodo.appendChild(miNodoCardBody);
                    DOMitems.appendChild(miNodo);
                });
            
            })
            .catch(error => {
                console.log(error);
            });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();

    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            console.log(item);
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = '';

            axios.get(`http://localhost:3000/api/cursos/${item}`)
            .then(response => {
                const miItem = response.data;

                // Cuenta el número de veces que se repite el producto
                const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                    // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                    return itemId === item ? total += 1 : total;
                }, 0);

                // Creamos el nodo del item del carrito
                const miNodo = document.createElement('li');
                miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                miNodo.textContent = `${numeroUnidadesItem} x ${miItem.nombreCurso} - ${miItem.precio}${divisa}`;

                // Boton de borrar
                const miBoton = document.createElement('button');
                miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                miBoton.textContent = 'X';
                miBoton.style.marginLeft = '1rem';
                miBoton.dataset.item = item;
                miBoton.addEventListener('click', borrarItemCarrito);
                // Mezclamos nodos
                miNodo.appendChild(miBoton);
                DOMcarrito.appendChild(miNodo);
                        
            })
            .catch(error => {
            console.log(error);
            });

            
            //const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
              //  return itemBaseDatos.id === parseInt(item);
            //});
            
        });
        // Renderizamos el precio total en el HTML
        //console.log(carrito);
        precios = [];
        // De cada elemento obtenemos su precio
        carrito.forEach(item =>{
            axios.get(`http://localhost:3000/api/cursos/${item}`)
            .then(response => {
                let itemF = response.data;
                precios.push(itemF.precio);
                const initialValue = 0;
                total = precios.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    initialValue
                );
                DOMtotal.textContent = total;
            })
            .catch(error => {
                console.log(error);
            });
        });
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        DOMtotal.textContent = 0;
        // volvemos a renderizar
        renderizarCarrito();
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        DOMtotal.textContent = 0;
        // Renderizamos los cambios
        renderizarCarrito();
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);


    DOMbotonEnviar.addEventListener('click', () => {
        if (total == 0) {
            var alertDiv = document.getElementById("alert");
            alertDiv.style.display = "block"; // Muestra la alerta

            setTimeout(function () {
                alertDiv.style.display = "none"; // Oculta la alerta después de 3 segundos
            }, 3000);
        }
        else{
            // Se guardan los cursos en la cuenta del usuario
            carrito.forEach(item =>{
                axios.post('http://localhost:3000/api/courseUser', {
                    curso: item,
                    usuario: 'navil@gmail.com'
                })
                .then(response => {
                    if (response.status === 200) {
                        if (response.data.sqlMessage !== undefined) {
                            alert(response.data.sqlMessage);
                        }
                        updateIngredients();
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            });
            
            alert("Compra generada");
            total = 0;
            vaciarCarrito();
        }
    });




    // Inicio
    renderizarProductos();
    renderizarCarrito();
});