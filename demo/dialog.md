# Dialog

The `auro-dialog` is an intrusive interactive components, not passive. The component is best used when there is a requirement the user be made aware of the content being shown, moving focus from the main content to the dialog content.

The component also supports a modal (blocking) state where the user must interact with the content of the component in order to continue. Passive dismissal of the content is not allowed. Users of this state must add a trigger for the user to move beyond this content.

Auro holds the opinions of the [Nielsen Norman Group](https://www.nngroup.com/articles/modal-nonmodal-dialog/) on dialog and modal use to be true.

## Component use cases

The `auro-dialog` component should be used in situations where users may:

* Be prompted to take an action before doing anything else or going back
* Be prompted to view content with the option of closing it

## The setup

Triggering the dialog relies on functions being installed. See the following example code that is installed into this demo.

Notice the use of `body.style.overflow = 'hidden';`. This is an a11y feature that will lock the background scroll when the dialog is open. These events need to be triggered for this to work. The auro-dialog component's built-in close feature for modal dialogs is also pre-configured to address this.

If for any reason this feature is unwanted, simple remove this reference and the dialog will scroll as expected. NOTE: This comes highly unrecommended.

```javascript
toggleInterruption = (elName) => {
  let interruption = document.querySelector(elName);
  const html = document.querySelector('html');

  interruption.hasAttribute('open')
  ? interruption.removeAttribute("open")
  : (interruption.removeAttribute("open"),
    interruption.setAttribute("open", true))
}
```

Once the JavaScript is added to the scope of the experience, the next part is adding a trigger. In this example, the button component will toggle a dialog with the ID of `#demo1`.

```javascript
<auro-button onClick="toggleInterruption('#demo1')">Open Default Dialog</auro-button>
```

## The structure

The structure of the dialog itself consists of three slots. The `header`, `content` and `footer` slots. See the scaffolding example below for adding content to the component.

```javascript
  <auro-dialog id="[unique ID]">
    <span slot="header">[header content]</span>
    <span slot="content">
      [body content]
    </span>
    <span slot="footer">
      [footer content]
    </span>
  </auro-dialog>
```

It should be noted that the `footer` slot is reserved for the placement of action buttons.

## Dialog size options (sm, md, default)

The auro-dialog supports three different sizes. A default dialog is equal to the large size dialog. Using the `sm` and `md` attributes, the component supports these sizes for both mobile and desktop.

The size attribute effects the `width` of the desktop dialog. Its `height` is dictated by the content. On mobile, the `size` attribute effects the `maximum height` the dialog will use of the device screen. Its width will be 100%.


<div class="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick="toggleInterruption('#defaultDialog')">Open default dialog</auro-button>
  <auro-button onClick="toggleInterruption('#mediumDialog')">Open medium dialog</auro-button>
  <auro-button onClick="toggleInterruption('#smallDialog')">Open small dialog</auro-button>
</div>

<auro-dialog id="defaultDialog">
  <span slot="header">Default Dialog</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer" className="auro_containedButtons">
    <auro-button secondary onClick="toggleInterruption('#defaultDialog')">Close</auro-button>
  </div>
</auro-dialog>

<auro-dialog id="mediumDialog" md>
  <span slot="header">Medium Dialog</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer" className="auro_containedButtons">
    <auro-button secondary onClick="toggleInterruption('#mediumDialog')">Close</auro-button>
  </div>
</auro-dialog>

<auro-dialog id="smallDialog" sm>
  <span slot="header">Small Dialog</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer" className="auro_containedButtons">
    <auro-button secondary onClick="toggleInterruption('#smallDialog')">Close</auro-button>
  </div>
</auro-dialog>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <div class="demo--inline exampleWrapper auro_containedButtons">
    <auro-button onClick="toggleInterruption('#defaultDialog')">Open default dialog</auro-button>
    <auro-button onClick="toggleInterruption('#mediumDialog')">Open medium dialog</auro-button>
    <auro-button onClick="toggleInterruption('#smallDialog')">Open small dialog</auro-button>
  </div>

  <auro-dialog id="defaultDialog">
    <span slot="header">Default Dialog</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer" className="auro_containedButtons">
      <auro-button secondary onClick="toggleInterruption('#defaultDialog')">Close</auro-button>
    </div>
  </auro-dialog>

  <auro-dialog id="mediumDialog" md>
    <span slot="header">Medium Dialog</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer" className="auro_containedButtons">
      <auro-button secondary onClick="toggleInterruption('#mediumDialog')">Close</auro-button>
    </div>
  </auro-dialog>

  <auro-dialog id="smallDialog" sm>
    <span slot="header">Small Dialog</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer" className="auro_containedButtons">
      <auro-button secondary onClick="toggleInterruption('#smallDialog')">Close</auro-button>
    </div>
  </auro-dialog>
```

</auro-accordion>

## Modal Dialog and size options (sm, md, default)

The auro-dialog supports a modal dialog state that will lock a user into interacting with the modal dialog. To activate, use the modal attribute.

When using this state, the modal dialog must include a button action to dismiss the modal dialog as the closing icon will not be available and the user will not be able to click outside the `modal` dialog to dismiss.

<div class="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick="toggleInterruption('#defaultModalDialog')">Open default modal</auro-button>
  <auro-button onClick="toggleInterruption('#mediumModalDialog')">Open medium modal</auro-button>
  <auro-button onClick="toggleInterruption('#smallModalDialog')">Open small modal</auro-button>
</div>

<auro-dialog id="defaultModalDialog" modal>
  <span slot="header">Default Modal Dialog</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer" class="auro_containedButtons">
    <auro-button onClick="toggleInterruption('#defaultModalDialog')">I understand
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-dialog>

<auro-dialog id="mediumModalDialog" md modal>
  <span slot="header">Medium Dialog</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer" class="auro_containedButtons">
    <auro-button onClick="toggleInterruption('#mediumModalDialog')">I understand
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-dialog>

<auro-dialog id="smallModalDialog" sm modal>
  <span slot="header">Small Dialog</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer" class="auro_containedButtons">
    <auro-button onClick="toggleInterruption('#smallModalDialog')">I understand
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-dialog>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <div class="demo--inline exampleWrapper auro_containedButtons">
    <auro-button onClick="toggleInterruption('#defaultModalDialog')">Open default modal</auro-button>
    <auro-button onClick="toggleInterruption('#mediumModalDialog')">Open medium modal</auro-button>
    <auro-button onClick="toggleInterruption('#smallModalDialog')">Open small modal</auro-button>
  </div>

  <auro-dialog id="defaultModalDialog" modal>
    <span slot="header">Default Modal Dialog</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer" class="auro_containedButtons">
      <auro-button onClick="toggleInterruption('#defaultModalDialog')">I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </span>
  </auro-dialog>

  <auro-dialog id="mediumModalDialog" md modal>
    <span slot="header">Medium Dialog</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer" class="auro_containedButtons">
      <auro-button onClick="toggleInterruption('#mediumModalDialog')">I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </span>
  </auro-dialog>

  <auro-dialog id="smallModalDialog" sm modal>
    <span slot="header">Small Dialog</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer"> class="auro_containedButtons">
      <auro-button onClick="toggleInterruption('#smallModalDialog')">I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>
  ```

</auro-accordion>

## Dialog with decoupled experiences

For use case where the size of the dialog on desktop should not influence the size of the dialog on mobile, the combination API of `sm lg` and `md lg` can be used.

The use of these combinations will set the first value to the dialog for a desktop experience. The second value will set the mobile experience to be up to 90% of the screen depending on the length of the content.

See the following examples.

<div class="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick="toggleInterruption('#smLgDialog')">Open [sm lg] dialog</auro-button>
  <auro-button onClick="toggleInterruption('#smMdDialog')">Open [md lg] dialog</auro-button>
</div>

<auro-dialog id="smLgDialog" sm lg>
  <span slot="header">Small Modal Dialog</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer" class="auro_containedButtons">
    <auro-button onClick="toggleInterruption('#smLgDialog')">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-dialog>

<auro-dialog id="smMdDialog" md lg>
  <span slot="header">Medium Modal Dialog</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer" class="auro_containedButtons">
    <auro-button onClick="toggleInterruption('#smMdDialog')">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-dialog>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <div class="demo--inline exampleWrapper auro_containedButtons">
    <auro-button onClick="toggleInterruption('#smLgDialog')">Open [sm lg] dialog</auro-button>
    <auro-button onClick="toggleInterruption('#smMdDialog')">Open [md lg] dialog</auro-button>
  </div>

  <auro-dialog id="smLgDialog" sm lg>
    <span slot="header">Small Modal Dialog</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer" class="auro_containedButtons">
      <auro-button onClick="toggleInterruption('#smLgDialog')">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>

  <auro-dialog id="smMdDialog" md lg>
    <span slot="header">Medium Modal Dialog</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer" class="auro_containedButtons">
      <auro-button onClick="toggleInterruption('#smMdDialog')">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-dialog>

  ```
</auro-accordion>

## Unformatted dialog

For use case where the use of a dialog is to be more freeform, but the experience and base tooling for the dialog are still requested, there is the `unformatted` property.

This property can be used in combination of any other use case of the dialog, but it will render a unformatted dialog window allowing for full customization of content within the scope of the window.

### Responsive padding

Part of the dialog design spec is its responsive padding. To take advantage of this for your content within the scope of the dialog, be sure to use the selector `unformattedWrapper` that can be imported from the package here:

```scss
import '@alaskaairux/auro-interruption/dist/style-unformatted.scss'
```

### Accessibility

Within the scope of the auro-dialog there is `aria-labelledby="dialog-header"`. To make proper use of this, in an unformatted dialog, the developer is required to add `id="dialog-header"` to the content header within the dialog content.

<div class="demo--inline exampleWrapper auro_containedButtons">
  <auro-button onClick="toggleInterruption('#unformattedMdDialog')">Unformatted Medium Dialog</auro-button>
</div>

<!--
  This needs to be replaced with a link to the
  remote when published.
-->
<style>
  [unformatted] .unformattedWrapper{
  padding:2rem;
  padding:var(--auro-size-xl); }
  @media screen and (min-width: 1024px){
    [unformatted] .unformattedWrapper{
      padding:4rem;
      padding:var(--auro-size-xxxl);
      padding-top:2rem;
      padding-top:var(--auro-size-xl); } }
</style>

<auro-dialog id="unformattedMdDialog" unformatted md lg ondark>
  <span slot="content">
    <img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
    <div class="unformattedWrapper">
      <h1 id="dialog-header">This is a header</h1>
      These are words that are slotted into the scope of the custom element.
    </div>
  </span>
</auro-dialog>

<!-- <auro-accordion> -->
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
  <link rel="stylesheet" href="https://unpkg.com/.../dist/style-unformatted.css">

  <auro-button onClick="toggleInterruption('#unformattedMdDialog')">Unformatted Medium Dialog</auro-button>

  <auro-dialog id="unformattedMdDialog" unformatted md lg ondark>
    <span slot="content">
      <img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
      <div class="unformattedWrapper">
        <h1 id="dialog-header">This is a header</h1>
        These are words that are slotted into the scope of the custom element.
      </div>
    </span>
  </auro-dialog>
```
</auro-accordion>
