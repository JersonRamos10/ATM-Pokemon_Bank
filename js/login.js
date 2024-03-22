function iniciarSesion() {
    var cuentaBancaria = document.getElementById('cuentaBancaria').value;
    var PIN = document.getElementById('PIN').value;
    
    if(cuentaBancaria === '0987654321' && PIN === '1234') {
        swal("Éxito", "Cuenta Bancaria y PIN correctos", "success")
            .then((value) => {
                window.location.href = 'dashboard.html';
            });
    } else {
        swal("Error", "Cuenta Bancaria o PIN incorrectos", "error").then((value) => {
            // Limpia los campos de entrada después de mostrar la alerta
            document.getElementById('cuentaBancaria').value = '';
            document.getElementById('PIN').value = '';
        });
    }
}
