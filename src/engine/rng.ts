/** Stable integer hash followed by Mulberry32. No ambient randomness is used. */
export function seedFrom(...parts: readonly string[]): number {
  let hash = 2166136261;
  for (const character of parts.join("\u241f")) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function rollD20(seed: number): number {
  let value = (seed + 0x6d2b79f5) | 0;
  value = Math.imul(value ^ (value >>> 15), value | 1);
  value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
  const fraction = ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  return Math.floor(fraction * 20) + 1;
}
