import uuid from 'short-uuid'

const rootDivId = `popup-${ uuid().new() }`
const portalDivId = `${ rootDivId }-portal`

document.body.innerHTML += `
  <div id="${ rootDivId }"></div>
  <div id="${ portalDivId }"></div>
`

export {
  rootDivId,
  portalDivId
}
