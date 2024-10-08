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

    // Фильтрация каталога
    const catalogCardEls = document.querySelectorAll('.category_card');
    const filterCounterEls = document.querySelectorAll('.filter_count');
    const filterEls = document.querySelectorAll('input[type="checkbox"]');
    const manufacturersCounter = {}

    catalogCardEls.forEach(card => { 
        if (!manufacturersCounter[card.getAttribute('data-manufacturer')]) {
            manufacturersCounter[card.getAttribute('data-manufacturer')] = 1;
        } else {
            manufacturersCounter[card.getAttribute('data-manufacturer')]++;
        }
    })

    filterCounterEls.forEach(counter => {
        counter.textContent = manufacturersCounter[counter.getAttribute('data-manufacturer')] || 0
    })

    filterEls.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    function applyFilters() {     
        const selectedManufacturers = Array.from(document.querySelectorAll('.brand_filter input[type="checkbox"]:checked'))
            .filter(checkbox => checkbox.value !== '')
            .map(checkbox => checkbox.value);

        catalogCardEls.forEach(card => {
            const cardManufacturer = card.getAttribute('data-manufacturer');
            const matchesManufacturer = selectedManufacturers.length === 0 || selectedManufacturers.includes(cardManufacturer);

            if (matchesManufacturer) {
                card.classList.add('visible');
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
                card.classList.remove('visible');
            }
        });
    }

})
