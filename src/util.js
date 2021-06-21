/* eslint-disable func-style */
/**
 * Recursively traverses a node's siblings and makes them inert and aria-hidden so that
 * keyboard and screen reader focus is trapped within the dialog.
 * @param {*} node The node whose siblings should be made inert
 * @returns {function} Cleanup function that removes inert and aria-hidden from the affected nodes.
 */
export function makeSiblingsInert(node) {
  const hiddenElements = [],
    inertElements = [];

  /**
   * Applies inert recursively to a node's siblings.
   * @param {Element} currentNode The node whose siblings should be made inert
   * @returns {void}
   */
  function handleInert(currentNode) {
    if (currentNode.parentNode) {
      for (const elem of currentNode.parentNode.childNodes) {
        if (elem !== currentNode && elem.nodeType === Node.ELEMENT_NODE) {
          elem.inert = true;
          inertElements.push(elem);

          if (!elem.hasAttribute('aria-hidden')) {
            elem.setAttribute('aria-hidden', true);
            hiddenElements.push(elem);
          }
        }
      }
      if (currentNode.parentNode !== document.body) {
        handleInert(currentNode.parentNode);
      }
    }
  }

  /**
   * Removes inert and aria-hidden from the affected nodes.
   * @returns {void}
   */
  function cleanupNodes() {
    inertElements.forEach((el) => el.removeAttribute('inert'));
    hiddenElements.forEach((el) => el.removeAttribute('aria-hidden'));
  }

  handleInert(node);

  return cleanupNodes;
}
