function isInBD(usuario, correo){
    let accept = false;
    BD.forEach((user) =>{
        if((usuario === user.user) && (correo === user.email)){
            accept = true;
        }
    });
    return accept;
}

function singUp(event) {
    event.preventDefault();

    const user = document.getElementById('user-name');
    const usuario = user.value;
    console.log(usuario);

    const email = document.getElementById('user-email');
    const correo = email.value;
    console.log(correo);

    const pass = document.getElementById('password');
    const contra = pass.value;
    console.log(contra);

    let data = {
        user: usuario,
        email: correo,
        password: contra,
    };

    if(!isInBD(usuario, correo)){
        BD.push(data);
        console.log(BD);
        //window.location.href = "./login.html";
    }
    else{
        //Mandar mensaje de error
        const error = document.getElementById('error-message');
        error.classList.remove('hide');
    }
    
    user.value = '';
    email.value = '';
    pass.value = '';
}