export function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.error(`❌ ${name}`);
    console.error(error.message);
  }
}

export function expect(received) {
  return {
    toBe(expected) {
      if (received !== expected) {
        throw new Error(`Expected "${expected}" but got "${received}"`);
      }
    },
  };
}
