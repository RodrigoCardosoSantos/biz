
 
function trocaSlide() {

posicao = Number(sessionStorage.posicao);

tamanho = Number(sessionStorage.tamanho);

$('.img-slider').hide();

let fotos =
$('.img-slider');

$(fotos[posicao]).show();


if (posicao >= (tamanho -1 )) {

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
3000);

}



$(document).ready(function () {

sessionStorage.tamanho =
$('.img-slider').length;

sessionStorage.posicao =
0;

$('.img-slider').each(function () {

$(this).hide();

});



$('.slide-seletor').each(function (index,val)
 {

$(this).data('p',index);

});



$('.slide-seletor').click(function () {

sessionStorage.posicao =
$(this).data('p');

clearInterval(slide);

rodaSlide();

});



$('#proximo').click(function () {

sessionStorage.posicao =
Number(sessionStorage.posicao) +
1;

clearInterval(slide);

rodaSlide();

});



$('#anterior').click(function () {

sessionStorage.posicao =
Number(sessionStorage.posicao) -
1;

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

'/',

data,

function () {

alert("dados enviados");

}

);



});

});


