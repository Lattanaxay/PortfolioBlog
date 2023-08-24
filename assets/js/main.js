
/*=============== Active Link =============== */

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/* active work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkWork.forEach((a)=> a.classList.remove('.active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a)=> a.addEventListener('click', activeWork));
/*=============== Testimonials Swiper =============== */
