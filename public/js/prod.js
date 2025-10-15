function initProdJS() {
  console.log('initProdJS running');

  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) return;

  const prod = {
    "electroxnano": "seriesa-tab",
    "electroxs01": "seriesb-tab",
    "electroxs02": "seriesc-tab",
    "electroxl01": "seriesd-tab",
    "electroxl02": "seriese-tab",
    "phlox": "seriesf-tab",
  };

  const $target = $('#products');
  console.log('Target element:', $target);

  if ($target.length) {
    $('html, body').animate({ scrollTop: $target.offset().top }, 800);

    setTimeout(() => {
      const btnId = prod[hash]; // fixed from prod.hash
      if (btnId) {
        $(`#${btnId}`).trigger('click');
        console.log(`Scrolled to #products and triggered #${btnId}`);
      } else {
        console.warn('No matching button ID found for hash:', hash);
      }
    }, 100);
  } else {
    console.warn('Target element #products not found');
  }
}
