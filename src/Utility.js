/* eslint-disable no-loop-func */
export default function ExchangeCal(arr, amtToReturn, setError) {
  let finalArr;
  let tempValue = amtToReturn;

  if (amtToReturn < 0) {
    setError("Cash is less than the bill, please enter the right amount.");
    return arr;
  } else if (amtToReturn === 0) {
    finalArr = arr.map(item => {
      if (item.currenyFaceValue === amtToReturn) {
        return {
          currenyFaceValue: amtToReturn,
          quantity: 1,
        };
      } else {
        return item;
      }
    });
  } else {
    while (tempValue !== 0) {
      finalArr = arr.map(item => {
        if (item.currenyFaceValue <= tempValue) {
          let qty = Math.floor(tempValue / item.currenyFaceValue);
          let remainder = tempValue % item.currenyFaceValue;
          tempValue = remainder;
          return {
            currenyFaceValue: item.currenyFaceValue,
            quantity: qty,
          };
        } else {
          return item;
        }
      });
    }
  }
  return finalArr;
}
