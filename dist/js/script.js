function testWebP(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {  
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

const headersFooter = document.querySelectorAll('.footer-header-block__header');
const spoiler = document.querySelectorAll('.spoiler-info-header__header');
const headersDropdown = document.querySelectorAll('.dropdown__header');
const toggleDropdown = document.querySelectorAll('.dropdown-toggle');


function Accordeon (arr) {
    arr.forEach((item) => {
        item.addEventListener('click', () => {   
            if (item.parentNode.nextElementSibling.classList.contains('_hidden')) {
                item.parentNode.nextElementSibling.classList.remove('_hidden');
                item.previousElementSibling.previousElementSibling.style.display = 'none';
            } else {
                item.parentNode.nextElementSibling.classList.add('_hidden');
                item.previousElementSibling.previousElementSibling.style.display = 'inline';
            }
        })
    })
}

function Dropdown (arr) {
    arr.forEach((item) => {
        item.addEventListener('click', () => {  
            console.log(item.children[1]);
            
            if (!item.children[1].classList.contains('_active')) {
                item.children[1].classList.add('_active');
                item.nextElementSibling.style.display = 'block';
            } 
            else {
                item.children[1].classList.remove('_active');
                item.nextElementSibling.style.display = 'none';
            }
        })
    })
}

Accordeon(headersFooter);
Accordeon(spoiler);
Dropdown(toggleDropdown);
