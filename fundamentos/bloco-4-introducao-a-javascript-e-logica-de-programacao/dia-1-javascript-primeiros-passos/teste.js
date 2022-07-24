let angleA = 100;
let angleB = 30;
let angleC = -1;

let sumOfAngles = angleA + angleB + angleC;

let allAnglesArePositive = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesArePositive) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro Angulo Invalido");
}
