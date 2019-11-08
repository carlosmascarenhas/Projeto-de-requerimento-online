$('.def').click(function () {
    Swal.mixin({
        inputPlaceholder: 'Escolha a opção',
        confirmButtonText: 'Enviar',
        confirmButtonColor: '#159952',
        allowOutsideClick: false,
        showCloseButton: true,
    }).queue([
        {
            title: 'Motivo de escolha',
            input: 'textarea',
            inputPlaceholder: 'Digite aqui',
            inputValidator: (value) => {
                if (!value) {
                    return 'Por favor descreva sua escolha para continuar'
                }
            },
        },
    ])
})

$('.ind').click(function () {
    Swal.mixin({
        inputPlaceholder: 'Escolha a opção',
        confirmButtonText: 'Enviar',
        confirmButtonColor: '#159952',
        allowOutsideClick: false,
        showCloseButton: true,
    }).queue([
        {
            title: 'Motivo de escolha',
            input: 'textarea',
            inputPlaceholder: 'Digite aqui',
            inputValidator: (value) => {
                if (!value) {
                    return 'Por favor descreva sua escolha para continuar'
                }
            },
        },
    ])
})