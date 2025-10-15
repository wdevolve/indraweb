function initHomeJS() {
  console.log('initHomeJS running');

   $(window).on('scroll', function () {
      var scrollTop = $(window).scrollTop();
      var threshold = 1200; // adjust this to when you want the effect

      if (scrollTop > threshold) {
        $('#stickyBox').addClass('stuck-end');
      } else {
        $('#stickyBox').removeClass('stuck-end');
      }
    });
  
  /* Feature section starts */
// $(window).on('scroll', function () {

//   const divTop = $('#featureLineSVG').offset().top;
//   const scrollTop = $(window).scrollTop();

//   if (scrollTop >= (divTop - 200)) {
//     console.log('Div reached the top!');
//     $('#glowGradient').removeClass('d-none');
//     $('.feature').addClass('fade');
//   } else {
//     console.log('Scrolled back above the div!');
//         $('#glowGradient').addClass('d-none');
//         $('.feature').removeClass('fade');
//   }
// });


  /* Feature section ends */




  /* === Drop animation starts === */
  const $el = $('#animated-element');
  const $section = $('#trigger-section');

  if ($el.length === 0 || $section.length === 0) return;

  let hasScrolledToSection = false;
  let scrollTriggered = false;

  const startRotation = -45;
  const finalRotation = -45;
  const radius = 0;
  const finalOffsetY = -200;
  const startScale = 0.3;
  const finalScale = 1.5;

  function animateOnScroll() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    const sectionTop = $section.offset().top;
    const sectionBottom = sectionTop + $section.outerHeight();

    const triggerStart = sectionTop - windowHeight;
    const triggerEnd = sectionBottom;

    let progress = (scrollTop - triggerStart) / (triggerEnd - triggerStart);
    progress = Math.max(0, Math.min(1, progress));

    let offsetX = 0;
    let offsetY = 0;

    if (progress < 0.4) {
      const angle = 4 * Math.PI * (1 - progress);
      offsetX = Math.cos(angle) * radius * (1 - progress);
      offsetY = Math.sin(angle) * radius * (1 - progress) + (-1050 * (1 - progress));
    } else {
      offsetX = 0;
      offsetY = finalOffsetY;
    }

    const currentRotation = startRotation * (1 - progress) + finalRotation * progress;
    const currentScale = startScale * (1 - progress) + finalScale * progress;

    $el.css({
      transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${currentRotation}deg) scale(${currentScale})`
    });

    if (offsetY == '-200') {
      $('#animated-element').removeClass('drop');
      setTimeout(function(){$('.feature-two, .feature-three').addClass('animate')},500);
      setTimeout(function(){$('.feature-text').addClass('animate')},1500);
    } else {
      $('#animated-element').addClass('drop');
      setTimeout(function(){$('.feature-two, .feature-three').removeClass('animate')},500);
      setTimeout(function(){$('.feature-text').removeClass('animate')},1500);
    }
  }

  $(window).off('scroll.home').on('scroll.home resize.home', () => {
    requestAnimationFrame(animateOnScroll);
  });

  animateOnScroll();
  /* === Drop animation ends === */

/* === fadein images starts === */
// const $sections = $(".sections");
// const $image = $(".product-image");

// const images = [
//   "/images/product1.png",
//   "/images/product2.png",
//   "/images/product3.png",
//   "/images/product4.png",
//   "/images/product5.png",
// ];

// let currentSectionIndex = -1;

// function changeImage(index) {
//   if (index >= 0 && index < images.length) {
//     $image.fadeOut(200, function () {
//       $image.attr("src", images[index]).fadeIn(200);
//     });
//   }
// }

// function checkVisibleSection() {
//   let scrollPos = $(window).scrollTop();
//   let windowHeight = $(window).height();

//   $sections.each(function (index) {
//     const offsetTop = $(this).offset().top;
//     const offsetBottom = offsetTop + $(this).outerHeight();

//     if (scrollPos + windowHeight / 2 >= offsetTop && scrollPos + windowHeight / 2 <= offsetBottom) {
//       if (currentSectionIndex !== index) {
//         currentSectionIndex = index;
//         changeImage(index);
//       }
//     }
//   });
// }

// $(window).off("scroll.fadein").on("scroll.fadein", checkVisibleSection);
// $(document).ready(checkVisibleSection);

/* === fadein images ends === */





}

window.initHomeJS = initHomeJS;
