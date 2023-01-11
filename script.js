var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"];
var date = Math.floor(Math.random() * 30);
var prediction = ["you'll have good news","your day will be rather unpredictable","you should be extra carefull"];
var randMonth = month[Math.floor(Math.random() * month.length)];
var randPrediction = prediction[Math.floor(Math.random() * prediction.length)]
const makePrediction = () => {
    return "On" + " " + randMonth + " " + date + " " + randPrediction;

 //console.log(`On ${randMonth} ${date} ${randPrediction}`)
}
console.log(makePrediction())