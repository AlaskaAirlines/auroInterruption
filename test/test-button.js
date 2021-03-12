import { LitElement, html } from 'lit-element';

class TestButton extends LitElement {
  focus() {
    this.renderRoot.querySelector('button').focus();
  }

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

if (!customElements.get('test-button')) {
  customElements.define('test-button', TestButton);
}
