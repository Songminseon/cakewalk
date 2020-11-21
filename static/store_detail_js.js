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

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);
    const year = date.getFullYear();
    const month = date.getMonth();
    const CalMonth = document.querySelector(".date h1");
    const monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(),date.getMonth()+1, 0).getDate();
    const firstDayIndex = date.getDay();
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(), 0).getDate();
    const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1, 0).getDay();
    const nextDays = 7 - lastDayIndex -1;
    const CalFullDate = String(year)+String(month) ;
    const RealFullDate = String(new Date().getFullYear()) + String(new Date().getMonth());
    const IntCalFullDate = parseInt(CalFullDate);
    const IntRealFullDate = parseInt(RealFullDate);
    CalMonth.innerText = `${year}.${month < 9 ? `0${month+1}` : month+1}`;
    let days = "";

    for(let x= firstDayIndex; x>0; x--){
        days += `<div class ="prev-date">${prevLastDay - x + 1}</div>`;
    }
    
    for(let i = 1; i<=lastDay; i++){
        if(i=== new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div>
                    <div class="days_container">${i}</div>
                    <span class="today_marker">오늘</span>
                </div>`;
        }else{
            days += `<div><div class="days_container">${i}</div></div>`;
        }
    }


    
    for(let j =1; j<= nextDays; j++){
        days += `<div class ="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

    const select = document.getElementsByClassName("days_container");



    const checkDate = new Date().getDate();
    if(new Date().getDate() && date.getMonth() === new Date().getMonth()){
        for (let l = 0 ; l < checkDate-1; l++) {
            select[l].classList.add("grey_date");
        }
    }
    else if(IntCalFullDate < IntRealFullDate){
        for (let l = 0 ; l<=lastDay; l++) {
            select[l].classList.add("grey_date");
        }
    }

    for(let a=0; a<=lastDay; a++){

    }

    function dateHandler(event){
        let getDate = event.target;
        while (!getDate.classList.contains("days_container")){
            getDate= getDate.parentNode;
            if(getDate.nodeName == "BODY"){
                getDate = null;
                return;            }
        }
        if(document.getElementsByClassName("select")[0]){
            document.getElementsByClassName("select")[0].classList.remove("select");
        }
        getDate.classList.toggle("select");
        const today = document.getElementById("pickUpDay");
        today.value=`${CalMonth.innerText}.${getDate.innerText}`;
    }
    if(IntCalFullDate >= IntRealFullDate){
        monthDays.addEventListener("click",dateHandler);
    }
}


document.querySelector(".prev").addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});
document.querySelector(".next").addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});

renderCalendar();

const time_table = document.querySelector(".choice_time");

function clickHandler(event){
    let getTime = event.target;
    if (document.getElementsByClassName("selected")[0]){
        document.getElementsByClassName("selected")[0].classList.remove("selected");
    }
    getTime.classList.toggle("selected");
    const pickUpTime = document.getElementById("pickUpTime");
    pickUpTime.value = getTime.innerText;
}
time_table.addEventListener("click", clickHandler);

$('.review_box').slick({
    dots: false
});