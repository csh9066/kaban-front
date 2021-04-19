export function reorder<T>(
  list: T[],
  sourceIndex: number,
  destinationIndex: number
): T[] {
  const result = [...list];
  const [item] = result.splice(sourceIndex, 1);
  result.splice(destinationIndex, 0, item);
  return result;
}
