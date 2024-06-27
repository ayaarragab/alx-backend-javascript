export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = array.indexOf(value);
    array[idx] = appendString + value; // eslint-disable-line no-param-reassign
  }
  return array;
}
