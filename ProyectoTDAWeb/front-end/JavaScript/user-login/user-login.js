const cursosContainer = document.querySelector('.courses');
let usuario = 'profesor';

function modifyCourse(precioM, nombre){
    axios.patch(`http://localhost:3000/api/cursos/${nombre}`, {
                precio: precioM
            })
            .then(response => {
                if (response.status === 200) {
                    if (response.data.sqlMessage !== undefined) {
                        alert(response.data.sqlMessage);
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
}

function deleteCourse(nombre) {
    //console.log(parent);

    axios.delete(`http://localhost:3000/api/cursos/${nombre}`)
    .then(response => {
        if (response.status === 200) {
            if (response.data.sqlMessage !== undefined) {
                alert(response.data.sqlMessage);
            }
        }

        showAllCourses();
    })
    .catch(error => {
        console.log(error);
    });

    const cancelBtn = document.querySelector('.cancel');
    cancelBtn.classList.add('hide');
    updateIngredients();
    console.log('Eliminado');
}

function showAllCourses(){
    const allBtn = document.querySelector('.all');
    allBtn.classList.add('hide');
    
    const usuario = 'navil@gmail.com';
    cursosContainer.innerHTML = '';
    axios.get(`http://localhost:3000/api/courseUser/${usuario}`)
    .then(response =>{
        const data = response.data;
        data.forEach(dato =>{
            
            axios.get(`http://localhost:3000/api/cursos/${dato.curso}`)
            .then(response2 =>{
                
                const data2 = response2.data;

                const section = document.createElement('section');
                section.classList.add('course');

                const img = document.createElement('i');
                img.classList.add('fa-solid', 'fa-book-open-reader');

                const autor = document.createElement('p');
                autor.classList.add('author');
                autor.textContent = data2.autor;

                const title = document.createElement('p');
                title.classList.add('title');
                title.textContent = data2.nombreCurso;

                

                const continueBtn = document.createElement('section');
                continueBtn.classList.add('continue');
                const ref = document.createElement('a');
                ref.setAttribute('href', '#');
                ref.textContent = 'Continuar';

                const deleteBtn = document.createElement('section');
                deleteBtn.classList.add('deleteCourse');
                deleteBtn.innerHTML = `<i class="fa-solid fa-trash fa-xl"></i>`;

                section.appendChild(img);
                section.appendChild(autor);
                section.appendChild(title);

                const message = document.createElement('p');
                message.textContent = 'Modificar el precio';

                const modifyPrice = document.createElement('input');
                if (usuario == 'profesor'){
                    modifyPrice.type = 'text';
                    modifyPrice.placeholder = 'Introduce el precio del curso';
                    modifyPrice.classList.add('modify-price');
                }

                const btn = document.createElement('button');
                btn.classList.add('btn-modify');
                btn.textContent = 'Modificar';

                deleteBtn.addEventListener('click', () =>{
                    console.log('Hola');
                    deleteCourse(title.textContent)
                });

                btn.addEventListener('click', ()=>{
                    console.log(modifyPrice.value);
                    modifyCourse(modifyPrice.value, title);
                });

                section.appendChild(message);
                section.appendChild(modifyPrice);
                
                section.appendChild(btn);
                section.appendChild(continueBtn);
                section.appendChild(deleteBtn);

                cursosContainer.appendChild(section);
                
                    
            })

            .catch(error =>{
                console.log(error);
            });
        });
    })
    .catch(error =>{
        console.log(error);
    });
}



function showCourses(){
    const usuario = 'navil@gmail.com';
    cursosContainer.innerHTML = '';
    axios.get(`http://localhost:3000/api/courseUser/${usuario}`)
    .then(response =>{
        const data = response.data;
        for(let i=0; i<4; i++){
            axios.get(`http://localhost:3000/api/cursos/${data[i].curso}`)
            .then(response2 =>{
                
                const data2 = response2.data;

                const section = document.createElement('section');
                section.classList.add('course');

                const img = document.createElement('i');
                img.classList.add('fa-solid', 'fa-book-open-reader');

                const autor = document.createElement('p');
                autor.classList.add('author');
                autor.textContent = data2.autor;

                const title = document.createElement('p');
                title.classList.add('title');
                title.textContent = data2.nombreCurso;

                const continueBtn = document.createElement('section');
                continueBtn.classList.add('continue');
                const ref = document.createElement('a');
                ref.setAttribute('href', '#');
                ref.textContent = 'Continuar';

                const deleteBtn = document.createElement('section');
                deleteBtn.classList.add('deleteCourse');
                deleteBtn.innerHTML = `<i class="fa-solid fa-trash fa-xl"></i>`;

                section.appendChild(img);
                section.appendChild(autor);
                section.appendChild(title);

                const message = document.createElement('p');
                message.textContent = 'Modificar el precio';

                let modifyPrice = document.createElement('input');
                if (usuario == 'profesor'){
                    modifyPrice.type = 'text';
                    modifyPrice.placeholder = 'Introduce el precio del curso';
                    modifyPrice.classList.add('modify-price');
                }

                const btn = document.createElement('button');
                btn.classList.add('btn-modify');
                btn.textContent = 'Modificar';

                deleteBtn.addEventListener('click', () =>{
                    console.log('Hola');
                    deleteCourse(title.textContent)
                });

                btn.addEventListener('click', ()=>{
                    modifyCourse(modifyPrice.value, title.textContent);
                });

                section.append(message);
                section.appendChild(modifyPrice);
                section.appendChild(btn);
                section.appendChild(continueBtn);
                section.appendChild(deleteBtn);

                cursosContainer.appendChild(section);
                

                

            })
            .catch(error =>{
                console.log(error);
            });
        }
    })
    .catch(error =>{
        console.log(error);
    });
}

showCourses();

const allBtn = document.querySelector('.all');

allBtn.addEventListener('click', showAllCourses);

