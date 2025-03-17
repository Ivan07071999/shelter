const btn = document.querySelector('.menu__btn');
const menuItems = document.querySelectorAll('.lnk1');
const menuToggle = document.getElementById('menu__toggle');
const body = document.body;
  
function toggleBodyScroll() {

    if (menuToggle.checked) {
        body.style.cssText = `
        overflow: hidden;
        `
        } else {
            body.style.cssText = ''
        }
}
menuToggle.addEventListener('change', toggleBodyScroll);
menuItems.forEach(item => {
    item.addEventListener('click', () => {
    menuToggle.checked = false;
    toggleBodyScroll();

    });
});

