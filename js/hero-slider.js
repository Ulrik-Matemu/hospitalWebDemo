// JavaScript for slideshow functionality
        const slides = document.querySelectorAll(".hero img");
        const prevButton = document.querySelector(".controls .prev");
        const nextButton = document.querySelector(".controls .next");
        const dotsContainer = document.querySelector(".dots");
        const hero = document.querySelector(".hero");
    
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
    
        // Show the first slide immediately — don't wait for the 5s auto-play tick
        updateSlide(currentSlide);
    
        // Reveal the hero (hide the skeleton) once slide 1 has actually loaded
        const revealHero = () => hero.classList.add("is-loaded");
        if (slides[0].complete) {
          revealHero();
        } else {
          slides[0].addEventListener("load", revealHero);
        }
    
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