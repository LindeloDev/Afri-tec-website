document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("siteHeader");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = mobileMenu.querySelectorAll("a");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  /* ---- Navbar background on scroll ---- */
  function handleScroll() {
    if (window.scrollY > 12) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  /* ---- Mobile menu open/close ---- */
  function openMenu() {
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    hamburgerBtn.classList.add("is-open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    hamburgerBtn.setAttribute("aria-label", "Close menu");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    hamburgerBtn.classList.remove("is-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    hamburgerBtn.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
    mobileMenuClose.addEventListener("click", closeMenu);
  }

  hamburgerBtn.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  /* close when a link is tapped */
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  /* close on Escape */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  /* close if resized up to desktop */
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 992 && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  

  /* ---- Footer year ---- */
  const footerYear = document.getElementById("footerYear");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});

/* ==========================================================
   PRODUCT VIDEO MODAL
   ========================================================== */

const videoModal = document.getElementById("videoModal");
const videoModalClose = document.getElementById("videoModalClose");
const productVideo = document.getElementById("productVideo");
const videoButtons = document.querySelectorAll(".how-it-works-btn");


function openVideoModal(videoId) {

    if (!videoModal || !productVideo) return;

    productVideo.src =
        "https://www.youtube.com/embed/" +
        videoId +
        "?autoplay=1&rel=0";

    videoModal.classList.add("is-open");

    videoModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("video-modal-open");
}


function closeVideoModal() {

    if (!videoModal || !productVideo) return;

    videoModal.classList.remove("is-open");

    videoModal.setAttribute("aria-hidden", "true");

    /*
     * Clearing the iframe source stops the YouTube video
     * when the modal is closed.
     */
    productVideo.src = "";

    document.body.classList.remove("video-modal-open");
}


/* ----------------------------------------------------------
   OPEN VIDEO
   ---------------------------------------------------------- */

videoButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const videoId = button.dataset.video;

        if (!videoId) return;

        openVideoModal(videoId);

    });

});


/* ----------------------------------------------------------
   CLOSE BUTTON
   ---------------------------------------------------------- */

if (videoModalClose) {

    console.log("✅ videoModalClose button found, listener attached");

    videoModalClose.addEventListener("click", function() {

        console.log("🖱️ Close button clicked");

        closeVideoModal();

        console.log("✅ closeVideoModal() finished running");

    });

} else {

    console.log("❌ videoModalClose button NOT found in the DOM — check your HTML id");

}


/* ----------------------------------------------------------
   CLICK BACKDROP TO CLOSE
   ---------------------------------------------------------- */

if (videoModal) {

    videoModal.addEventListener("click", function(event) {

        if (
            event.target.classList.contains("video-modal") ||
            event.target.classList.contains("video-modal-backdrop")
        ) {

            closeVideoModal();

        }

    });

}
/* ----------------------------------------------------------
   ESC KEY
   ---------------------------------------------------------- */
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeVideoModal();

    }

});

document.addEventListener("DOMContentLoaded", function () {

  const mobileMenuClose = document.getElementById("mobileMenuClose");

  if (mobileMenuClose) {

    console.log("✅ mobileMenuClose button found, listener attached");

    mobileMenuClose.addEventListener("click", function () {

      console.log("🖱️ mobileMenuClose clicked — closing menu");

      closeMenu();

    });

  } else {

    console.log("❌ mobileMenuClose button NOT found — check the id in your HTML");

  }

});