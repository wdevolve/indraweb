function initAboutJS() {
  console.log('initAboutJS running');
  /* === fadein images starts === */
  const $sections = $(".sections");
  const $waterData = $(".water-data");

  const Data = [
    "4<br/>Billion",
    "$260<br/>Billion",
  ];

  let currentSectionIndex = -1;

  function changeData(sectionIndex) {
    if (sectionIndex >= 0 && sectionIndex < Data.length) {
      $waterData.fadeOut(200, function () {
        $waterData.html(Data[sectionIndex]).fadeIn(200);
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
          changeData(index);
        }
      }
    });
  }

  $(window).off('scroll.fadein').on("scroll.fadein", checkVisibleSection);

  checkVisibleSection();
  /* === fadein images ends === */



  $('.team').hover(
      function () {
        // On mouse enter
        $(this).find('.team-text').stop().animate({ height: 150 }, 300);
        // $(this).find('.team-text').stop().animate({ height: $(this).height() }, 300);
        // $(this).find('.team-desc').stop().slideDown(100);
        $(this).find('.team-text').addClass('rounded-top-3');
        $(this).find('.team-text').addClass('shadow');
      },
      function () {
        // On mouse leave
        $(this).find('.team-text').stop().animate({ height: 80 }, 300);
        // $(this).find('.team-desc').stop().slideUp(100);
        $(this).find('.team-text').removeClass('rounded-top-3');
        $(this).find('.team-text').removeClass('shadow');
      }
    );

}

window.initAboutJS = initAboutJS;
