/**
 * Recursively traverses a node's siblings and makes them inert and aria-hidden so that
 * keyboard and screen reader focus is trapped within the dialog.
 * @param {*} node The node whose siblings should be made inert
 * @returns {function} Cleanup function that removes inert and aria-hidden from the affected nodes.
 */
export function makeSiblingsInert(node) {
  const inertElements = [];
  const hiddenElements = [];

  function handleInert(node) {
    if (node.parentNode) {
      for (const elem of node.parentNode.childNodes) {
        if (elem !== node && elem.nodeType === Node.ELEMENT_NODE) {
          elem.inert = true;
          inertElements.push(elem);

          if (!elem.hasAttribute('aria-hidden')) {
            elem.setAttribute('aria-hidden', true);
            hiddenElements.push(elem);
          }
        }
      }
      if (node.parentNode !== document.body) {
        handleInert(node.parentNode);
      }
    }
  }

  function cleanupNodes() {
    inertElements.forEach(el => el.removeAttribute('inert'));
    hiddenElements.forEach(el => el.removeAttribute('aria-hidden'));
  }

  handleInert(node);
  return cleanupNodes;
}
