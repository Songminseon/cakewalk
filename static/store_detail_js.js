:root {
    /* Cake Walk */
    --color-orange:#ea5743;
    --color-grey: #a3a3a3;
    --color-light-orange:#fce6e3;
 
     /* Color */
     --color-transparent: #00000000;
     --color-white: #ffffff;
     --color-light-white: #eeeeee;
     --color-medium-white: #F1F1F1;
     --color-dark-white: #bdbdbd;
     --color-pink: #fe918d;
     --color-dark-pink: #ff6863;
     --color-dark-grey: #4d4d4d;
     --color-grey: #616161;
     --color-light-grey: #7c7979;
     --color-blue: #73aace;
     --color-yellow: #fff7d1;
     --color-black: #000000;
 
     /* Font size */
   
     --font-large: 48px;
     --font-medium: 28px;
     --font-regular: 18px;
     --font-small: 16px;
     --font-micro: 10px;
   
     /* Font weight */
   
     --weight-bold: 700;
     --weight-semi-bold: 600;
     --weight-regular: 400;
 
     /* Size */
     --size-border-radius : 4px;
 
     /* Animation */
     --animation-duration: 300ms;
 }
 
 *:focus 
 { 
     margin:0;
     padding:0;
     box-sizing: border-box;
     outline: none;
 }
 html{
     font-size:62.5%;
 }
 body{
     font-family: 'Noto Sans KR', sans-serif;
     margin:0;
 }
 ul{
     padding-left: 0;
 }
 li{
     list-style: none;
     color:var(--color-black);
 }
 a{
     text-decoration: none;
     color:var(--color-black);
 }
 h1,h3,h4,h5{
     font-weight: normal;
     margin:0;
 }
 button{
     cursor:pointer;
 }
 .modal{
     position:fixed;
     display:flex;
     justify-content: center;
     align-items: center;
     top:-150px;
     left:0;
     width: 100%;
     height: 100%;
     z-index: 10;
 }
 .hidden{
     display:none;
 }
 .modal_overlay{
     background-color: rgba(0,0,0,0.6);
     width:100%;
     height:200%;
     position: absolute;
     z-index: 10;
 }
 
 .modal_content{
     background-color: var(--color-white);
     position: relative;
     text-align:center;
     width:440px;
     height:630px;
     z-index:20;
     top:150px;
 }
 form{
     display:flex;
     flex-direction: column;
 }
 .signInup .logo_design{
     display:flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
 }
 .signInup .btn_exit{
     align-self:flex-end;
     border:none;
     background-color: var(--color-white);
     color:var(--color-orange);
     margin-right: 10px;
     font-size: var(--font-regular);
     cursor : pointer;
 }
 .signInup .logo_icon{
     width:160px;
     height:70px;
     padding: 50px 0 20px 0;
 }
 .borderline{
     width:350px;
     height:3px;
     border-radius: 40px;
     background-color:var(--color-orange);
     margin-bottom: 20px;
 }
 .signIn_input .signIn_layout{
     display:flex;
     flex-direction: column;
 }
 .signIn_input .signIn_layout li{
     padding-bottom:10px;
 }
 .signIn_input input{
     width:230px;
     height:30px;
 }
 .signIn_input .btn_login{
     padding: 10px 90px;
     border-radius: 30px;
     background-color: var(--color-orange);
     border:none;
     color:var(--color-white);
     font-size:var(--font-regular);
     font-weight: bolder;
     margin-top: 20px;
 }
 .signIn_input .signUp_layout{
     display:flex;
     justify-content: center;
     font-size : 9px;
 }
 .signIn_input h4{
     color:var(--color-dark-white);
     padding-top:20px;
     font-size : 9px;
 
 }
 input::placeholder{
     color : A3A3A3;
     font-size : 9px;
 }
 .social_login img{
     width:32px;
     height:32px;
     padding:12px;
 }
 /* 헤더 영역 */
 
 header{
     display:flex;
     justify-content: space-around;
     padding-top: 10px;
     font-size: var(--font-regular);
     z-index:10;
 }
 header .header_logo img{
     width:132px;
     height:42px;
     margin-top: 8px;
 }
 .header_menu{
     padding-right: 300px;
 }
 .header_menu ul{
     display:flex;
 }
 .header_menu li{
     color:var(--color-black);
     padding-right: 80px;
 }
 
 header .header_menu a:hover{
     color:var(--color-orange);
 }
 .header_right ul{
     display:flex;
 }
 .header_right li{
     padding-left: 30px;
     cursor: pointer;
 
 }
 .header_right li i{
     padding:5px;
 }
 .header_toggle{
     display:none;
     position: absolute;
     color:white;
     font-size:24px;
     top:28px;
     right:32px;
 }
 
 .store_big_box{
     padding:20px 150px 0;
     background-color:var(--color-light-white);
 }
 .store_center_box{
     display:flex;
     height:500px;
 }
 .cake_reservation1{
     position: relative;
 }
 .cake_reservation1 .cake_picture_cover{
     position:absolute;
     background-color: rgba(0, 0, 0, 0.5);
     transform:translateY(430px);
     width:100%;
     display:flex;
     align-items: center;
     justify-content: space-around;
     height:70px;
 }
 .cake_picture_cover_font{
     color : var(--color-orange);
     font : bolder;
     font-size : 25px;
     margin:0;
 }
 .cake_picture_cover_ul{
     display:flex;
     transform:translateX(20%);
 }
 .cake_picture_cover li{
     padding:15px 10px;
 }
 .cake_picture_cover li a{
     transform:translateX(50%);
 }
 .cake_picture_cover li img{
     width : 40px;
     height : 40px;
 }
 .cake_picture{
     width:500px;
     height:500px;
 }
 
 .calendar_container{
     width:100%;
     height:100vh;
     color:black;
 }
 
 .calendar{
     width:40rem;
     height:52rem;
     background-color:white;
 }
 
 .month{
     width:88%;
     height:6rem;
     background-color: orangered;
     display:flex;
     justify-content: space-between;
     align-items: center;
     padding:0 2rem;
     text-align: center;
     color:white;
 }
 
 .month i{
     font-size:2.5rem;
     cursor: pointer;
 }
 
 .weekdays{
     width:100%;
     height:5rem;
     padding: 0 0.4rem;
     display:flex;
     align-items: center;
 }
 .weekdays div{
     font-size:1.5rem;
     font-weight: bolder;
     letter-spacing: 0.1rem;
     width: calc(39.2rem / 7);
     display:flex;
     justify-content: center;
     align-items: center;
 }
 
 .days{
     width:100%;
     display:flex;
     flex-wrap:wrap;
     padding:0.2rem;
 }
 
 .days div{
     font-size:1.4rem;
     margin:0.3rem;
     width:calc(35.2rem /7);
     height:5rem;
     display:flex;
     justify-content: center;
     align-items: center;
 }
 .days .days_container{
     width:80%;
     height:80%;
 }
 .days .days_container:hover:not(.select){
     background-color: white;
     border: 0.2rem solid orangered;
     border-radius: 50%;
     cursor:pointer;
 }
 
 .prev-date,
 .next-date{
     opacity:0.5;
 }
 
 .select{
     background-color: orangered;
     border-radius: 60%;
     color:white;
     transition: background 0.4s;
 }
 .today_marker{
     flex:none;
     position: absolute;
     margin-top:4rem;
     font-size: 1rem;
 }
 .grey_date{
     opacity: 0.5;
     pointer-events:none;
 }
 .able-unable,.able,.unable{
     display:flex;
     justify-content: flex-end;
     padding-top:5px;
 }
 .unable{
     padding-right:20px;
 }
 .redpoint{
     width:16px;
     height:16px;
     background-color: var(--color-orange);
     border-radius: 50%;
 }
 .greypoint{
     width:16px;
     height:16px;
     background-color: var(--color-light-grey);
     border-radius: 50%;
     margin-left:10px;
 }
 .pickUpTime{
     padding:40px 40px 0 30px;
     display:flex;
     flex-direction: column;
     background-color:var(--color-white);
 }
 .pickUpTime .choice_button{
     display:flex;
     justify-content: space-between;
     padding:3px 10px;
     margin-bottom:10px;
     background-color:transparent;
     border:1px solid orangered;
     border-radius:5px;
     color: orangered;
     font-weight: bolder;
     padding:10px;
 }
 .pickUpTime .choice_button i{
     color:gray;
     align-self: center;
 }
 .pickUpTime .choice_time{
     display:flex;
     flex-wrap: wrap;
     justify-content: start;
     border:1px solid orangered;
     border-radius: 5px;
     margin-bottom:10px;
     /* visibility: hidden; */
     padding:10px 0 10px 10px;
 }
 .colorBlack{
     color:var(--color-black);
 }
 .pickUpTime .visible{
     visibility: visible;
 }
 .choice_time div{
     padding:8px;
     cursor: pointer;
     font-size:var(--font-small);
     opacity: 0.8;
 }
 
 .choice_time .selected{
     color:orangered;
 }
 .pickUpTime .cart,.simulation{
     border:1px solid orangered;
     margin:15px 0 10px 0;
     padding: 15px 20px ; 
     background-color:transparent;
     color: orangered;
     font-size:var(--font-regular);
 }
 .pickUpTime a{
     color: orangered;
 }
 form {
     display:flex;
 }
 #pickUpDay, #pickUpTime{
     display:none;
 }
 .buy_area_box{
     width : auto;
     padding : 0 150px;
     margin : 0;
     position : relative;
     background-color:var(--color-light-white);
 }
 
 .buy_area{
     padding : 20px 40px;
     height : 80px;
     background-color: var(--color-light-orange);
 }
 .buy_area ul{
     display:flex;
     align-items:center;
     justify-content: space-between;
 }
 .buy_area ul div{
     display:flex;
     align-items: center;
 }
 .buy_area li i{
     font-size:var(--font-medium);
     color:var(--color-orange);
 }
 .store_cake_font{
     color : var(--color-orange);
     font : bolder;
     font-size : 22px;
 }
 .store_cake_name{
     font-size : var(--font-regular);
 }
 .store_cake_price{
     font-size : var(--font-medium);
     padding:0 40px;
 }
 .buy_button{
     background-color: var(--color-orange);
     border: 1px solid var(--color-orange);
     border-radius: 3px;
     padding: 15px 85px;
     color : var(--color-white);
     font-size : 18px;
 }
 
 .product_info{
     background-color : var(--color-light-white);
     padding : 0px 150px;
     position : relative;
 }
 .product_info .product_container{
     background-color:var(--color-white);
 }
 .product_info .more_info{
     display:flex;
     justify-content: space-around;
 }
 .product_info .more_info img{
     height:230px; width:230px;
 }
 .product_info .product_info_title{
     padding:40px;
     color:var(--color-orange);
     font-size:var(--font-regular);
 }
 
 
 
 /* .product_info .slick-dots{
     position : absolute;
     right :100px;
     bottom: 280px;
     z-index : 10;
 }
 .product_info .slick-dots li{
 list-style: none;
 width : 10px;
 height : 10px;
 background-color: var(--color-grey) ;
 border-radius : 50%;
 display : inline-block;
 margin : 10px; 
 }
 .product_info .slick-dots li button{
     display : none;
 }
 
 .product_info .slick-dots li.slick-active {
     background-color:var(--color-orange); 
 } */
 .info_wrap{
     padding:50px;
     font-size:var(--font-regular);
 }
 .sproduct_review{
     background-color: var(--color-light-white);
     padding:0 150px;
 }
 .product_review_container{
     background-color: var(--color-white);
     padding:40px 40px 70px 40px;
 }
 .review_layout{
     display:flex;
     justify-content: space-between;
     align-items: flex-end;
 }
 .product_review_container h1{
     color: var(--color-orange);
     font-size:var(--font-regular);
     padding-bottom: 5px;
 }
 .review_layout ul{
     display:flex;
     align-items: flex-end;
     transform:translateY(30%)
 
 }
 .review_layout ul li{
     font-size:var(--font-regular);
     padding:0 5px 10px 5px;
 }
 .review_layout ul li i{
     color:var(--color-orange);
 }
 .review_layout ul li .star5{
     width:50%;
     color:var(--color-grey);
 }
 .review_star .star-rating {
     width:152px;
     transform:translateY(-50%);
 }
 .review_star .star-rating,.star-rating span {
     display:inline-block; 
     height:27px; 
     overflow:hidden;
     background:url(images/detail_page/star.png) no-repeat;
     }
 .review_star .star-rating span{
     background-position:left bottom; line-height:0;
     vertical-align:top; 
 }
 
 
 .review_layout ul li h1{
     font-size: var(--font-medium);
     padding: 0 10px;
     transform:translateY(10%)
 }
 
 .sproduct_review .review_box img {
     width: 150px;
     height : 150px;
     padding:40px 0;
 } 
 .product_info_bottom_line{
     color : var(--color-dark-pink);
     border : solid;
     border-width: 1.3px ;
 }
 
 .sproduct_review .review_box  button{
     position: absolute; z-index: 5; top:50%; transform: translateY(-50%);
     width:70px; height:70px; border-radius: 100%; background:rgba(0,0,0,0);
     border:none;
 }
 .review_box button:before {color:#fff; font-size:50px; font-family:'xeicon'}
 .review_box button.slick-prev {left:0px; font-size:0; color:transparent; border:none; }
 .review_box button.slick-prev:before {content:"\e93c"; }
 .review_box button.slick-next {right:10px; font-size:0; color:transparent; border:none;}
 .review_box button.slick-next:before {content:"\e93f"; }
 
 .product_info_bottom_line_grey{
     border : solid var(--color-dark-white) 1.2px;
     z-index: 100;
 }
 .grey_line{
     width:100%;
     height:3px;
     background-color: var(--color-dark-white);
 }
 .wrap-star_review .star-rating{
     width:152px;
     transform:translateY(50%);
 }
 
 .wrap-star_review .star-rating,.star-rating span {
     display:inline-block; 
     height:27px; 
     overflow:hidden;
     background:url(images/detail_page/star.png)no-repeat;
     }
 .wrap-star_review .star-rating span{
     background-position:left bottom; line-height:0;
     vertical-align:top; 
 }
 .customer_review_write{
     padding-top:10px;    display:flex;
 }
 .customer_review_write i{
     font-size:var(--font-medium);
     padding:10px 0
 }
 .customer_review .customer_write_content{
     transform:translateY(-50%);
 }
 .store_description{
     background-color:var(--color-light-white) ;
     padding:10px 150px 100px;
     display:flex;
 }
 .store_center_box_navi{
     display: flex;
     flex-direction: column;
     background-color : var(--color-white);
     width : 50%;
     height : 400px;
     padding:60px 30px;
 }
 .store_center_box_navi .store_center_box_title{
     display:flex;
     justify-content: space-between;
 }
 .store_center_box_navi .store_center_box_title h1{
     font-size:var(--font-medium);
     color:var(--color-orange);
     font-weight:200;
 }
 .navi_button{
     background-color: var(--color-white); 
     border: 1px solid var(--color-orange);
     border-radius: 20px;
     padding: 0 20px;
     height:30px;
     transform:translateY(30%);
 }
 .store_line{
     width:100%;
     height:1px;
     background-color: var(--color-orange);
     margin-top:10px;
 }
 .navi_info_font{
     color : var(--color-dark-grey);
     font : lighter;
     font-size : var(--font-small);
     padding: 0 0 0 30px;
 }
 .navi_info_font li{
     padding:15px 0;
 }
 .map .navi_map{
     width : 700px;
     height : 520px;
 }
 .more_review{
     font-size:var(--font-regular);
     float:right;
     padding:20px;
 }
 
 footer{
     background-color: var(--color-light-orange) ;
     font-size: var(--font-small);
     padding-bottom: 20px;
 }
 footer .footer_line{
     margin:0 100px;
 }
 .footer_description{
     display: flex;
     justify-content: space-between;
     padding-top: 30px;
 }
 .footer_description ul {
     display: flex;
     margin: 0;
 } 
 .footer_description .footer_story li{
     padding-right:50px;
 }
 .footer_description .footer_icon li{
     padding-right:30px;
     font-size: var(--font-medium);
 }
 footer .footer_company ul{
     display:flex;
 }
 footer .footer_company ul li{
     padding-right:25px;
 }
 footer .footer_address ul{
     display:flex;
 }
 footer .footer_address ul li{
     padding-right:30px;
 }
 footer .footer_sentence li{
     padding-bottom:10px;
 }
 @media screen and (max-width:1120px){
     header {
         flex-direction: column;
         align-items: center;
         background-color: var(--color-orange);
     }
     .header_logo{
         margin-right:140px;
     }
     .header_menu ul {
         display:none;
         flex-direction: column;
         align-items: center;
         margin-left: 80px;
         margin-bottom: -10px;
         text-align: center;
     }
     .header_menu ul li{
         margin-bottom:10px;
     }
     .header_menu ul li a{
         color:white;
     }
     .header_menu ul li a:hover{
         color:var(--color-white);
     }
     .header_right{
         display:none;
         color:white;
 
         margin-left:15px;
     }
     .header_right ul li{
         color:white;
     }
     .header_right ul li a{
         color:white;
 
     }
     .header_toggle{
         display:block;
     }
     .xi-bars{
         transform:translateY(-35%);
     }
     .header_menu ul.active,
     .header_right.active{
         display:block;
     }