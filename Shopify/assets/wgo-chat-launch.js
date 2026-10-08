/* Winnebago Parts: open the Shopify Inbox chat from any link to #ShopifyChat or #open-chat,
   or any element with data-open-chat.
   - Tablet and desktop (768px and up): the chat opens as a centered panel. It reuses the
     theme's chat drawer (snippets/chat-drawer.liquid) and restyles it while it is open.
   - Mobile: Inbox shows its own full-screen chat.
   Fallbacks: legacy Inbox launcher button, then reload with Inbox's ?chat parameter. */
(function () {
  var TRIGGERS = 'a[href="#ShopifyChat"], a[href$="#ShopifyChat"], a[href="#open-chat"], a[href$="#open-chat"], [data-open-chat]';
  var CENTER_MIN_WIDTH = 768; /* matches --shopify-chat-breakpoint in chat-drawer.liquid */
  var CLASS = 'wgo-chat-centered';

  var css =
    'theme-drawer.' + CLASS + ' .theme-drawer__dialog.chat-drawer[open]{' +
      'inset:50% auto auto 50% !important;transform:translate(-50%,-50%);' +
      'width:min(560px,calc(100vw - 48px));height:min(720px,calc(100dvh - 64px));' +
      'padding:0;border:0;border-radius:12px;overflow:hidden;' +
      'box-shadow:0 24px 64px rgb(0 0 0 / .35);' +
      'animation:wgo-chat-in .2s ease-out !important;}' +
    'theme-drawer.' + CLASS + ' .theme-drawer__dialog.chat-drawer[open]:not(:modal){' +
      'box-shadow:0 0 0 100vmax rgb(0 0 0 / .45),0 24px 64px rgb(0 0 0 / .35);}' +
    'theme-drawer.' + CLASS + ' .theme-drawer__dialog.chat-drawer.theme-drawer__dialog--closing{' +
      'animation:wgo-chat-out .15s ease-in forwards !important;}' +
    'body:has(theme-drawer.' + CLASS + '[open]) .page-wrapper--drawer-open{margin-inline-end:0;}' +
    '@keyframes wgo-chat-in{from{opacity:0;transform:translate(-50%,-46%)}}' +
    '@keyframes wgo-chat-out{to{opacity:0;transform:translate(-50%,-46%)}}';
  var style = document.createElement('style');
  style.id = 'wgo-chat-launch-styles';
  style.textContent = css;
  document.head.appendChild(style);

  function openShopifyChat(chat) {
    if (typeof chat.show === 'function') {
      chat.show();
    } else {
      chat.setAttribute('open', '');
    }
    return true;
  }

  function clearCentered(drawer) {
    drawer.classList.remove(CLASS);
    drawer.removeAttribute('no-persist');
  }

  function openCentered(chat) {
    var drawer = document.getElementById('chat-drawer');
    if (!drawer || typeof drawer.open !== 'function') return false;
    if (window.innerWidth < CENTER_MIN_WIDTH) return false;
    var dialog = drawer.querySelector('dialog');

    drawer.classList.add(CLASS);
    drawer.setAttribute('no-persist', ''); /* don't reopen as a sidebar on the next page */
    if (dialog && !dialog.__wgoCloseHooked) {
      dialog.__wgoCloseHooked = true;
      dialog.addEventListener('close', function () { clearCentered(drawer); });
    }
    if (!drawer.hasAttribute('open')) drawer.open();
    chat.setAttribute('mode', 'managed');
    if (!chat.hasAttribute('open')) openShopifyChat(chat);
    return true;
  }

  function legacyToggle() {
    var host = document.querySelector('inbox-online-store-chat');
    if (host && host.shadowRoot) {
      var b = host.shadowRoot.querySelector('button.chat-toggle, button[aria-controls="chat-ui"]');
      if (b) return b;
    }
    return document.querySelector('#ShopifyChat button[aria-controls="chat-ui"], #dummy-chat-button-iframe');
  }

  function openViaUrl() {
    var search = window.location.search;
    if (/[?&]chat(=|&|$)/.test(search)) return;
    window.location.href = window.location.pathname + (search ? search + '&chat' : '?chat');
  }

  function openReadyChat(chat) {
    return openCentered(chat) || openShopifyChat(chat);
  }

  function openChat() {
    var chat = document.querySelector('shopify-chat');
    if (chat && window.customElements && customElements.get('shopify-chat')) {
      return openReadyChat(chat);
    }
    var toggle = legacyToggle();
    if (toggle) {
      toggle.click();
      return true;
    }
    if (chat && window.customElements) {
      /* Inbox script still loading: wait briefly, then fall back to the URL. */
      var done = false;
      customElements.whenDefined('shopify-chat').then(function () {
        if (!done) { done = true; openReadyChat(chat); }
      });
      setTimeout(function () { if (!done) { done = true; openViaUrl(); } }, 2500);
      return true;
    }
    openViaUrl();
    return true;
  }

  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest(TRIGGERS) : null;
    if (el) {
      e.preventDefault();
      openChat();
      return;
    }
    /* Click on the dimmed page closes the centered chat. */
    var drawer = document.querySelector('theme-drawer.' + CLASS + '[open]');
    if (drawer) {
      var dialog = drawer.querySelector('dialog');
      if (dialog && !dialog.contains(e.target) && typeof drawer.close === 'function') drawer.close();
    }
  }, true);
})();
