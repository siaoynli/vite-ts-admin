
export function isNumber(x: unknown): x is number {
  return typeof x === 'number';
}


export function isArray(x: unknown): x is unknown[] {
  return Array.isArray(x);
}

