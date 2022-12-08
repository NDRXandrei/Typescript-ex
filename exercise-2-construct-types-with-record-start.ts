/**
 * START: Follow the instructions below.
 */

// Fix this use of the `Record` utility type so it constructs a valid type.
type USA = "USA";

const currency: Record<USA, Currency> = {
  USA: {
    name: "United States dollar",
    code: "USD",
    symbol: "$",
  },
};

// Add a type annotation to the `currencies` variable that uses
// the `Record` utility type.
// Hint: Pass the `Currency` type as the second type argument to `Record<>`.

interface Currency {
  name: string;
  code: string;
  symbol: string;
}

type Country = "france" | "china" | "colombia";

const currencies: Record<Country, Currency> = {
  france: {
    name: "Euro",
    code: "EUR",
    symbol: "€",
  },
  china: {
    name: "Renminbi",
    code: "CNY",
    symbol: "¥",
  },
  colombia: {
    name: "Colombian peso",
    code: "COP",
    symbol: "$",
  },
};

console.log(currency);
console.log(currencies);

// ----

export {};
