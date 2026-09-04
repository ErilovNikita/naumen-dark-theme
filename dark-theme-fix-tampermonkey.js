// ==UserScript==
// @name         Naumen Dark Theme Fixes
// @namespace    https://github.com/ErilovNikita/naumen-dark-theme
// @version      1.0.0
// @description  Дополнительные CSS-фиксы для тёмной темы NSD
// @match        *://*/sd/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict'

  const STYLE_ID = 'naumen-dark-theme-fixes'

  const CSS = `
    #adminModule .g-button {
      background: #3a3a3a !important;
      background-color: #3a3a3a !important;
      border-color: #6b6767 !important;
      color: #ffffff !important;
    }

    #adminModule .g-button:hover {
      background: #505050 !important;
      background-color: #505050 !important;
      color: #ffffff !important;
    }

    #adminModule .g-button:active,
    #adminModule .g-button:focus {
      background: #202225 !important;
      background-color: #202225 !important;
      color: #ffffff !important;
    }

    #adminModule .g-button[disabled],
    #adminModule .g-button.disabled {
      background: #2f2f2f !important;
      background-color: #2f2f2f !important;
      color: #999999 !important;
      opacity: 1 !important;
    }

    #adminModule .g-button *,
    #adminModule .g-button-text {
      color: #ffffff !important;
    }

    #adminModule .CodeMirror-gutters {
      background-color: #4b4b4b !important;
    }

    #gwt-debug-navContent {
      border-right-color: #262626 !important;
    }

    #gwt-debug-collapseNavTreeButton {
      background: #373636 !important;
    }

    #gwt-debug-collapseNavTreeButton:hover {
      background: #505050 !important;
    }

    #adminModule img {
      background: transparent !important;
    }

    #gwt-debug-stickyHeaderContainer .attr-list thead {
      background-color: #262626 !important;
    }

    #adminModule .table-style-2 td {
      background: #262626 !important;
      background-color: #262626 !important;
    }

    #adminModule .nau-ThreeStateCheckBox input {
      border: 1px solid #ffffff !important;
    }
  `

  function installStyles() {
    if (document.getElementById(STYLE_ID)) return

    const style = document.createElement('style')
    style.id = STYLE_ID
    style.textContent = CSS

    const target = document.head || document.documentElement
    target.appendChild(style)
  }

  installStyles()

  // NSD может пересоздать head при смене GWT-состояния.
  new MutationObserver(installStyles).observe(document.documentElement, {
    childList: true,
  })
})()