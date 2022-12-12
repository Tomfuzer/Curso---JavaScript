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
let johnBmi = johnWeights / (johnHeight * johnHeight);

markBmi = markWeights / markHeight ** 2;
console.log(markBmi);
johnBmi = johnWeights / johnHeight ** 2;
console.log(johnBmi);

let markHigherBMI;

if (markHigherBMI = (markBmi > johnBmi)) {
    console.log(`Mark's BMI eh maior (${johnBmi}) `);
} else {
    console.log(`John's BMI eh maior (${johnBmi}) `);
}

/*if (markHigherBMI = (markBmi < johnBmi)) {
    console.log(markBmi);
} else {
    console.log(johnBmi);
}*/
