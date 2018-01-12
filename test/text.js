const expect = require("chai").expect;
const convWeight = require("..").default;

describe("#conv-weight", function() {
  it("conversion of kilograms to all units", function() {
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
    expect(JSON.stringify(conv)).to.equal(JSON.stringify(result));
  });
  it("conversion of pounds to all units", function() {
    const param = {
      in: { weight: 10, unit: "lb" },
      out: ["kg", "lb", "stone", "gr", "ton", "oz"]
    };
    const result = {
      kg: 4.53592,
      lb: 10,
      stone: 0.71429,
      gr: 4535.92,
      ton: 0.00454,
      oz:160
    };
    const conv = convWeight(param);
    expect(JSON.stringify(conv)).to.equal(JSON.stringify(result));
  });
});
