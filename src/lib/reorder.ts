export function reorder<T>(
  list: T[],
  sourceIndex: number,
  destinationIndex: number
): T[] {
  const [item] = list.splice(sourceIndex, 1);
  list.splice(destinationIndex, 0, item);
  return list;
}
