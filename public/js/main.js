$(() => {
    $('.menu').on('click', () => {
        $('.menu__button').toggleClass('active');
        $('.menu__list').toggle( "slow" );
    })
})