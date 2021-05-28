// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import 'wicg-inert';

import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';
import styleUnformattedCssFixed from './style-unformatted-fixed-css.js';
import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-lg_es6.js';
import { makeSiblingsInert } from './util.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-dialog appear above the page and require the user's attention.
 *
 * @attr {Boolean} modal - Modal dialog restricts the user to take an action (no default close actions)
 * @attr {Boolean} fixed - Uses fixed pixel values for element shape
 * @attr {Boolean} unformatted - Unformatted dialog window, edge-to-edge fill for content
 * @attr {Boolean} sm - Sets dialog box to small style
 * @attr {Boolean} md - Sets dialog box to medium style
 * @attr {Boolean} [sm lg] - Sets dialog to sm for desktop and lg for mobile
 * @attr {Boolean} [md lg] - Sets dialog to md for desktop and lg for mobile
 * @attr {Boolean} onDark - Sets close icon to white for dark backgrounds
 * @attr {Boolean} open - Sets state of dialog to open
 * @slot header - Text to display as the header of the modal
 * @slot content - Injects content into the body of the modal
 * @slot footer - Used for action options, e.g. buttons
 * @function toggleViewable - toggles the 'open' property on the element
 */

// build the component class
export default class ComponentBase extends LitElement {
  constructor() {
    super();

    /**
     * @private internal variable
     */
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');

    /**
     * @private internal variable
     */
    this.svg = this.dom.body.firstChild;

    this._open = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      modal: { type: Boolean },
      unformatted: { type: Boolean },
      open: {
        type: Boolean,
        reflect: true
      }
    };
  }

  // This function removes a CSS selector if the footer slot is empty
  firstUpdated() {
    const slot = this.shadowRoot.querySelector("#footer"),
      slotWrapper = this.shadowRoot.querySelector("#footerWrapper");

    this.dialog = this.shadowRoot.getElementById('dialog');

    if (!this.unformatted && slot.assignedNodes().length === 0) {
      return slotWrapper.classList.remove("dialog-footer");
    }
  }

  get open() {
    return this._open;
  }

  set open(val) {
    const oldVal = this._open;

    this._open = val;
    this.requestUpdate('open', oldVal).then(() => {
      this.open ? this.openDialog() : this.closeDialog()
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.keydownEventHandler = this.handleKeydown.bind(this);
    window.addEventListener('keydown', this.keydownEventHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.keydownEventHandler);
  }

  /**
   * @private internal function
   */
  openDialog() {
    this.triggerElement = document.activeElement;
    setTimeout(() => {
      this.focus();
      this.cleanupInertNodes = makeSiblingsInert(this);
    }, 50);
  }

  /**
   * @private internal function
   */
  closeDialog() {
    this.dispatchToggleEvent();
    this.cleanupInertNodes();
    // Wait for the inert polyfill to react to the DOM change
    Promise.resolve().then(() => { this.triggerElement.focus() } );
  }

  /**
   * @private internal function
   */
  dispatchToggleEvent() {
    // replace with Event constructor once IE support dropped
    const toggleEvent = document.createEvent("HTMLEvents");
    toggleEvent.initEvent("toggle", true, false);
    this.dispatchEvent(toggleEvent);
  }

  /**
   * @private internal function
   */
  handleOverlayClick() {
    if (this.open && !this.modal) {
      this.handleCloseButtonClick();
    }
  }

  /**
   * @private internal function
   */
  handleCloseButtonClick() {
    this.open = false;
  }

  /**
   * @private internal function
   */
  handleKeydown({ key, keyCode }) {
    if (this.open && !this.modal && (key === 'Escape' || keyCode === 27)) {
      this.open = false;
    }
  }

  /**
   * @private internal function
   * Focus the dialog.
   */
  focus() {
    if (this.open) {
      this.dialog.focus();
    }
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed,
      styleUnformattedCssFixed
    ];
  }

  /**
   * @private internal function
   */
  getCloseButton() {
    return this.modal ?
      html`` :
      html`
        <button class="dialog-header--action" id="dialog-close" @click="${this.handleCloseButtonClick}">
          <span>${this.svg}</span>
          <span class="util_displayHiddenVisually">Close</span>
        </button>
      `
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const classes = {
      'dialogOverlay': true,
      'dialogOverlay--modal': this.modal && this.open,
      'dialogOverlay--open': this.open,
      'util_displayHidden': !this.open
    },

     contentClasses = {
      'dialog': true,
      'dialog--open': this.open
    }

    return html`
      <div class="${classMap(classes)}" id="dialog-overlay" @click=${this.handleOverlayClick}></div>

      <div role="dialog" id="dialog" class="${classMap(contentClasses)}" aria-labelledby="dialog-header" tabindex="-1">
        ${this.unformatted
          ? html`
            <slot name="content"></slot>
            ${this.getCloseButton()}
          `
          : html`
            <div class="dialog-header">
              <h1 class="heading heading--700 util_stackMarginNone--top" id="dialog-header">
                <slot name="header">Default header ...</slot>
              </h1>
              ${this.getCloseButton()}
            </div>
            <div class="dialog-content">
              <slot name="content"></slot>
            </div>
            <div class="dialog-footer" id="footerWrapper">
              <slot name="footer" id="footer"></slot>
            </div>
          `
        }
      </div>
    `;
  }
}
