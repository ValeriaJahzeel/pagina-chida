function inBD(usuario, contra){
    console.log(usuario);
    console.log(contra);
    let accept = false;
    BD.forEach((user) =>{
        if((usuario === user.user || usuario === user.email) && (contra === user.password)){
            accept = true;
        }
    });
    return accept;
}


function submitForm(event) {
    event.preventDefault();

    const user = document.getElementById('user-name');
    const usuario = user.value;
    //console.log(usuario);

    const pass = document.getElementById('password');
    const contra = pass.value;
    //console.log(contra);

    if(inBD(usuario, contra)){
        window.location.href = "./user-login.html?id" + usuario;
    }
    else{
        //Mandar mensaje de error
        const error = document.getElementById('error-message');
        error.classList.remove('hide');
    }
    
    user.value = '';
    pass.value = '';
}