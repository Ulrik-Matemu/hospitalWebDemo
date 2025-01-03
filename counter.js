const counters = document.querySelectorAll('.counter-value');

const runCounter = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target; // Ensure it ends at the target value
      }
    };

    updateCount();
  });
};

// Trigger the counter when it comes into view
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter();
        observer.unobserve(entry.target); // Run only once
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach(counter => observer.observe(counter));
