document.addEventListener("DOMContentLoaded", () => {
    // Get DOM elements
    const mainImage = document.querySelector("figure img");
    const figcaption = document.querySelector("figcaption");
    const thumbnails = document.querySelectorAll("ul li img");
  
    // Add click event listeners to thumbnails
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        // Get the source of the clicked thumbnail
        const smallImageSrc = this.src;
  
        // Convert small image path to large image path
        const largeImageSrc = smallImageSrc.replace("-small", "-large");
  
        // Update main image
        mainImage.src = largeImageSrc;
        mainImage.alt = this.alt;
  
        // Update caption
        figcaption.textContent = this.alt;
  
        // Update active state
        thumbnails.forEach((thumb) => thumb.classList.remove("active"));
        this.classList.add("active");
      });
    });
  
    // Set initial active state
    thumbnails[0].classList.add("active");
  });