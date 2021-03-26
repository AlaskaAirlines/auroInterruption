import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-interruption.js';

describe('auro-interruption', () => {
  it('sets the CSS class on auro-interruption > div element', async () => {
    const el = await fixture(html`
      <auro-interruption cssclass="testClass"></auro-interruption>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-interruption is accessible', async () => {
    const el = await fixture(html`
      <auro-interruption cssclass="testClass"></auro-interruption>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-interruption custom element is defined', async () => {
    const el = await !!customElements.get("auro-interruption");

    await expect(el).to.be.true;
  });
});
