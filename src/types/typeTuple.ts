const customerData: readonly [number, string] = [1, "Lucio"];
const customerDataTwo: [number, string, string] = [1, "Bruce", "Wayne"];
const customerDataTree: [number, string, string?] = [1, "John"];
const customerDataFor: [number, string, ...string[]] = [1, "John", "Doe", "Jane"];

console.log(customerData);
console.log(customerDataTwo);
console.log(customerDataTree);
console.log(customerDataFor);
