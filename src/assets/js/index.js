import '../../index.html';
import '../scss/style.scss';
import './modules/slider';
import './modules/carousel'
import './modules/mobileMenu';
import megamenu from './modules/megemenu';
import cart from './modules/cart'
import Alpine from 'alpinejs';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import * as bootstrap from 'bootstrap';

window.Alpine = Alpine;
Alpine.data('megamenu', megamenu);
Alpine.data('cart', cart);

Alpine.start();

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });

    const dropdown = document.querySelector('.person-dropdown');
    dropdown.addEventListener('mouseenter', function () {

        const dropdownMenu = document.querySelector('.person-dropdown-menu');
        if (dropdownMenu) {
            clearTimeout(dropdownMenu.timeoutId);
            dropdownMenu.classList.add('show');
        }

        dropdown.addEventListener('mouseleave', function () {
            const dropdownMenu = document.querySelector('.person-dropdown-menu');
            if (dropdownMenu) {
                clearTimeout(dropdownMenu.timeoutId);

                dropdownMenu.timeoutId = setTimeout(function () {
                    dropdownMenu.classList.remove('show');
                }, 200);
            }
        });
    });

    //basket
    const dropdownBasket = document.querySelector('.basket-dropdown');

    dropdownBasket.addEventListener('mouseenter', function () {
        const dropdownMenu = document.querySelector('.basket-dropdown-menu');

        if (dropdownMenu) {
            clearTimeout(dropdownMenu.timeoutId);
            dropdownMenu.classList.add('show');
        }

        dropdownBasket.addEventListener('mouseleave', function () {
            const dropdownMenu = document.querySelector('.basket-dropdown-menu');

            if (dropdownMenu) {
                clearTimeout(dropdownMenu.timeoutId);

                dropdownMenu.timeoutId = setTimeout(function () {
                    dropdownMenu.classList.remove('show');
                }, 200);
            }
        });
    });

});
