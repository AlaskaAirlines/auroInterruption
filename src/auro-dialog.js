// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// import { html } from "lit-element";
// import { classMap } from 'lit-html/directives/class-map';
import ComponentBase from './component-base';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";

// build the component class
class AuroDialog extends ComponentBase {
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
    return [super.styles];
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-dialog")) {
  customElements.define("auro-dialog", AuroDialog);
}
