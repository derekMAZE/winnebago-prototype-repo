/*
 * Winnebago Parts Direct: place the Convermax Garage icon in the header icon row.
 * Horizon's header section does not accept app blocks, so the Garage app block lives
 * in its own header-group section. This moves it next to the search icon:
 *   desktop (750px and up): directly left of the search icon
 *   mobile: first item in the right-hand actions (account, cart); search sits left on mobile
 */
(function () {
  var style = document.createElement('style');
  style.textContent =
    '#header-group [data-wgo-garage-source]{display:none}' +
    '.wgo-header-garage{display:flex;align-items:center;justify-content:center;' +
    'min-width:var(--minimum-touch-target,44px);min-height:var(--minimum-touch-target,44px)}';
  document.head.appendChild(style);

  var MQ = window.matchMedia('(min-width: 750px)');
  var sourceSection = null; // the Garage block's original header-group section, captured once

  function garageBlock() {
    var group = document.getElementById('header-group');
    if (!group) return null;
    return (
      group.querySelector('.shopify-app-block[id*="garage"]') ||
      group.querySelector('[id$="1791235812333ddcee"] .shopify-app-block')
    );
  }

  function visibleSearch(header) {
    var all = header.querySelectorAll('search-button.search-action');
    for (var i = 0; i < all.length; i++) {
      if (all[i].offsetParent !== null) return all[i];
    }
    return null;
  }

  function place() {
    var header = document.getElementById('header-component');
    var block = garageBlock();
    if (!header || !block) return;

    // Only record the source section while the block is still outside the header.
    // After the move, closest('.shopify-section') would be the header section itself.
    if (!sourceSection && !header.contains(block)) {
      var s = block.closest('.shopify-section');
      if (s && !s.contains(header)) sourceSection = s;
    }
    var moved = false;

    if (MQ.matches) {
      var search = visibleSearch(header);
      if (search && search.previousElementSibling !== block) {
        search.parentNode.insertBefore(block, search);
      }
      moved = !!search;
    } else {
      var actions = header.querySelector('header-actions');
      if (actions && actions.firstElementChild !== block) actions.insertBefore(block, actions.firstElementChild);
      moved = !!actions;
    }

    if (moved) {
      block.classList.add('wgo-header-garage');
      if (sourceSection && !sourceSection.contains(header)) sourceSection.setAttribute('data-wgo-garage-source', '');
    }
  }

  function init() {
    place();
    if (MQ.addEventListener) MQ.addEventListener('change', place);
    document.addEventListener('shopify:section:load', place);
    window.addEventListener('load', place);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
