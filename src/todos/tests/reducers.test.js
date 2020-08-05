import { expect } from 'chai';
import { todos } from '../reducers.js'

describe('The todos reducer', () => {
  it('Adds a new todo when CREATE_TODO is called', () => {
    const fakeTodo = { text: 'hello', isCompleted: false};
    const fakeAction = { type: 'CREATE_TODO', payload: { todo: fakeTodo }}
    const originalState = { isLoading: false, todos: []}
    const expected = {isLoading: false, todos: [fakeTodo]}
    const actual = todos(originalState, fakeAction)
    expect(actual).to.deep.equal(expected)
  })
})