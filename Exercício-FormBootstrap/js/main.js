$(document).ready(function () {
    $('#tell').mask('(00) 00000-0000');

    $('#form').validate({
        errorElement: 'small',
        errorClass: "is-invalid",
        validClass: "is-valid",
        success: function (label) {
            label.addClass("is-valid")
        },
        submitHandler: function (form) {
            alert("Dados enviados com sucesso.");
        },

        highlight: function (element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .removeClass(errorClass);
        },
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tell: {
                required: true,
                minlength: 14
            }
        },
        messages: {
            name: {
                required: "Este campo é obrigatório"
            },
            email: {
                required: "Este campo é obrigatório",
                email: "Insira um email valido"
            },
            tell: {
                required: "Este campo é obrigatório",
                minlength: "Insira um numero valido"
            }
        }
    });
});