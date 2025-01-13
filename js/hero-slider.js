// JavaScript for slideshow functionality
        const slides = document.querySelectorAll(".hero img");
        const prevButton = document.querySelector(".controls .prev");
        const nextButton = document.querySelector(".controls .next");
        const dotsContainer = document.querySelector(".dots");
    
        let currentSlide = 0;
    
        // Initialize navigation dots
        slides.forEach((_, index) => {
          const dot = document.createElement("span");
          dot.dataset.index = index;
          if (index === 0) dot.classList.add("active");
          dotsContainer.appendChild(dot);
        });
    
        const dots = document.querySelectorAll(".dots span");
    
        // Function to update slide
        const updateSlide = (index) => {
          slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
          });
        };
    
        // Go to next slide
        const nextSlide = () => {
          currentSlide = (currentSlide + 1) % slides.length;
          updateSlide(currentSlide);
        };
    
        // Go to previous slide
        const prevSlide = () => {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          updateSlide(currentSlide);
        };
    
        // Add event listeners
        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", prevSlide);
        dots.forEach((dot) =>
          dot.addEventListener("click", (e) => {
            currentSlide = Number(e.target.dataset.index);
            updateSlide(currentSlide);
          })
        );
    
        // Auto-play functionality
        setInterval(nextSlide, 5000); // Change slide every 5 seconds