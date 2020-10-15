export const swap = (arr, index, direction) => {
  //if true move down, if false move up
  const nextElem = direction ? index + 1 : index - 1;
  const condition = direction ? nextElem >= arr.length : nextElem < 0;
  if(condition) return
  [arr[index], arr[nextElem]] = [arr[nextElem], arr[index]]
}