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
    if (!customerChoice) {
      noChocolate();
      break;
    }
    customerChoice = checkCustomerChoice(customerChoice);
    if (!customerChoice) {
      invalidChoice();
      continue;
    }
    const chocolateStock = getChocolateStock();
    const output = informCustomer(customerChoice, chocolateStock);
    showOutput(output);
    if (selectAgain(false)) {
      continue;
    } else {
      thanksForShopping();
      break;
    }
  }
};

const getCustomerInput = () => {
  return prompt("Please select from our chocolate samples A, B , C and D");
};

const formatCustomerInput = (customerChoice) => {
  if (customerChoice || customerChoice === "") {
    return customerChoice.trim().toUpperCase();
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't select from our list.");
  return selectAgain();
};

const noChocolate = () => {
  alert("You'll get our plain chocolate");
};

const checkCustomerChoice = (customerChoice) => {
  if (
    customerChoice === "A" ||
    customerChoice === "B" ||
    customerChoice === "C" ||
    customerChoice === "D"
  ) {
    return customerChoice;
  } else {
    return false;
  }
};

const thanksForShopping = () => {
  alert("Thank you for shopping with Us");
};

const selectAgain = () => {
  confirm("Enter a valid chocolate sample")
}

const getChocolateStock = () => {
  const randomizedsweet = Math.floor(Math.random() * 4);
  const Sweetgroup = [
    "Stewberry Sweet",
    "Vanilla Sweet",
    "Apple & Milk Sweet",
    "Banana Sweet",
  ];
  return Sweetgroup[randomizedsweet];
};



