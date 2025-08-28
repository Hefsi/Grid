const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton =document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");

const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// const slideWidth = slideSize.width;
// console.log(slideWidth);

//arrange the slides next to one another

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left =  slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px'; 

const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform =' translateX(-'+targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");

}

const updateDots = (currentDot,targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}

const hideShowArrow = (targetIndex, prevButton, nextButton, slides) => {
    if(targetIndex === 0){
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
    }
    else if(targetIndex === slides.length - 1){
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add("is-hidden");
    }else{
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
    }
}

// slides.forEach( ( slide,index) => {
//     slide.style.left = slideWidth * index + 'px';
// })


// when i click left move slide to te left


prevButton.addEventListener("click",e => {
    const currentSlide = track.querySelector(".current-slide");
    // console.log(currentSlide);
   const previousSlide = currentSlide.previousElementSibling;
   const currentDot = dotsNav.querySelector(".current-slide");
   const previousDot = currentDot.previousElementSibling;

   moveToSlide(track,currentSlide,previousSlide);
   updateDots(currentDot,previousDot);

   const previousIndex = slides.findIndex(slide => slide === previousSlide);

   hideShowArrow(previousIndex, prevButton, nextButton, slides);
})

  

// when i click right move slide to the right

nextButton.addEventListener("click",e => {
    const currentSlide = track.querySelector(".current-slide");
    // console.log(currentSlide);
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;

    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    hideShowArrow(nextIndex, prevButton, nextButton, slides);


    // const amountTomove = nextSlide.style.left;
    // console.log(amountTomove);
    // track.style.transform =' translateX(-'+amountTomove + ')';
    // currentSlide.classList.remove("current-slide");
    // nextSlide.classList.add("current-slide");

    moveToSlide(track,currentSlide,nextSlide);

    updateDots(currentDot,nextDot);
})



//when i click nav indicators move  to that slide

dotsNav.addEventListener("click",e =>{
    const targetDot = e.target.closest("button");
    // console.log(e);

    // console.log(e.target);
    // console.log(targetDot);

    // console.log("test 01");
    if(!targetDot) return;
    // console.log("test 02");

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");

    const targetIndex = dots.findIndex(dot => dot === targetDot);

    const targetSlide = slides[targetIndex];
    moveToSlide(track,currentSlide,targetSlide);

    // currentDot.classList.remove("current-slide");
    // targetDot.classList.add("current-slide");

    updateDots(currentDot,targetDot);


     hideShowArrow(targetIndex, prevButton, nextButton, slides);

    // console.log(dots);
    // console.log(targetIndex);

    // if(targetIndex === 0){
    //     prevButton.classList.add("is-hidden");
    //     nextButton.classList.remove("is-hidden");
    // }
    // else if(targetIndex === slides.length - 1){
    //     prevButton.classList.remove("is-hidden");
    //     nextButton.classList.add("is-hidden");
    // }else{
    //     prevButton.classList.remove("is-hidden");
    //     nextButton.classList.remove("is-hidden");
    // }


})