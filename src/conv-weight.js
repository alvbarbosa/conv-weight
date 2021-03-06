export default function convWeight(params) {
  const input = params["in"];
  const output = params["out"];

  if (input == undefined || output == undefined)
    throw new Error("undefined parameters");

  const conv = {
    oz: 0.0283495,
    lb: 0.453592,
    stone: 6.35029,
    gr: 0.001,
    kg: 1,
    ton: 1000
  };

  let response = {};
  output.forEach(element => {
    if (conv[element] != undefined) {
      response[element] =
        Math.round(
          input["weight"] * conv[input["unit"]] * 100000 / conv[element]
        ) / 100000;
    }
  });
  return response;
}
