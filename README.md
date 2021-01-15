# auro-interruption

`<auro-dialog>` and `<auro-drawer>` are parts of a family of [HTML custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for displaying content to a user in both a dialog and modal-dialog format.

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/workflow/status/AlaskaAirlines/auro-interruption/Test%20and%20publish?branch=master&style=for-the-badge)](https://github.com/AlaskaAirlines/auro-interruption/actions?query=workflow%3A%22test+and+publish%22)
[![See it on NPM!](https://img.shields.io/npm/v/@alaskaairux/auro-interruption?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@alaskaairux/auro-interruption)
[![License](https://img.shields.io/npm/l/@alaskaairux/auro-interruption?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @alaskaairux/auro-interruption
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define auro-dialog dependency in project component

Defining the component dependency within each component that is using the `<auro-dialog>` component.

```javascript
import "@alaskaairux/auro-interruption/dist/auro-dialog";
import "@alaskaairux/auro-interruption/dist/auro-drawer";
```

**Reference component in HTML**

```html
<auro-dialog id="demo1">
  <span slot="header">Modal</span>
  <span slot="content">Hello World!</span>
</auro-dialog>

<auro-drawer id="demo2">
  <span slot="header">Modal</span>
  <span slot="content">Hello World!</span>
</auro-drawer>
```

## Install auro-interruption bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

Since the legacy bundle includes many polyfills that are not needed by modern browsers, we recommend you load these bundles using [differential serving](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) so that the browser only loads the bundle it needs. To accomplish this, the script tag for the modern bundle should have `type="module"` and the script tag for the legacy bundle should have the `nomodule` attribute. See the example below.

**NOTE:** Be sure to replace `@latest` in the URL with the version of the asset you want. @latest is NOT aware of any MAJOR releases, use at your own risk.

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />

<script src="https://unpkg.com/@alaskaairux/auro-interruption@latest/dist/auro-interruption__bundled.es5.js" nomodule></script>
<script src="https://unpkg.com/@alaskaairux/auro-interruption@latest/dist/auro-interruption__bundled.js" type="module"></script>
```

## auro-dialog use cases

The `<auro-dialog>` or `<auro-drawer>` elements should be used in situations where users may:

* Be prompted to take an action before doing anything else or going back
* Be prompted to view content with the option of closing it

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the **Gulp tasks**, the second is for a series of **npm tasks** and the last is to run the **dev server**.

```shell
// shell terminal one
$ npm run dev

// shell terminal two
$ npm run serve
```

Open [localhost:8000](http://localhost:8000/)

### Testing
Automated tests are required for every Auro component. See `.\test\auro-dialog.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.
