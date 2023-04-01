

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.querySelectorAll('.like-glyph');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

for (let i = 0; i <heart.length; i++) {
  heart[i].addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (heart[i].classList.contains('activated-heart') === false) {
          heart[i].classList.add('activated-heart');
          heart[i].textContent = FULL_HEART;
          // alert("Yes... Feed our algorithm! *evil laugh*");
        } else if (heart[i].classList.contains('activated-heart') === true) {
          heart[i].classList.remove('activated-heart');
          heart[i].textContent = EMPTY_HEART;
        }
      })
      .catch((error) => {
        console.error(error);
        showModal(error);
      })
  })
}

const showModal = (error) => {
  modal.style.visibility = "visible";
  modalMessage.textContent = error;
  setTimeout(hideModal, 3000);
}
const hideModal = () => modal.style.visibility = "hidden";

const fillHeart = (e) => {
  console.log("filling heart");
  heart.innerHTML = FULL_HEART;
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}