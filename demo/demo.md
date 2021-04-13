# Interruption

Auro supports two interruptive components - `auro-dialog` and `auro-drawer`. Both are intrusive interactive components, not passive. The components are best used when there is a requirement the user be made aware of the content being shown, moving focus from the main content to the dialog content.

Both components also support a modal (blocking) state where the user must interact with the content of the component in order to continue. Passive dismissal of the content is not allowed. Users of this state must add a trigger for the user to move beyond this content.

Auro holds the opinions of the [Nielsen Norman Group](https://www.nngroup.com/articles/modal-nonmodal-dialog/) on dialog and modal use to be true.

## Component use cases

The `auro-dialog` and `auro-drawer` components should be used in situations where users may:

* Be prompted to take an action before doing anything else or going back
* Be prompted to view content with the option of closing it

## Dialog example

<div class="exampleWrapper">
  <auro-button onClick="toggleInterruption('#defaultDialog')">Open Default Dialog</auro-button>

  <auro-dialog id="defaultDialog">
    <span slot="header">Default Dialog</span>
    <div slot="content">
      <p>
        When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.
      </p>
      <p>
        Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.
      </p>
      <auro-header level="3" display="500">
        Before checking your bags, remember to:
      </auro-header>
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
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-button onClick="toggleInterruption('#defaultDialog')">Open Default Dialog</auro-button>

<auro-dialog id="defaultDialog">
  <span slot="header">Default Dialog</span>
  <div slot="content">
    <p>
      When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.
    </p>
    <p>
      Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.
    </p>
    <auro-header level="3" display="500">
      Before checking your bags, remember to:
    </auro-header>
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
```
</auro-accordion>

Read the [auro-dialog](https://auro.alaskaair.com/components/auro/interruption/dialog) documentation for detailed instructions on implementations.

## Drawer example

<div class="exampleWrapper">
  <auro-button onClick="toggleInterruption('#defaultDrawer')">Open Default Dialog</auro-button>

  <auro-drawer id="defaultDrawer">
    <span slot="header">Default Dialog</span>
    <div slot="content">
      <p>
        When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.
      </p>
      <p>
        Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.
      </p>
      <auro-header level="3" display="500">
        Before checking your bags, remember to:
      </auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer" className="auro_containedButtons">
      <auro-button secondary onClick="toggleInterruption('#defaultDrawer')">Close</auro-button>
    </div>
  </auro-drawer>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-button onClick="toggleInterruption('#defaultDrawer')">Open Default Dialog</auro-button>

<auro-drawer id="defaultDrawer">
  <span slot="header">Default Dialog</span>
  <div slot="content">
    <p>
      When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.
    </p>
    <p>
      Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.
    </p>
    <auro-header level="3" display="500">
      Before checking your bags, remember to:
    </auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer" className="auro_containedButtons">
    <auro-button secondary onClick="toggleInterruption('#defaultDrawer')">Close</auro-button>
  </div>
</auro-drawer>
```
</auro-accordion>

Read the [auro-drawer](https://auro.alaskaair.com/components/auro/interruption/drawer) documentation for detailed instructions on implementations.
