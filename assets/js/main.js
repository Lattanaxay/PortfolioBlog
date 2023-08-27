/*=============== Active Link =============== */

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup(".projects__container", {
  selectors: {
    target: ".project__item",
  },
  animation: {
    duration: 300,
  },
});

/* active work */
const linkWork = document.querySelectorAll(".category__btn");

function activeWork() {
  linkWork.forEach((a) => a.classList.remove(".active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*=============== Contact Form =============== */
const ContactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message");
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //chheck if the field has a value
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
     ) {
    // add and remove color
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    // show message
    contactMessage.textContent = "Write all the input fields";
  } else {
    //serviceID - templateID - #form - publickey
    emailjs.sendForm(
      "service_ykeccsp",
      "template_x96wt5k",
      "#contact-form",
      "yXMPKAxYMYe_21MQW"
    )
    .then(() => {
      //show massage and add color, window + dot to open emoji
      contactMessage.classList.add('color-light');
      contactMessage.textContent = 'Message sent ✔️'

      //remove message after 5seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      },5000);
    },
    (error) => {
      alert('OOPs! SONTHING WENT WRONG....', error)
    });
  }
};

ContactForm.addEventListener("submit", sendEmail);
