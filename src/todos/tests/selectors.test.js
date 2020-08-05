import { expect } from 'chai'
import { getCompleteTodos } from '../selectors'

describe('The getCompleteTodos selector', () => {
  it('Returns only completed todos', () => {
    const fakeTodos = [{text: 'Climb Mount Everest', isCompleted: false},{ text: 'Say Hello', isCompleted: true},{ text: 'Say Goodbye', isCompleted: false}]
    const actual = getCompleteTodos.resultFunc(fakeTodos)
    const expected = [{ text: 'Say Hello', isCompleted: true}]
    expect(actual).to.deep.equal(expected)
  })
})