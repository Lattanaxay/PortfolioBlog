/*=============== Show Menu =============== */

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== Remove Menu Mobile =============== */

/*=============== Background Header =============== */
function scrollHeader() {
    const header = document.getElementById('header')
   // when the scroll is greater than 50 viewport height, add the scroll-header class to header tag 
 
   if (this.scrollY >= 50) header.classList.add('scroll-header');
   else header.classList.remove('scroll-header');
 }
 
 window.addEventListener('scroll', scrollHeader);
 
/*=============== Contact Form =============== */
const ContactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message");
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  //check if the field has a value
  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    Message.value === ''
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
      contactMessage.textContent = 'Message sent ✅ ';

      //remove message after 5seconds
      setTimeout(() => {
        contactMessage.textContent = '';
      },5000);
    },
    (error) => {
      alert('OOPs! SONTHING WENT WRONG....', error)
    });

    // clear input field
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';
  }
};

ContactForm.addEventListener("submit", sendEmail);

/*=============== Style Switcher =============== */
