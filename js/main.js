window.addEventListener('DOMContentLoaded', () => {
    $('.slider_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        dots: true
    });
    
    
    const catalogBtnEl = document.querySelector('.header_menu_btn');
    const catalogBtnArrowEl = document.querySelector('.header_menu_btn i');
    const catalogListEl = document.querySelector('.header_menu_list');
    let arrowDeg = 0;

    const headerMenuBurgerEl = document.querySelector('.fa-bars');
    const headerListEl = document.querySelector('.header-top_menu');
    const headerMenuCloseEl = document.querySelector('.fa-xmark');

    catalogBtnEl.addEventListener('click', () => {

        headerListEl.classList.remove('header-top_menu--active');
        headerMenuCloseEl.style.display = 'none';
        headerMenuBurgerEl.style.display = 'block';
        catalogListEl.classList.toggle('header_menu_list--active');

        if (arrowDeg === 0) {
            arrowDeg = 180 
        } else {
            arrowDeg = 0
        }

        catalogBtnArrowEl.style.rotate = `${arrowDeg}deg`; 
    })

    headerMenuBurgerEl.addEventListener("click", () => {
        headerListEl.classList.add('header-top_menu--active');
        if (catalogListEl.classList.contains('header_menu_list--active') ) {
            catalogListEl.classList.remove('header_menu_list--active')      
        }  
        headerMenuCloseEl.style.display = 'block';
        headerMenuBurgerEl.style.display = 'none';
    }) 

    headerMenuCloseEl.addEventListener("click", () => {
        headerListEl.classList.remove('header-top_menu--active');  
        headerMenuCloseEl.style.display = 'none';
        headerMenuBurgerEl.style.display = 'block';
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



    const buttons = document.querySelectorAll('.tabs_header_item');
    const contents = document.querySelectorAll('.tabs_content_item');

    function showTab(tabId) {
        buttons.forEach(btn => btn.classList.remove('tabs_header_item--active'));
        contents.forEach(content => (content.style.display = 'none'));
        document.querySelector(`.tabs_header_item[data-tab="${tabId}"]`).classList.add('tabs_header_item--active');
        document.getElementById(tabId).style.display = 'block';
    }

    showTab('tab-2');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
        const tabId = button.getAttribute('data-tab');
        showTab(tabId);
        });
    });
    
    const productThumbs = document.querySelectorAll('.product_img-line--img'),
          productCurrent = document.querySelector('.product_img-main--img img');

    productThumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const thumbImg = this.querySelector('img');
            productCurrent.setAttribute('src', thumbImg.getAttribute('src'));   
        })
    })

    const faqEls = document.querySelectorAll('.product_right-advantage-toggle-title');

    faqEls.forEach(faq => {
        faq.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const iconElement = this.querySelector('i');

            if (answer.classList.contains('open')) {
                answer.classList.remove('open');
                answer.style.maxHeight = null;
                answer.style.padding = '0px 16px';
                iconElement.style.transform = 'rotate(-90deg)';
            } else {
                answer.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 32 + 'px';
                answer.style.padding = '16px';
                iconElement.style.transform = 'rotate(0deg)';
            }
        });
    });
})
