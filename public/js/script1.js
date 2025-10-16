// const { startTransition } = require("react");

/* Data counter starts */
$(document).ready(function () {
  $('.counter').each(function () {
    const $this = $(this);
    const target = parseInt($this.data('target'));
    let count = 0;

    function updateCounter() {
      const increment = target / 200;
      if (count < target) {
        count += increment;
        $this.text(Math.ceil(count));
        requestAnimationFrame(updateCounter);
      } else {
        $this.text(target);
      }
    }

    updateCounter();
  });
});
/* Data counter ends */
  /*Drop animation starts*/
$(document).ready(function () {
  const $el = $('#animated-element');
  const $section = $('#trigger-section');

  if ($el.length === 0 || $section.length === 0) return;

  let hasScrolledToSection = false;
  let scrollTriggered = false;

  const startRotation = 180;
  const finalRotation = -180;
  const radius = 300;
  const finalOffsetY = 50;
  const startScale = 1;
  const finalScale = 1;

  function animateOnScroll() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    const sectionTop = $section.offset().top;
    const sectionBottom = sectionTop + $section.outerHeight();

    const triggerStart = sectionTop - windowHeight;
    const triggerEnd = sectionBottom;

    let progress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);
    progress = Math.max(0, Math.min(1, progress));

    // Animate spiral motion
    let offsetX = 0;
    let offsetY = 0;

    if (progress < 0.4) {
      const angle = 4 * Math.PI * (1 - progress);
      offsetX = Math.cos(angle) * radius * (1 - progress);
      offsetY = Math.sin(angle) * radius * (1 - progress) + (-400 * (1 - progress));
    } else {
      offsetX = 0;
      offsetY = finalOffsetY;
    }

    const currentRotation = startRotation * (1 - progress) + finalRotation * progress;
    const currentScale = startScale * (1 - progress) + finalScale * progress;

    $el.css({
      transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${currentRotation}deg) scale(${currentScale})`
    });

    // === AUTO-SCROLL DELAYED UNTIL FULL ANIMATION ===
    if (
      !hasScrolledToSection &&
      !scrollTriggered &&
      progress >= 0.98 // almost complete
    ) {
      scrollTriggered = true;

      // Give user a short moment to view final state before scroll
      setTimeout(() => {
        $('html, body').animate({ scrollTop: sectionTop - 100 }, 500);
        hasScrolledToSection = true;
      }, 400); // delay after animation ends
    }
  }

  $(window).on('scroll resize', () => {
    requestAnimationFrame(animateOnScroll);
  });

  animateOnScroll();
});

/*Drop animation ends*/

// Start 3D animate
// setup();
// function setup() {
//   const container = $(".cube-container");
//   const cube = $(".cube");
//   const faces = $(".face");

//   let x = 0;
//   let y = 0;
//   let rotationX = 0;
//   let rotationY = 0;

//   container
//     .on("mousedown touchstart", function (event) {
//       const touch =
//         event.originalEvent.touches?.[0] ||
//         event.originalEvent.changedTouches?.[0];
//       x = touch?.pageX || event.clientX;
//       y = touch?.pageY || event.clientY;
//       container.on("mousemove touchmove", drag);
//     })
//     .on("mouseup", () => {
//       container.off("mousemove touchend", drag);
//     });

//   function drag(event) {
//     const touch =
//       event.originalEvent.touches?.[0] ||
//       event.originalEvent.changedTouches?.[0];
//     const deltaX = (touch?.pageX || event.pageX) - x;
//     const deltaY = (touch?.pageY || event.pageY) - y;
//     x = touch?.pageX || event.pageX;
//     y = touch?.pageY || event.pageY;
//     rotationY -= deltaX * -1;
//     rotationX += deltaY * -1;
//     cube.css(
//       "transform",
//       `translateZ(calc(var(--w)/2)) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
//     );
//   }

//   faces.find("button").on("click", function (event) {
//     alert(`You clicked on: ${$(event.target).text()}`);
//   });

//   $(window).on("resize", adjustContainerSize);
//   adjustContainerSize();
//   function adjustContainerSize() {
//     const padding = 100;
//     const vw = Math.min(500, window.innerWidth - padding) + "px";
//     setCSSVariable(container[0], "--vw", vw);
//   }
// }

// function getCSSVariable(element, cssVariable) {
//   return getComputedStyle(element).getPropertyValue(cssVariable);
// }

// function setCSSVariable(element, cssVariable, value) {
//   element.style.setProperty(cssVariable, value);
// }

// Stop 3D animate
/*Slider nav btn ends*/
$(document).ready(function () {
  const $carousel = $('#customCarousel');
  const $items = $carousel.find('.carousel-item');
  const totalSlides = $items.length;
  const $prevBtn = $('#prevBtn');
  const $nextBtn = $('#nextBtn');

  function updateNavButtons(index) {
    // Handle prev button
    if (index === 0) {
      $prevBtn.removeClass('nav-btn-active').addClass('nav-btn-inactive').css('pointer-events', 'none');
    } else {
      $prevBtn.removeClass('nav-btn-inactive').addClass('nav-btn-active').css('pointer-events', 'auto');
    }

    // Handle next button
    if (index === totalSlides - 1) {
      $nextBtn.removeClass('nav-btn-active').addClass('nav-btn-inactive').css('pointer-events', 'none');
    } else {
      $nextBtn.removeClass('nav-btn-inactive').addClass('nav-btn-active').css('pointer-events', 'auto');
    }
  }

  $carousel.on('slid.bs.carousel', function (e) {
    const currentIndex = $(e.relatedTarget).index();
    updateNavButtons(currentIndex);
  });

  // Initial update
  updateNavButtons(0);
});
/*Slider nav btn ends*/

/*Manual toggle starts*/
$(document).ready(function () {
  $('.navbar-toggler').on('click', function () {
    const navbar = $('#mainNavbar');

    if (navbar.hasClass('show')) {
      // Close the menu
      navbar.removeClass('show').removeAttr('style').attr('aria-expanded', 'false');
      $(this).addClass('collapsed').attr('aria-expanded', 'false');
    } else {
      // Open the menu
      navbar.addClass('show').attr('style', '').attr('aria-expanded', 'true');
      $(this).removeClass('collapsed').attr('aria-expanded', 'true');
    }
  });

  // Close on nav-link click (optional)
  $('.nav-link').on('click', function () {
    $('#mainNavbar').removeClass('show').removeAttr('style').attr('aria-expanded', 'false');
    $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
  });
});

/*Manual toggle ends*/

/*Horizontal scroll starts*/

/*Horizontal scroll ends*/


/*fadein images starts*/
$(document).ready(function () {
  const $sections = $(".sections");
  const $image = $(".image");

  // const images = [
  //   "/images/product1.webp",
  //   "/images/product2.webp",
  //   "/images/product3.webp",
  // ];

  // let currentSectionIndex = -1;

  // function changeImage(sectionIndex) {
  //   if (sectionIndex >= 0 && sectionIndex < images.length) {
  //     $image.fadeOut(200, function () {
  //       $image.attr("src", images[sectionIndex]).fadeIn(200);
  //     });
  //   }
  // }

  function checkVisibleSection() {
    let scrollPos = $(window).scrollTop();
    let windowHeight = $(window).height();

    $sections.each(function (index) {
      let offsetTop = $(this).offset().top;

      if (scrollPos + windowHeight / 2 >= offsetTop) {
        if (currentSectionIndex !== index) {
          currentSectionIndex = index;
          changeImage(index);
        }
      }
    });
  }

  $(window).on("scroll", function () {
    checkVisibleSection();
  });

  // Initial trigger
  checkVisibleSection();
});

/*fadein images ends*/