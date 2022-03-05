// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById("modal")
const hearts = document.querySelectorAll(".like-glyph")

function selectHearts() {
  for (i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", serverHandler)
  }
}

selectHearts()

function serverHandler(e) {
  const heart = e.target
  mimicServerCall()
    .then(() => heartHandler(heart))
    .catch(function (error) {
      modal.classList.remove("hidden")
      document.getElementById("modal-message").innerHTML=error
      setTimeout(function() {
        modal.classList.add("hidden")
      }, 3000)
})
}

function heartHandler(heart) {
  // let currentHeart = document.querySelector(".like-glyph").textContent
  if (heart.textContent === EMPTY_HEART) {
    // let fillHeart = document.querySelector(".like-glyph")
    heart.textContent = FULL_HEART
    // currentHeart.classList.add("activated-heart")
    heart.className = "activated-heart"
  } else {
    // document.querySelector(".like-glyph").innerHTML=EMPTY_HEART
    heart.classList.remove("activated-heart")
    heart.textContent = EMPTY_HEART
  }
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