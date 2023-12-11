window.addEventListener('DOMContentLoaded', () => {
    const btnOpen = document.querySelectorAll("[data-modal=consultation]");
    const overlay = document.getElementById("overlay");
    const modalMain = document.getElementById("consultation");
    const modalClose = document.getElementById("modalClose");
    const modalOrder = document.getElementById("order");
    const modalThanks = document.getElementById("thanks");
    const btnBuy = document.getElementsByClassName("button_mini");
    const namePulse = document.getElementsByClassName("catalog-item__subtitle");
    const namePulseInModal = document.getElementsByClassName("modal__text");

    for (let i = 0; i < btnOpen.length; i++) {
        btnOpen[i].addEventListener('click', () => {
            overlay.style.display = "block";
            modalMain.style.display = "block";
            modalOrder.style.display = "none";
        })
    }

    modalClose.addEventListener('click', () => {
        overlay.style.display = "none";
        modalMain.style.display = "none";
        modalOrder.style.display = "none";
        modalThanks.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (overlay.contains(event.target) && (!modalMain.contains(event.target) &&
            !modalOrder.contains(event.target) && !modalThanks.contains(event.target))) {
            overlay.style.display = "none";
            modalMain.style.display = "none";
        }
    });

    for (let i = 0; i < btnBuy.length; i++){
        btnBuy.item(i).addEventListener('click', (event) => {
            overlay.style.display = "block";
            modalOrder.style.display = "block";
            namePulseInModal.item(1).innerHTML = `${namePulse.item(i).innerHTML}`;
        })
    }
})
