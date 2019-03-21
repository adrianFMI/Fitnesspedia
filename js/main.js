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
    var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < foods.length; i++) { //fills the option for food dropmenu
        $("#food").append(`<option>${foods[i]}</option>`);
    }
    for (var x = 0; x < exercises.length; x++) { //fill the options for exercise dropmenu
        $("#exercise").append(`<option>${exercises[x]}</option>`);
    }
    for (var n = 0; n < hours.length; n++) { //fill the options for exercise dropmenu
        $("#number").append(`<option>${hours[n]}</option>`);
    }


    $("#unit").change(function () { //Change the value of  metric units in thelabels for BMI
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
    $("#bmi").click(function () { //calculates your BMI depending the metric units you use
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
    $("#metric").change(function () { //Change the value for metric units for the label in the weight calculator
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
    var totalCal = $("#totalCal");
    var tCals = 0;
    console.log(totalCal);
    $("#add").click(function () { //adds and calculate the amount of calories you eat
        var inFood = $("#food").val();
        if (inFood === "Apple(4oz)") {
            tCals = tCals + 59;
            totalCal.html(" " + tCals);
        } else if (inFood === "Banana(6oz.)") {
            tCals = tCals + 151;
            totalCal.html(" " + tCals);
        } else if (inFood === "Orange(4oz.)") {
            tCals = tCals + 53;
            totalCal.html(" " + tCals);
        } else if (inFood === "Cucumber(4oz)") {
            tCals = tCals + 17;
            totalCal.html(" " + tCals);
        } else if (inFood === "Carrots(1cup)") {
            tCals = tCals + 50;
            totalCal.html(" " + tCals);
        } else if (inFood === "Brocolli(1cup)") {
            tCals = tCals + 45;
            totalCal.html(" " + tCals);
        } else if (inFood === "Beef(2oz.)") {
            tCals = tCals + 142;
            totalCal.html(" " + tCals);
        } else if (inFood === "Chicken(2oz.)") {
            tCals = tCals + 136;
            totalCal.html(" " + tCals);
        } else if (inFood === "Pizza(slice)") {
            tCals = tCals + 285;
            totalCal.html(" " + tCals);
        } else if (inFood === "Beer(1can)") {
            tCals = tCals + 154;
            totalCal.html(" " + tCals);
        } else if (inFood === "Coke(1can)") {
            tCals = tCals + 150;
            totalCal.html(" " + tCals);
        }
    });
    //men 10(weight kg)+6.25(height cm) - 5(edad) +5  formulas to calculate right amount of calories for men and women
    //women 10(weight kg)+6.25(height cm) - 5(edad) -161
    $("#submit2").click(function () { //Calculate the amount of days you require to lose the amount of weight you want
        var gender = $("#gender").val();
        var mUnits = $("#metric").val();
        var actHeight = parseInt($("#inHeight").val());
        var secondUnit = parseInt($("#secondHeight").val());
        var actWeight = parseInt($("#inWeight").val());
        var age = $("#age").val();
        var getExercise = $("#exercise").val();
        var getHours = parseInt($("#number").val());
        var calPerson = 0;
        if (gender === "Male") {
            if (mUnits === "Feet-pound") {
                var burnCal = 0; //Amount of calories a person use per exercise
                if (getExercise === "Walk") {
                    burnCal = 267 * getHours;
                } else if (getExercise === "Swimming") {
                    burnCal = (492 * getHours);
                } else if (getExercise === "Running") {
                    burnCal = 773 * getHours;
                } else if (getExercise === "Bicycling") {
                    burnCal = 562 * getHours;
                } else if (getExercise === "Football") {
                    burnCal = 494 * getHours;
                } else if (getExercise === "Basketball") {
                    burnCal = 422 * getHours;
                } else if (getExercise === "Soccer") {
                    burnCal = 492 * getHours;
                }
                var conToKilo = actWeight * lbs;
                var conToInch = actHeight * feetInch;
                var tInch = conToInch + secondUnit;
                var conToCms = tInch * 2.54;
                calPerson = (10 * conToKilo) + (6.25 * conToCms) - (5 * age) + 5; //Amount a calories a men need without do exercise
            } else if (mUnits === "Meter-KG") {
                var burnCal = 0; //Amount of calories a person use per exercise
                if (getExercise === "Walk") {
                    burnCal = 267 * getHours;
                } else if (getExercise === "Swimming") {
                    burnCal = (492 * getHours);
                } else if (getExercise === "Running") {
                    burnCal = 773 * getHours;
                } else if (getExercise === "Bicycling") {
                    burnCal = 562 * getHours;
                } else if (getExercise === "Football") {
                    burnCal = 494 * getHours;
                } else if (getExercise === "Basketball") {
                    burnCal = 422 * getHours;
                } else if (getExercise === "Soccer") {
                    burnCal = 492 * getHours;
                }
                var tcms = (actHeight * 100) + secondUnit;
                calPerson = (10 * actWeight) + (6.25 * tcms) - (5 * age) + 5; //Amount a calories a men need without do exercise
            }

        } else if (gender === "Female") {
            if (mUnits === "Feet-pound") {
                var burnCal = 0; //Amount of calories a person use per exercise
                if (getExercise === "Walk") {
                    burnCal = 267 * getHours;
                } else if (getExercise === "Swimming") {
                    burnCal = (492 * getHours);
                } else if (getExercise === "Running") {
                    burnCal = 773 * getHours;
                } else if (getExercise === "Bicycling") {
                    burnCal = 562 * getHours;
                } else if (getExercise === "Football") {
                    burnCal = 494 * getHours;
                } else if (getExercise === "Basketball") {
                    burnCal = 422 * getHours;
                } else if (getExercise === "Soccer") {
                    burnCal = 492 * getHours;
                }
                var conToKilo = actWeight * lbs;
                var conToInch = actHeight * feetInch;
                var tInch = conToInch + secondUnit;
                var conToCms = tInch * 2.54;
                calPerson = (10 * conToKilo) + (6.25 * conToCms) - (5 * age) - 161; //Amount a calories a women need without do exercise
            } else if (mUnits === "Meter-KG") {
                var burnCal = 0; //Amount of calories a person use per exercise
                if (getExercise === "Walk") {
                    burnCal = 267 * getHours;
                } else if (getExercise === "Swimming") {
                    burnCal = (492 * getHours);
                } else if (getExercise === "Running") {
                    burnCal = 773 * getHours;
                } else if (getExercise === "Bicycling") {
                    burnCal = 562 * getHours;
                } else if (getExercise === "Football") {
                    burnCal = 494 * getHours;
                } else if (getExercise === "Basketball") {
                    burnCal = 422 * getHours;
                } else if (getExercise === "Soccer") {
                    burnCal = 492 * getHours;
                }
                var tcms = (actHeight * 100) + secondUnit;
                calPerson = (10 * actWeight) + (6.25 * tcms) - (5 * age) - 161; //Amount a calories a women need without do exercise
            }
        }
        var showResults = $("#goalDays");
        var intake = tCals - (calPerson + burnCal); //total of calories a person get by day
        var dweight = parseInt($("#dWeight").val());
        var weightToLose = actWeight - dweight;
        if (intake > 0) {
            showResults.html(`You are going to get ${intake.toFixed(2)} calories per day`);
        } else {
            if (mUnits === "Feet-pound") {
                var topositiveIntake = Math.abs(intake);
                var wlConPunds = weightToLose / kilo;//conversion of pounds to kilos
                var calToKilos = topositiveIntake / kg;
                var daysToGoal = wlConPunds / calToKilos;
                showResults.html(`You will your ideal weight in ${Math.round(daysToGoal)} days`);
            } else if (mUnits === "Meter-KG") {
                var topositiveIntake = Math.abs(intake);
                var calToKilos = topositiveIntake / kg;
                var daysToGoal = weightToLose / calToKilos;
                showResults.html(`You will your ideal weight in ${Math.round(daysToGoal)} days`);
            }
        }
    });
    //reset button
});
