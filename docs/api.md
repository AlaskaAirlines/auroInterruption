# auro-dialog

auro-dialog appear above the page and require the user's attention.

## Attributes

| Attribute | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `fixed`   | `Boolean` | Uses fixed pixel values for element shape |
| `md`      | `Boolean` | Sets dialog box to medium style           |
| `sm`      | `Boolean` | Sets dialog box to small style            |

## Properties

| Property | Attribute | Type      | Description                                      |
|----------|-----------|-----------|--------------------------------------------------|
| `modal`  | `modal`   | `Boolean` | Modal dialog restricts the user to take an action (no default close actions) |
| `open`   | `open`    | `Boolean` | Sets state of dialog to open                     |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| `content` | Injects content into the body of the modal |
| `footer`  | Used for action options, e.g. buttons      |
| `header`  | Text to display as the header of the modal |
