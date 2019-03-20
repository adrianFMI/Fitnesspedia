"use strict"
$(document).ready(function () {
    console.log("doc ready");
    var calMen = 2500; //amount of calories a men should eat a day
    var calWomen = 2000; //amount of calories a women should eat a day
    var cal = 0.00012959782; //amount of kilo = to 1 calorie
    var kg = 7716.18; //amount of calories = to 1 kg
    var feet = 0.3038; //value of feets in meters
    var meter = 3.28084; // value of meters in feets
    var kilo = 2.20462; //value of kilos in pounds
    var lbs = 0.453592; // value of punds in kilos
    var feetInch = 12; // 1 feet = to 12 inches
    var inch = 0.0833333; // value of 1 inch in feets

    $("#unit").change(function () {
        var unit = $("#unit").val();
        if (unit === "Pound-Feet") {
            $("#peso").html("Pounds");
            $("#altura").html("Feet(s)");
            $("#altura2").html("Inch(es)");
        } else if (unit === "Kg-Meters") {
            $("#peso").html("Kilograms");
            $("#altura").html("Meter(s)");
            $("#altura2").html("Centimer(s)");
        }
    });
    $("#bmi").click(function () {
        var unit = $("#unit").val();
        var height = parseInt($("#height").val());
        var height2 = parseInt($("#height2").val());
        var weight = parseInt($("#weight").val());
        if (unit === "Pound-Feet") {
            var tInch = (height * 12) + height2;
            var bmi = 703 * (weight / (tInch * tInch));
            $("#result").html(bmi);
        } else{
            var tHeight=height+(height2/100);
            console.log(height2);
            var bmi = weight/(tHeight*tHeight);
            $("#result").html(bmi);
        }
    });
    //men 10(weight kg)+6.25(height cm) - 5(edad) +5
    //women 10(weight kg)+6.25(height cm) - 5(edad) -161
    
    
});
