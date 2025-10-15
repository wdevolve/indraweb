function initScriptJS() {
  console.log('initScriptJS running');

  $(document).on('click', '.header-canvas-close', function () {
    $('.header-menu-canvas').trigger('click');
});

  /* === Data counter starts === */
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let $el = $(entry.target);
        if (!$el.hasClass('counting')) {
          $el.addClass('counting');
          startCounter($el);
        }
      } else {
        $(entry.target).removeClass('counting').text('0');
      }
    });
  }, { threshold: 0.5 });

  $('.counter').each(function () {
    observer.observe(this);
  });

function startCounter($el) {
  let target = parseInt($el.data('target'));
  let duration = 2000;
  let current = 0;
  let increment = target / (duration / 10);

  let interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    // Format with commas
    $el.text(Math.floor(current).toLocaleString());
  }, 10);
}

  /* === Data counter ends === */


  /* === Slider nav btn === */
  const $carousel = $('#customCarousel');
  const $items = $carousel.find('.carousel-item');
  const totalSlides = $items.length;
  const $prevBtn = $('#prevBtn');
  const $nextBtn = $('#nextBtn');

  function updateNavButtons(index) {
    if (index === 0) {
      $prevBtn.removeClass('nav-btn-active').addClass('nav-btn-inactive').css('pointer-events', 'none');
    } else {
      $prevBtn.removeClass('nav-btn-inactive').addClass('nav-btn-active').css('pointer-events', 'auto');
    }

    if (index === totalSlides - 1) {
      $nextBtn.removeClass('nav-btn-active').addClass('nav-btn-inactive').css('pointer-events', 'none');
    } else {
      $nextBtn.removeClass('nav-btn-inactive').addClass('nav-btn-active').css('pointer-events', 'auto');
    }
  }

  // Remove old handler first!
  $carousel.off('slid.bs.carousel.script').on('slid.bs.carousel.script', function (e) {
    const currentIndex = $(e.relatedTarget).index();
    updateNavButtons(currentIndex);
  });

  updateNavButtons(0);
  /* === Slider nav btn ends === */


  /* === Manual toggle === */
  $('.navbar-toggler').off('click.script').on('click.script', function () {
    const navbar = $('#mainNavbar');
    if (navbar.hasClass('show')) {
      navbar.removeClass('show').removeAttr('style').attr('aria-expanded', 'false');
      $(this).addClass('collapsed').attr('aria-expanded', 'false');
    } else {
      navbar.addClass('show').attr('style', '').attr('aria-expanded', 'true');
      $(this).removeClass('collapsed').attr('aria-expanded', 'true');
    }
  });

  $('.nav-link').off('click.script').on('click.script', function () {
    $('#mainNavbar').removeClass('show').removeAttr('style').attr('aria-expanded', 'false');
    $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
  });
  /* === Manual toggle ends === */


  

  /* === fadein images === */
  const $sections = $(".sections");
  const $image = $(".product-image");

//  var images = [
//   "/images/image-stage-1.png",
//   "/images/image-stage-2.png",
//   "/images/image-stage-3.png",
//   "/images/image-stage-4.png",
//   "/images/products/product1.png",
// ];

var images = [
  "/images/icons/plug-play.png",
  "/images/icons/savings.png",
  "/images/icons/less-space.png",
  "/images/icons/operational-costs.png",
  "/images/icons/water-recovery.png",
    "/images/icons/zero-chemicals.png",
  "/images/icons/pcb.png",
  "/images/icons/modular-capacity.png",
  "/images/icons/long-life.png",
];

  let currentSectionIndex = -1;

  function changeImage(sectionIndex) {
    if (sectionIndex >= 0 && sectionIndex < images.length) {
      $image.fadeOut(100, function () {
        $image.attr("src", images[sectionIndex]).fadeIn(100);
      });
    }
  }

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

  $(window).off("scroll.script-fadein").on("scroll.script-fadein", checkVisibleSection);

  checkVisibleSection();
  /* === fadein images ends === */
}

window.initScriptJS = initScriptJS;//stars new pages
