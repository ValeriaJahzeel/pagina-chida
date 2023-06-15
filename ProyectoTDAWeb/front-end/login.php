<?php
// Establece la conexión con la base de datos
$conexion = new mysqli('localhost', 'root', '', 'proyecto_web');
$conexion->set_charset('utf8mb4'); // Especifica la codificación de caracteres
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Obtiene los valores del formulario
$email = $_POST['email'];
$contrasena = $_POST['password'];

// Consulta preparada para verificar las credenciales
$consulta = "SELECT * FROM usuario WHERE correo = ? AND contraseña = ?";
$statement = $conexion->prepare($consulta);
$statement->bind_param("ss", $email, $contrasena);
$statement->execute();
$resultado = $statement->get_result();

if ($resultado->num_rows === 1) {
    // Inicio de sesión exitoso
    echo "Inicio de sesión exitoso. ¡Bienvenido!";
    // Almacena los datos en variables de sesión
    
    $_SESSION['email'] = $email;
    $_SESSION['loggedin'] = true;

    header("Location: index.html");
    exit();
    
} else {
    // Credenciales inválidas
    echo "Credenciales inválidas. Por favor, intenta nuevamente.";
}

// Cierra la conexión a la base de datos
$statement->close();
$conexion->close();
?>
