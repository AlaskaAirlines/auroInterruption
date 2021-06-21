# auro-dialog

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| `fixed`   | `Boolean` | Uses fixed pixel values for element shape        |
| `md`      | `Boolean` | Sets dialog box to medium style. Adding both md and lg will set the dialog to md for desktop and lg for mobile. |
| `onDark`  | `Boolean` | Sets close icon to white for dark backgrounds    |
| `sm`      | `Boolean` | Sets dialog box to small style. Adding both sm and lg will set the dialog to sm for desktop and lg for mobile. |

## Properties

| Property         | Attribute     | Type          | Description                                      |
|------------------|---------------|---------------|--------------------------------------------------|
| `modal`          | `modal`       | `Boolean`     | Modal dialog restricts the user to take an action (no default close actions) |
| `open`           | `open`        | `Boolean`     | Sets state of dialog to open                     |
| `triggerElement` |               | `HTMLElement` | The element to focus when the dialog is closed. If not set, defaults to the value of document.activeElement when the dialog is opened. |
| `unformatted`    | `unformatted` | `Boolean`     | Unformatted dialog window, edge-to-edge fill for content |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| `content` | Injects content into the body of the modal |
| `footer`  | Used for action options, e.g. buttons      |
| `header`  | Text to display as the header of the modal |


# auro-drawer

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| `fixed`   | `Boolean` | Uses fixed pixel values for element shape        |
| `left`    | `Boolean` | Sets dialog box to open from the left            |
| `md`      | `Boolean` | Sets dialog box to medium style. Adding both md and lg will set the dialog to md for desktop and lg for mobile. |
| `onDark`  | `Boolean` | Sets close icon to white for dark backgrounds    |
| `sm`      | `Boolean` | Sets dialog box to small style. Adding both sm and lg will set the dialog to sm for desktop and lg for mobile. |

## Properties

| Property         | Attribute     | Type          | Description                                      |
|------------------|---------------|---------------|--------------------------------------------------|
| `modal`          | `modal`       | `Boolean`     | Modal dialog restricts the user to take an action (no default close actions) |
| `open`           | `open`        | `Boolean`     | Sets state of dialog to open                     |
| `triggerElement` |               | `HTMLElement` | The element to focus when the dialog is closed. If not set, defaults to the value of document.activeElement when the dialog is opened. |
| `unformatted`    | `unformatted` | `Boolean`     | Unformatted dialog window, edge-to-edge fill for content |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| `content` | Injects content into the body of the modal |
| `footer`  | Used for action options, e.g. buttons      |
| `header`  | Text to display as the header of the modal |
