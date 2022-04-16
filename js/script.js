window.addEventListener('load', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.sandwich');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('sandwich_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('sandwich_active');
            menu.classList.toggle('menu_active');
        })
    })
})