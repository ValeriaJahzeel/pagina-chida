function submitForm(event) {
    event.preventDefault();
    const usuario = document.querySelector('input[type="text"]').value;
    console.log(usuario);
    window.location.href = "./index.html";
}