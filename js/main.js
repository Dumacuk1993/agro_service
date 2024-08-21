window.addEventListener('DOMContentLoaded', () => {
    $('.slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: false,
    });
    
    
    const catalogBtnEl = document.querySelector('.header_menu_btn');
    const catalogBtnArrowEl = document.querySelector('.header_menu_btn i');
    const catalogListEl = document.querySelector('.header_menu_list');
    let arrowDeg = 0;

    catalogBtnEl.addEventListener('click', () => {
        catalogListEl.classList.toggle('header_menu_list--active');

        if (arrowDeg === 0) {
            arrowDeg = 180 
        } else {
            arrowDeg = 0
        }

        catalogBtnArrowEl.style.rotate = `${arrowDeg}deg`; 
    })

    const ScrollButtons = document.querySelectorAll('.scroll_btn');
    const formEl = document.getElementById('form');

    ScrollButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()

            formEl.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    })
    

})
