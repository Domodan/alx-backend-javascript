/**
 * Changes the quantity of unique grocery items to 100.
 * @param {Map<String, number>} map - A map of the name of a
 * grocery and its quantity.
 * @author Daniel Ongom <https://github.com/domodan>
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((quantity, name) => {
    if (quantity === 1) {
      map.set(name, 100);
    }
  });
}
