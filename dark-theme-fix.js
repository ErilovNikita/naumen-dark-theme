(function () {
  const styleId = 'dark-admin-fix'

  function applyStyles() {
    if (document.getElementById(styleId)) return

    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
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
        background-color: #262626 !important;
        background: #262626 !important;
      }
      #adminModule .nau-ThreeStateCheckBox input {
        border: 1px #fff solid;
     }
    `

    document.head.appendChild(style)
  }

  applyStyles()

  new MutationObserver(applyStyles).observe(document.documentElement, {
    childList: true,
    subtree: true,
  })
})()