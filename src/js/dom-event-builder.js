export class DOMEventBuilder {
  listen(elem, event, callback) {
    elem.addEventListener(event, callback)
  }
}