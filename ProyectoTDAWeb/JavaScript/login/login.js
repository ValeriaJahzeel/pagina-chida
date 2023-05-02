function submitForm(event) {
    event.preventDefault();

    const user = document.getElementById('user-name');
    const usuario = user.value;
    console.log(usuario);

    window.location.href = "./index.html?id" + usuario;

    user.value = '';
}