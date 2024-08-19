let arr=[2,1,4,6,3,6,9,8];
arr.sort(function(a, b){return a - b});
document.getElementById("toSortArray").innerHTML="array after sorting: "+arr;
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
document.getElementById("highestElement").innerHTML=myArrayMax(arr);
function toFahrenheit(celsius) {
    return (celsius*(9/5))+32;
}
document.getElementById("celsiusToFahrenheit").innerHTML="36 Celsius="+toFahrenheit(35)+" Fahrenheit";