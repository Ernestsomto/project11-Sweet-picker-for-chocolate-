//Javascript code to help a customer pick from a chocolate sweet types

const initSweet = () => {
  const sweetChoice = confirm(
    "Would you like to pick from our list of Chocolate sweets?"
  );
  sweetChoice
    ? sweetPicker()
    : alert("Thank you for shopping with us, You are Awesome!");
};

//sweet picker loop
const sweetPicker = () => {
  while (true) {
    let customerChoice = getCustomerInput();
    customerChoice = formatCustomerInput(customerChoice);
    if (customerChoice === "") {
      invalidChoice();
      continue;
    }
  }
  if (!customerChoice) {
    noChocolate();
  }
};
