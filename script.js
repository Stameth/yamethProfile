// Ensure the left and right divs respond to scroll
const leftDiv = document.querySelector(".left-div")
const rightDiv = document.querySelector(".right-div")

rightDiv.addEventListener("scroll", () => {
  const isRightDivScrolledToBottom = rightDiv.scrollTop + rightDiv.clientHeight >= rightDiv.scrollHeight
  leftDiv.style.position = isRightDivScrolledToBottom ? "relative" : "sticky"
  leftDiv.style.top = "0"
})

// Toggle menu for mobile
function toggleMenu() {
  const menu = document.querySelector(".navbar-menu ul")
  const burgerIcon = document.querySelector(".burger-menu")
  menu.classList.toggle("show")
  burgerIcon.classList.toggle("active")
}

// JavaScript for Scroll Functionality and Active Link Highlight
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault()
    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    } else {
      console.error(`Element with ID ${targetId} not found.`)
    }
  })
})

// Highlight Active Link Based on Scroll Position
window.addEventListener("scroll", function () {
  const profileLink = document.getElementById("profile-link")
  const moreLink = document.getElementById("more-link")
  const containerSection = document.querySelector(".container")
  const navHeight = document.querySelector(".navbar").offsetHeight

  const containerTop = containerSection.getBoundingClientRect().top - navHeight

  if (containerTop <= 0) {
    profileLink.classList.remove("active")
    moreLink.classList.add("active")
  } else {
    moreLink.classList.remove("active")
    profileLink.classList.add("active")
  }
})

// Fade-in Animation
const fadeInDivs = document.querySelectorAll(".fade-in-div")

function checkFadeIn() {
  fadeInDivs.forEach(div => {
    const rect = div.getBoundingClientRect()
    if (rect.top < window.innerHeight - 100) {
      div.classList.add("visible")
    }
  })
}

window.addEventListener("scroll", checkFadeIn)
checkFadeIn() // Initial check
