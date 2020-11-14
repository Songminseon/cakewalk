$('.main_event_container').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    prevArrow: false,
    nextArrow: false,
});
$('.hot_store').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    mobileFirst:true,
    responsive: [
        {
            breakpoint:1500,
            settings: {
                slidesToShow:5
            }
        },
        {
            breakpoint:1300,
            settings: {
                slidesToShow:4
            }
        },
        {
            breakpoint:1050,
            settings: {
                slidesToShow:3
            }
        },
        {
            breakpoint:720,
            settings: {
                slidesToShow:2
            }
        },
        
        {
            breakpoint:240,
            settings: {
                slidesToShow:1,
                slidesToScroll:1
            }
        }
    ]
});

$('.store1_slide').slick({
    dots: true,
});

const openLogin = document.getElementById("open_login");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector(".btn_exit");

const openModal = () =>{
    modal.classList.remove("hidden");
}
const closeModal = () => {
    modal.classList.add("hidden");
}

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
openLogin.addEventListener("click",openModal);

const toggleBtn = document.querySelector('.header_toggle');
const menu = document.querySelector('.header_menu ul');
const icons = document.querySelector('.header_right');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
