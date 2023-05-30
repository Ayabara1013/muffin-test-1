


export default function roll(quantity, value) {
  let rollTotal = 0;

  // roll each die
  const rollSingle = (quantity, value) => {
    let result = Math.floor(Math.random() * value) + 1;
    
    // if (quantity == 1) console.log(result);

    return result;
  }

  // roll all the dice
  const rollMultiple = (quantity, value) => {
    let rollArray = [];

    for (let i = 0; i < quantity; i++) {
      rollArray.push(rollSingle(quantity, value));
    }

    console.log(rollArray);
    return rollArray;
  }
    
  return quantity > 1 ? rollMultiple(quantity, value) : rollSingle(value);
}