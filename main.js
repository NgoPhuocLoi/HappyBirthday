var body = document.querySelector('body'),
    giftbox = document.querySelector('.giftbox'),
    merryWrap = document.querySelector('.merrywrap'),
    giftboxTop = document.querySelector('.giftbox__top'),
    giftboxBottom = document.querySelector('.giftbox__bottom'),
    icons = document.querySelector('.icons'),

    gifArea = document.querySelector('.gif-area'),
    gifBoy = document.querySelector('.gif-boy'),
    gifCake = document.querySelector('.gif-cake'),
    gifFW1s = document.querySelectorAll('.gif-firework1'),
    gifFW2s = document.querySelectorAll('.gif-firework2'),
    audio = new Audio("./assests/HappyBirthday-cut.mp3"),

    imgArea = document.querySelector('.images-area'),
    imgRotate = document.querySelector('.container'),

    imgScroll = document.querySelector('.images-scroll'),
    showBtn = document.querySelector('.show-btn'),
    hideBtn = document.querySelector('.hide-btn'),
    listRowHide = document.querySelectorAll('.row-hide'),

    imgSlide = document.querySelector('.img-slide'),
    imgSlideItem1 = document.querySelector('.img-slide__item:nth-child(1)'),
    imgSlideItem2 = document.querySelector('.img-slide__item:nth-child(2)'),
    imgSlideItem3 = document.querySelector('.img-slide__item:nth-child(3)'),

    cardContainer = document.querySelector('.card-container'),
    closeBtn = document.querySelector('#close'),

    candle = document.querySelector('.candle')


// Open giftbox
giftbox.addEventListener('click',() => {
    giftbox.classList.add('giftbox--wobble');
    giftboxTop.classList.add('giftbox__top--wobble');

    setTimeout(() =>{
        giftboxTop.classList.add('flyUp');
        giftboxBottom.classList.add('flyDown');
        merryWrap.classList.add('hide')
        icons.classList.remove('step-1')
        gifCake.classList.add('show-cake')
        setTimeout(slide,1000)
    },3000)
    setTimeout(() =>{
        icons.classList.add('step-3')
        merryWrap.remove()
        
    },7000)
})

// --------------------------------------------------------------

// Sing when click gif-cake

gifCake.addEventListener('click',() =>{
    gifCake.style.display = 'none'
    gifArea.style.backgroundColor = 'red'
    gifBoy.style.display = 'block';
    gifFW1s.forEach((item) =>{item.classList.add('show')})
    gifFW2s.forEach((item) =>{item.classList.add('show')})
    audio.play()
    
    setTimeout(() => {
        gifArea.classList.add('hide')
        setTimeout(() =>{
            gifArea.remove()
            imgSlide.remove()
        },2000)
        body.style.height = 'fit-content'
        cardContainer.style.display = 'block'
    },12000)
})

// ---------------------------------------------------------
// click show more btn

showBtn.onclick = () => {
    for(var rowHide of listRowHide){
        rowHide.style.display = 'flex'
    }
    showBtn.style.display = 'none'
    hideBtn.style.display = 'flex'
}
hideBtn.onclick = () => {
    for(var rowHide of listRowHide){
        rowHide.style.display = 'none'
    }
    showBtn.style.display = 'flex'
    hideBtn.style.display = 'none'
}

// -------------------------------------------------------------------
// slide-img
function slide(){
    imgSlideItem1.classList.add('img-slide__item-1')
    setTimeout(() => {
        imgSlideItem2.classList.add('img-slide__item-2')
    },500)
    setTimeout(() => {
        imgSlideItem3.classList.add('img-slide__item-3')
    },3010)
}

// -----------------------------------------------------
// card

closeBtn.onclick = () => {
    cardContainer.classList.add('hide-card')
    
    setTimeout(() => {
        imgRotate.classList.add('show-container')
        imgScroll.style.display = 'block'
        candle.style.opacity = '1'
    },1000)

    setTimeout(() => {
        cardContainer.remove()
    },4000)
}

// --------------------------------------------------------------
// hide candle when scroll
window.onscroll = hideCandle

function hideCandle(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        candle.style.display = 'none'
    }else{
        candle.style.display = 'block'
    }
}