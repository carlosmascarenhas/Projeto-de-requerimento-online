$('.btn-deferir').click(function () {
    Swal.mixin({
        inputPlaceholder: 'Escolha a opção',
        confirmButtonText: 'Próximo',
        confirmButtonColor: '#159952',
        allowOutsideClick: false,
        showCloseButton: true,
      }).queue([
        {
            title: 'Deferir requerimento',
            input: 'textarea',
            inputPlaceholder: 'Digite aqui',
            inputValidator: (value) => {
              if (!value) {
                return 'Por favor detalhe o requerimento!'
              }
            },
          },
        ])
        .then((result) => {
          if (result.value) {
            const requerimento = result.value;
            alert(requerimento);
            const enviar = { requerimento };
            alert(enviar);
            $.post("/alunos/enviar", enviar, function (res) {
              Swal.fire(
                'Sucesso!',
                'Requerimento Deferido!',
                'success',
              )
            })
          }
          else {
            Swal.fire(
              'Cancelado',
              'Seu requerimento foi cancelado :)',
              'error'
            )
          }
        })
    })

    $('.btn-indeferir').click(function () {
      Swal.mixin({
          inputPlaceholder: 'Escolha a opção',
          confirmButtonText: 'Próximo',
          confirmButtonColor: '#159952',
          allowOutsideClick: false,
          showCloseButton: true,
        }).queue([
          {
              title: 'Indeferir Requerimento',
              input: 'textarea',
              inputPlaceholder: 'Digite aqui',
              inputValidator: (value) => {
                if (!value) {
                  return 'Por favor detalhe o requerimento!'
                }
              },
            },
          ])
          .then((result) => {
            if (result.value) {
              const requerimento = result.value;
              alert(requerimento);
              const enviar = { requerimento };
              alert(enviar);
              $.post("/alunos/enviar", enviar, function (res) {
                Swal.fire(
                  'Sucesso!',
                  'Requerimento Indeferido!',
                  'success',
                )
              })
            }
            else {
              Swal.fire(
                'Cancelado',
                'Seu requerimento foi cancelado :)',
                'error'
              )
            }
          })
      })