let accounts = [];
function createAccount(name, balance) {
  accounts.push({ name, balance });
}
function findAccount(name) {
  return accounts.find(acc => acc.name === name);
}
function updateBalance(name, amount) {
  const account = findAccount(name);
  if (account) {
    account.balance += amount;
    console.log(`Updated balance for ${name}: ₹${account.balance}`);
  } else {
    console.log("Account not found.");
  }
}
function showBalance(name) {
  const account = findAccount(name);
  if (account) {
    console.log(`Balance for ${name}: ₹${account.balance}`);
  } else {
    console.log("Account not found.");
  }
}
function transfer(fromName, toName, amount) {
  const from = findAccount(fromName);
  const to = findAccount(toName);
  if (from && to && from.balance >= amount) {
    from.balance -= amount;
    to.balance += amount;
    console.log(`Transferred ₹${amount} from ${fromName} to ${toName}`);
  } else {
    console.log("Transfer failed. Check account names or balance.");
  }
}
function printSummary() {
  accounts.map(acc => {
    console.log(`Name: ${acc.name}, Balance: ₹${acc.balance}`);
  });
}
createAccount("Hemagiri", 1000);
createAccount("Bhaskar", 1000);
updateBalance("Hemagiri", 9000);
updateBalance("Bhaskar", 5000);
showBalance("Hemagiri");
transfer("Hemagiri", "Bhaskar", 2000);
printSummary();
