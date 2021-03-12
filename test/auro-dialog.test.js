import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-dialog.js';
import '../src/auro-drawer.js';
import './test-button.js';

describe('auro-dialog', () => {
  it('auro-dialog is accessible', async () => {
    const el = await fixture(html`
      <auro-dialog open="true">
        <span slot="header">Blocking dialog</span>
        <span slot="content">Hello World!</span>
      </auro-dialog>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-dialog has footer content', async () => {
    const el = await fixture(html`
      <auro-dialog open="true">
        <span slot="header">Blocking dialog</span>
        <span slot="content">Hello World!</span>
        <span slot="footer"><button>Click</button></span>
      </auro-dialog>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-dialog custom element is defined', async () => {
    const el = await !!customElements.get("auro-dialog");

    await expect(el).to.be.true;
  });

  it('auro-dialog modal-dialog does not render a close icon', async () => {
    const el = await fixture(html`
      <auro-dialog modal></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.equal(null);
  });

  it('auro-dialog dialog renders a close icon', async () => {
    const el = await fixture(html`
      <auro-dialog></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.not.equal(null);
  });

  it('auro-dialog closes on non-blocking background click', async () => {
    const el = await fixture(html`
      <auro-dialog>
        <span slot="header">It's a dialog</span>
        <span slot="content">Hello World!</span>
      </auro-dialog>
    `);

    const root = el.shadowRoot;
    const background = root.querySelector('#dialog-overlay');
    let listener = oneEvent(background, 'click');
    background.click();
    await listener;
    expect(el.getAttribute('dialogOverlay--open')).to.equal(null);
  });

  it('auro-dialog renders only a close icon', async () => {
    const el = await fixture(html`
      <auro-dialog unformatted></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.not.equal(null);
  });

  it('auro-dialog renders no close icon', async () => {
    const el = await fixture(html`
      <auro-dialog unformatted modal></auro-dialog>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#dialog-close');
    await expect(title).to.equal(null);
  });
});

describe('auro-drawer', () => {
  it('auro-drawer is accessible', async () => {
    const el = await fixture(html`
      <auro-drawer open="true">
        <span slot="header">Blocking drawer</span>
        <span slot="content">Hello World!</span>
      </auro-drawer>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-drawer custom element is defined', async () => {
    const el = await !!customElements.get("auro-drawer");

    await expect(el).to.be.true;
  });

  it('auro-drawer modal-dialog does not render a close icon', async () => {
    const el = await fixture(html`
      <auro-drawer modal></auro-drawer>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#drawer-close');
    await expect(title).to.equal(null);
  });

  it('closes when ESC pressed', async () => {
    const el = await fixture(html`
      <auro-dialog open>
        <span slot="header">It's a dialog</span>
        <span slot="content">Hello World!</span>
      </auro-dialog>
    `);
  
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await el.updated;
    expect(el.open).to.be.false;
  })
  
  it('does not close when ESC pressed if modal', async () => {
    const el = await fixture(html`
      <auro-dialog open modal>
        <span slot="header">It's a dialog</span>
        <span slot="content">Hello World!</span>
      </auro-dialog>
    `);
  
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await el.updated;
    expect(el.open).to.be.true;
  })

  it('handles focus on open and close', async () => {    
    const el = await getFixtureWithOpenButton();

    const button = document.querySelector('button');
    button.focus();
    button.click();

    await el.updated;
    await sleep(100);
    expect(el.shadowRoot.activeElement).to.equal(el.dialog);

    el.open = false;
    await el.updated;
    await sleep(100);
    expect(document.activeElement).to.equal(button);
  });

  it('makes outside elements inert and aria-hidden', async () => {    
    const el = await getFixtureWithOpenButton();
  
    const button = document.querySelector('button');
    button.focus();
    button.click();
  
    await el.updated;
    await sleep(100);
    expect(button.hasAttribute('inert')).to.be.true;
    expect(button.getAttribute('aria-hidden')).to.equal('true');
  
    el.open = false;
    await el.updated;
    await sleep(100);
    expect(button.hasAttribute('inert')).to.be.false;
    expect(button.hasAttribute('aria-hidden')).to.be.false;
  });

  it('outside custom elements cannot be focused', async () => {
    const el = await fixture(html`
      <auro-dialog>
        <span slot="header">It's a dialog</span>
        <span slot="content">Hello World!</span>
      </auro-dialog>
      <test-button>Try to focus me</test-button>
    `);

    el.open = true;
    await el.updated;
    await sleep(100);

    const button = document.querySelector('test-button');
    button.focus();

    expect(document.activeElement).to.not.equal(button);
  });

  it('dispatches toggle event on close', async () => {
    const el = await fixture(html`
      <auro-dialog open>
        <span slot="header">It's a dialog</span>
        <span slot="content">Hello World!</span>
      </auro-dialog>
    `);

    el.open = false;
    await oneEvent(el, 'toggle');
  });
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getFixtureWithOpenButton() {
  const open = function() {
    el.open = true;
  }
  const el = await fixture(html`
    <auro-dialog>
      <span slot="header">It's a dialog</span>
      <span slot="content">Hello World!</span>
    </auro-dialog>
    <button @click=${open}>Open</button>
  `);
  return el;
}
