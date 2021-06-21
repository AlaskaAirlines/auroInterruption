import { LitElement, html } from 'lit-element';

class NestedShadow extends LitElement {
  openDialog() {
    const dialog = this.shadowRoot.querySelector('auro-dialog');
    const button = this.shadowRoot.querySelector('button');
    
    dialog.open = true;
    dialog.triggerElement = button;
  }

  render() {
    return html`
      <button @click=${this.openDialog}>Open dialog</button>
      <auro-dialog>
        <p>The dialog is open</p>
      </auro-dialog>
    `;
  }
}

if (!customElements.get('nested-shadow')) {
  customElements.define('nested-shadow', NestedShadow);
}
