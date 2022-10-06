window.addEventListener("load", function () {

    // CAPTURA DE FORMULARIO Y CAMPOS   

    let form = document.querySelector('.form');
    let formImporte = document.querySelector('#importe');
    let formConcepto = document.querySelector('#concepto');
    let erroresView = document.querySelector('.errores');

    formImporte.focus();  // HACE FOCO EN ESTE CAMPO

    form.addEventListener("submit", function (e) {

        let error = 0;
        let errores = [];

        // IMPORTE

        if (formImporte.value == "") {
            error++;
            errores.push("Ingresa un importe.");
        } else if (isNaN(formImporte.value)) {
            error++;
            errores.push("El importe debe ser numerico.");
        }

        // CONCEPTO

        if (formConcepto.value == "") {
            error++;
            errores.push("Ingresa un concepto.");
        } else if (formConcepto.value.length > 15) {
            error++;
            errores.push("Concepto 15 caracteres maximo.");
        }

        if (error > 0) {
            erroresView.innerHTML = "";
            e.preventDefault();
            for (let i = 0; i < errores.length; i++) {
                erroresView.innerHTML += errores[i] + "<br>";
            }
        }
    });
})
