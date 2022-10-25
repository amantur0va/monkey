    const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
},

});

    const btn = document.querySelector(".about-btn button")
    btn.addEventListener("click", () => {
        document.querySelector(".about-modal").style.display = "block"
    })

    const close = document.querySelector(".about-modal-bg-square-close")
    close.addEventListener("click", () =>{
        document.querySelector(".about-modal").style.display ="none"
    })




