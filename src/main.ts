export default function mustBeErr(err: unknown): asserts err is Error {
  if (err instanceof Error === false) {
    throw new Error(`The argument \`err\` is not an \`Error\`, got "${err}".`);
  }
}
