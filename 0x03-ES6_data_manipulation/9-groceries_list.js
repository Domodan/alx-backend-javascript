/**
 * Retrieves a map of grocery names and their quantity.
 * @author Daniel Ongom <https://github.com/domodan>
 * @returns {Map<string, Number>}
 */
export default function groceriesList() {
  const mapValues = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(mapValues);
}
