let temperature = 25;

if (temperature < 0) {
  console.log("ყინავს!");
} else if (temperature >= 0 && temperature <= 10) {
  console.log("ძალიან ცივა");
} else if (temperature >= 11 && temperature <= 20) {
  console.log("ცივა");
} else if (temperature >= 21 && temperature <= 30) {
  console.log("თბილა");
} else {
  console.log("ცხელა!");
}