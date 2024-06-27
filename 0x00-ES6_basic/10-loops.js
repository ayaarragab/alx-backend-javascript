export default function appendToEachArrayValue(array, appendString) {
  const newArr = [...array];
  for (const idx of newArr) {
    const value = newArr[idx];
    newArr[idx] = appendString + value;
  }
  return newArr;
}
