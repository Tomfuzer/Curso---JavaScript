// const markWeights = 78;
// const markHeight = 1.69;
// const johnWeights = 92;
// const johnHeight = 1.95;

const markWeights = 95;
const markHeight = 1.88;
const johnWeights = 85;
const johnHeight = 1.76;

//BMI = mass / height**2 = mass / (height * height)

let markBmi = markWeights / (markHeight * markHeight);
console.log(markBmi);
let johnBmi = johnWeights / (johnHeight * johnHeight);
console.log(johnBmi);

markBmi = markWeights / markHeight ** 2;
console.log(markBmi);
johnBmi = johnWeights / johnHeight ** 2;
console.log(johnBmi);

let markHigherBMI;

markHigherBMI = (markBmi > johnBmi);
console.log(markHigherBMI);
