# Convert weight units

Weight units converter

## Description of the module

Conversion is made between the following units:

- 'kg' Kilogram
- 'lb' Libra
- 'stone' stone
- 'gr' gram
- 'ton' tons
- 'oz' ounces
The function receives an object with two parameters one is the data of the input data and the other is an array that says which units are the ones that you want to convert

## Installation

```
npm install conv-weight
```

## Uso

```
import convWeight from 'conv-weight'

const param = {
    in: { weight: 10, unit: "kg" },
    out: ["kg", "lb", "stone", "gr", "ton", "oz"]
};
const result = {
    kg: 10,
    lb: 22.04624,
    stone: 1.57473,
    gr: 10000,
    ton: 0.01,
    oz:352.73991
};
const conv = convWeight(param);
```

## Créditos
- [Andres Barbosa](https://twitter.com/AndresBarbsa)

## Licencia

[MIT](https://opensource.org/licenses/MIT)