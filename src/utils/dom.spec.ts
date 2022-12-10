import {
  rootDivId,
  portalDivId
} from './dom'

it('should return rootDivId', () => {
  expect(rootDivId).toBeTruthy()
})

it('should exists rootDivId on document', () => {
  expect(document.getElementById(rootDivId)).toBeInTheDocument()
})

it('should return portalDivId', () => {
  expect(portalDivId).toBeTruthy()
})

it('should exists portalDivId on document', () => {
  expect(document.getElementById(portalDivId)).toBeInTheDocument()
})
