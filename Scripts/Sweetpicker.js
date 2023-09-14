//Javascript code to help a customer pick from a chocolate sweet types

//sweet picker stater
const initSweet = () => {
  const sweetChoice = confirm("Would you like to pick from our list of Chocolate sweets?");
  sweetChoice ? sweetPicker() : alert("Thank you for shopping with us, You are Awesome!");
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
    if (selectAgain()) {
      continue;
    } else {
      thanksForShopping();
      break;
    }
  }
};

//Variable defination
const getCustomerInput = () => {
  return prompt("Please select from our chocolate samples: White chocolate, Milk chocolate, Dark Chocolate, Ruby Chocolate ");
};

const formatCustomerInput = (customerChoice) => {
  if (customerChoice || customerChoice === "") {
    return customerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't select from our list.");
  
};

const noChocolate = () => {
  alert("You'll get our plain chocolate");
};

//Maybe adding a radio button with HTML To make the selection easier
const checkCustomerChoice = (customerChoice) => {
  if (
    customerChoice === "white chocolate" ||
    customerChoice === "milk chocolate" ||
    customerChoice === "dark chocolate" ||
    customerChoice === "ruby chocolate"
  ) {
    return customerChoice;
  } else {
    return false;
  }
};

const thanksForShopping = () => {
  alert("Thank you for shopping with Us");
};

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

//Logic definition 
const informCustomer = (customer, shopStock) => {
  const message =
    customer === shopStock
      ? "No sweets!"
      : customer === "White Chocolate" && shopStock === "Stewberry Sweet"
      ? `Customer's Choice: ${customer}\nShop Stock: ${shopStock}\nYou'll get a ${customer} and an awesome ${shopStock} combination!`
      : customer === "Milk Chocolate" && shopStock === "Vanilla Sweet"
      ? `Customer's Choice: ${customer}\nShop Stock: ${shopStock}\nYou'll get a ${customer} and an awesome ${shopStock} combination!`
      : customer === "Dark Chocolate" && shopStock === "Apple & Milk Sweet"
      ? `Customer's Choice: ${customer}\nShop Stock: ${shopStock}\nYou'll get a ${customer} and an awesome ${shopStock} combination!`
      : customer === "Ruby Chocolate" && shopStock === "Banana Sweet"
      ? `Customer's Choice: ${customer}\nShop Stock: ${shopStock}\nYou'll get a ${customer} and an awesome ${shopStock} combination!`
      : `Customer's Choice: ${customer}\nShop Stock: ${shopStock}\nYou'll get a ${customer} and an awesome ${shopStock} combination!`;


  return message;
};

const showOutput = (output) => {
  alert(output)
};

const selectAgain = () => {
  return confirm("Would you love to check another Sweet?")
}


//starts the sweetpicker, will be adding some html and css to fire the function.
//initSweet(); commented out the sweetpicker starter for control
