

function trocaSlide() {

    let posicao = Number(sessionStorage.posicao);
    sessionStorage.posicaoAtual = posicao;
    let tamanho = Number(sessionStorage.tamanho);

    $('.img-slider').hide();

    $($('.img-slider')[posicao]).show();


    if (posicao >= (tamanho - 1)) {

        sessionStorage.posicao =
                0;

    } else {

        posicao++;

        sessionStorage.posicao =
                posicao;

    }

}



function rodaSlide() {

    trocaSlide();

    slide = setInterval(trocaSlide,
            5000);

}



$(document).ready(function () {

    sessionStorage.tamanho =
            $('.img-slider').length;

    sessionStorage.posicao =
            0;

    $('.img-slider').each(function () {

        $(this).hide();

    });



    $('.slide-seletor').each(function (index, val)
    {
        $(this).data('p', index);
    });



    $('.slide-seletor').click(function () {

        sessionStorage.posicao =
                $(this).data('p');

        clearInterval(slide);

        rodaSlide();

    });



    $('#proximo').click(function () {

        clearInterval(slide);

        rodaSlide();

    });



    $('#anterior').on('click',function (ev) {
        let posicao = Number(sessionStorage.posicaoAtual);
        let prox = Number(sessionStorage.posicao);
        let tamanho = Number(sessionStorage.tamanho);
        
        if (posicao > 0 ){
            posicao = posicao - 1;
        }
        
        if (posicao == 0 && prox == 1) {
            posicao = tamanho - 1;
        }
        
        sessionStorage.posicao = posicao;

        clearInterval(slide);

        rodaSlide();

    });



    rodaSlide();



    $('#enviar').click(function (ev) {

        ev.preventDefault();



        var name =
                $('#name').val();

        var email =
                $('#email').val();

        var phone =
                $('#phone').val();

        var notice =
                $('#notice').val();



        var data = {

            'name':
            name,

            'email':
            email,

            'phone':
            phone,

            'notice':
            notice,

        };



        $.post(
                'http://api.vtexcrm.com.br/corebiz/dataentities/TE/documents',
                data,
                function () {

                    alert("Dados enviados com SUCESSO!");

                }

        );



    });

});

