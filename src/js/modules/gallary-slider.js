function gallarySlider() {
    function initSlider(){
        const slider = document.querySelector('.slider');
        const prevButton = document.querySelector('.slider__button--prev');
        const nextButton = document.querySelector('.slider__button--next');
        let slideIndex = 0;
        
         if(prevButton && nextButton){
          nextButton.addEventListener('click', () => {
           slideIndex++;
           updateSlider();
          });
          prevButton.addEventListener('click', () => {
           slideIndex--;
           updateSlider();
          });
        
           function updateSlider() {
             const sliderWidth = document.querySelector('.slider-container').offsetWidth;
             const maxSlideIndex = slider.children.length - 1;
             if(slideIndex > maxSlideIndex) {
                slideIndex = 0;
            }
             if(slideIndex < 0) {
                slideIndex = maxSlideIndex;
             }
            slider.style.transform = `translateX(-${slideIndex * sliderWidth}px)`;
            }
         }
        }
        // Вызываем initSlider
        initSlider();
                
}

export default gallarySlider;

