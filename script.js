// sidebar
const menu = document.querySelector('#menu');
menu.addEventListener('click', () => {
    let sidebar = document.querySelector('#sidebar');
    let icon = menu.querySelector('i');

    if (icon.classList.contains('bx-menu')) {
        sidebar.classList.add('active');
        menu.style.left = '-0.5rem';
        menu.style.transform = 'translateX(20rem)';
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    }
    else{
        menu.style.left = '1.5rem';
        sidebar.classList.remove('active');
        menu.style.transform = 'translateX(0)';
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});


//Turn pages when click on next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId); // Corrected
        console.log("Tejay");

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    }
});

// If i want the perticual page by clicking button
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    })
}

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//Opening animation
const coverRight = document.querySelector('.cover.cover-right');
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

// Open first page for starting
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn'); // Corrected 'turen' to 'turn'
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100);
});