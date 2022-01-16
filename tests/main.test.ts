import * as assert from 'assert';
import t from '../dist/main.js';

it('Success', () => {
  const o: unknown = new Error('123');
  t(o);
  assert.strictEqual(o.message, '123');
});

it('Error', () => {
  const o: unknown = '123';
  assert.throws(() => t(o), { message: 'The argument `err` is not an `Error`, got "123".' });
});
