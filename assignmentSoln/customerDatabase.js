// create object

const customer = {
  name: "John Doe",
  accountNumber: "123456789",
  accountType: "Savings",
  balance: 5000,
};

console.log(
  "name:",
  customer.name,
  "accountNumber",
  customer.accountNumber,
  "balance",
  customer.balance
);
// Create a function that takes in the customer data as the first parameter, and a key (i.e. name, accountNumber, accountType and balance) in type string. The function should return the value of the 2nd parameter. Also, set the 2nd parameter default value to “balance”. Call the function and console.log the result.
function getCustomerData(customer, key = "balance") {
  return customer[key];
}
console.log(getCustomerData(customer));

// Create an array of customer objects for various customers.

const customerList = [
  {
    name: "John Doe",
    accountNumber: "123456789",
    accountType: "Savings",
    balance: 5000,
  },
  {
    name: "Bruce Wayne",
    accountNumber: "102945786",
    accountType: "Savings",
    balance: 9000,
  },

  {
    name: "Clark Kent",
    accountNumber: "182736409",
    accountType: "Savings",
    balance: 7500,
  },
];

for (let i = 0; i < customerList.length; i++) {
  const customer = customerList[i];
  console.log(`Customer Name: ${customer.name}, Balance: ${customer.balance}`);
}

// use the find method to find a customer by account number, print account details if found
const accountNumberToFind = "123456789";
const customerFound = customerList.find(
  (customer) => customer.accountNumber === accountNumberToFind
);

if (customerFound) {
  console.log("Customer found:", customerFound);
} else {
  console.log("Customer with account number", accountNumberToFind, "not found");
}

// filter customer by threshold, print account details if found
const thresholdAmount = "7000";
const customersAboveThreshold = customerList.filter(
  (customer) => customer.balance > thresholdAmount
);

if (customersAboveThreshold) {
  console.log("Customer found:", customersAboveThreshold);
} else {
  console.log("Customer above threshold", "not found");
}

// Use the sort method to sort customers by their balance in descending order.
customerList.sort((a, b) => b.balance - a.balance);
console.log(customerList);

// Use the map method to create a new array of strings where each string is a customer name and their balance.

const customerDetails = customerList.map(
  (customer) => `${customer.name}: $${customer.balance}`
);
console.log(customerDetails);
