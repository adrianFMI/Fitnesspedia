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
    var foods = ["Apple(4oz)", "Banana(6oz.)", "Orange(4oz.)", "Cucumber(4oz)", "Carrots(1cup)", "Brocolli(1cup)", "Beef(2oz.)", "Chicken(2oz.)", "Pizza(slice)", "Beer(1can)", "Coke(1can)"];
    var exercises = ["Walk", "Swimming", "Running", "Bicycling", "Football", "Basketball", "Soccer"];
    for (var i = 0; i < foods.length; i++) {//fills the option for food dropmenu
        $("#food").append(`<option>${foods[i]}</option>`);
    }
    for (var x = 0; x < exercises.length; x++) {//fill the options for exercise dropmenu
        $("#exercise").append(`<option>${exercises[x]}</option>`);
    }

    $("#unit").change(function () {//Change the value of  metric units in thelabels for BMI
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
    $("#bmi").click(function () {//calculates your BMI depending the metric units you use
        var unit = $("#unit").val();
        var height = parseInt($("#height").val());
        var height2 = parseInt($("#height2").val());
        var weight = parseInt($("#weight").val());
        if (unit === "Pound-Feet") {
            var tInch = (height * 12) + height2;
            var bmi = 703 * (weight / (tInch * tInch));
            $("#result").html(bmi);
        } else {
            var tHeight = height + (height2 / 100);
            console.log(height2);
            var bmi = weight / (tHeight * tHeight);
            $("#result").html(bmi);
        }
    });
    //men 10(weight kg)+6.25(height cm) - 5(edad) +5  formulas to calculate right amount of calories for men and women
    //women 10(weight kg)+6.25(height cm) - 5(edad) -161
    $("#metric").change(function () {//Change the value for metric units for the label in the weight calculator
        var metricUnit = $("#metric").val();
        if (metricUnit === "Feet-pound") {
            $("#valWeight").html("Pounds");
            $("#valHeight").html("Feet(s)");
            $("#valHeight2").html("Inch(es)");
        } else if (metricUnit === "Meter-KG") {
            $("#valWeight").html("Kilograms");
            $("#valHeight").html("Meter(s)");
            $("#valHeight2").html("Centimeter(s)");
        }
    });
    $("#add").click(function () {//adds and calculate the amount of calories you eat
        var inFood = $("#foof").val();
        if (inFood==="Apple(4oz)") {

        }
    });
    $("#submit2").click(function () {//Calculate the amount of days you require to lose the amount of weight you want
        var gender = $("#gender").val();
        console.log(gender);
    });
});
