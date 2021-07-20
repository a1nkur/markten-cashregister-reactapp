export default function ExchangeCal(arr, amtToReturn, setError) {
  let finalArr;
  let temp = amtToReturn;

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
    while (temp !== 0) {
      finalArr = arr.map(item => {
        if (item.currenyFaceValue <= temp) {
          let qty = Math.floor(temp / item.currenyFaceValue);
          let remainder = temp % item.currenyFaceValue;
          temp = remainder;
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
