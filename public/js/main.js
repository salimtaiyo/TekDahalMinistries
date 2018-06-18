$(() => {
    $('.menu').on('click', () => {
        $('.menu__button').toggleClass('active');
        $('.menu__list').toggle( "slow" );
    })

    $('.fadein p:gt(0)').hide();
    setInterval(function()
    {$('.fadein > :first-child').fadeOut()
    .next('p').fadeIn().end().appendTo('.fadein');}, 3000);
});

// on scroll 
document.querySelector('.header__title--btn')
.addEventListener('click', () =>
 window.scroll({ top: 625, left: 0, behavior: 'smooth' }))