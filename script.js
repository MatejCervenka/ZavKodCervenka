let shown = false;
window.matchMedia("(max-width: 800px)").addEventListener("change", function (e) {
    shown = false;
    burgerClick();
});

function burgerClick() {
    let elements = document.querySelectorAll('.menu');
    if (shown) {
        for (let element of elements) {
            element.style.display = 'none';
        }
        shown = false;
    } else {
        for (let element of elements) {
            element.style.display = 'flex';
        }
        shown = true;
    }

}