const searchEl = document.querySelector('.search');
//  .search 클래스를 찾아  => 변수안에 

const searchInputEl = searchEl.querySelector('input');
//찾은 변수안에서 input 클래스를 찾아 다른 변수 안에 넣는다.

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
}); // 이벤트 리스너 를 통해 클릭 될 경우 함수 실행시킨다.

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
}); // 요소가 focused 되면 placeholder 를 통해 검색 화면에 통합검색 을 표시한다.

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
}); // 요소가 블러 처리 되면서 빈 화면이 나온다.

const badgeEl = document.querySelector('header .badges');

// throttle 로 함수 최적화 
window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //badge 숨기기 
    //gsap.to(요소, 지속시간 , 옵션);
    gsap.to(badgeEl, .6 , {
      opacity: 0 ,
      display:'none'
    });
  } else{
    //badge 보이기
    gsap.to(badgeEl, .6 ,{
      opacity:1,
      display:'block'
    });
  };
}, 300));
//_.throttle(함수, 시간) 300 = 0.3s

//화면에 delay로 요소 출력 

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7,
    opacity:1,
  });
});

// Swiper 사용
// new Swiper(선택자 , 옵션(객체데이터 ))
new Swiper('.notice-line .swiper-container',{
  direction:'vertical',
  autoplay :true,
  loop:true
});

new Swiper('.promotion .swiper-container',{
  slidesPerView :3,
  spaceBetween:10,
  centeredSlides:true,
  loop:true,
  // autoplay:{
  //   delay: 3000,
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호요소 선택자 
    clickable:true
  },
  navigation :{
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


// 버튼 화면표시 영역 
const promotionEl =document.querySelector('.promotion');
const promotionToggleBtn =document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김처리 
    promotionEl.classList.add('hide');
  } else{
    //화면 표시
    promotionEl.classList.remove('hide');
  }
});