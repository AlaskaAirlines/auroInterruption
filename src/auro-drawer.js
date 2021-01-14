// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// import { html } from "lit-element";
// import { classMap } from 'lit-html/directives/class-map';
import ComponentBase from './component-base';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-drawer-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @attr {Boolean} left - Sets dialog box to open from the left
 */

// build the component class
class AuroDrawer extends ComponentBase {
  // constructor() {
  //   super();
  // }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      // use custom accessors on base class
      open: {
        ...super.properties.open,
        noAccessor: true
      }
    };
  }

  static get styles() {
    return [
      super.styles,
      styleCss,
    ];
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-drawer")) {
  customElements.define("auro-drawer", AuroDrawer);
}
