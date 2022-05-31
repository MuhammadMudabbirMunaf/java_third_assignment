var empty = [];
document.write("<h3>Q.1 Empty array with literal notation.</h3>");
document.write("[]");

var emptyTwo = {};
document.write("<h3>Q.2 Empty array with object notation.</h3>");
document.write("{}");

var stringArray = ["telephone", "airplane", "helicopter"];
document.write("<h3>Q.3 Strings Array.</h3>");
document.write(stringArray[0] + ", " + stringArray[1] + ", " +  stringArray[2]);

var numberArray = [2, 3, 4];
document.write("<h3>Q.4 Numbers Array.</h3>");
document.write(numberArray[0] + ", " + numberArray[1] + ", " + numberArray[2]);

var booleanArray = ["true", "false"];
document.write("<h3>Q.5 Boolean Array.</h3>");
document.write(booleanArray[0] + ", " + booleanArray[1]);

var mixedArray = ["kite", "cap", 6, 8, "true", "false"];
document.write("<h3>Q.6 Mixed Array.</h3>");
document.write(mixedArray[0] + ", " + mixedArray[1] + ", " + mixedArray[2] + ", " + mixedArray[3] + ", " + mixedArray[4] + ", " + mixedArray[5]);

var mobNets = ["Telenor", "Zong", "Jazz/Warid", "Ufone"];
document.write("<h3>Q.7 Array with Networks available in Pakistan</h3>");
document.write(mobNets[0] + "<br/>" + mobNets[1] + "<br/>" +  mobNets[2] + "<br/>" +  mobNets[3] + "<br/>");

var eduQual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("<h3>Q.8 Array with Education Qualifications available in Pakistan</h3>");
document.write("<h3>Qualifications:</h3> <br/>" + eduQual[0] + "<br/>" + eduQual[1] + "<br/>" + eduQual[2] + "<br/>" + eduQual[3] + "<br/>" + eduQual[4] + "<br/>" + eduQual[5] + "<br/>" + eduQual[6] + "<br/>" + eduQual[7] + "<br/>");

var topMov = ["Avengers: Age of Ultron", "Spectre", "Jurassic World", "Inside Out"];
document.write("<h3>Q.9 Array with Top Movies of 2015</h3>");
document.write(topMov[0] + "<br/>" + topMov[1] + "</br>" + topMov[2] + "</br>" + topMov[3]);

var favCars = ["Audi", "Ford", "Chevrolet", "Bugatti", "Mercedes-Benz<br/>"];
document.write("<h3>Q.10 Array with My Favorite Cars.</h3> <h3>Favorite Cars<br/></h3>");
document.write(favCars[0] + "," + favCars[1] + "," + favCars[2] + "," + favCars[3] + "," + favCars[4] + "<br/>");
document.write("First index of the array: 0"  +"<br/>" + "Car at first index of the array: " + favCars[0] +"<br/>" + "Last index of the array: 4"  +"<br/>" + "Car at last index of the array: " + favCars[4] +"<br/>");

var nameStu = ["Sam", "Mike", "John"];
document.write("<h3>Q.11 Array with student's names, scores and their percentages</h3>");
var stuScore = ["240", "420", "370"];
document.write("Score of " + nameStu[0] + " is " + stuScore[0] + ". Percentage :" + stuScore[0]/500*100 + "% <br/>" + "Score of " + nameStu[1] + " is " + stuScore[1] + ". Percentage :" + stuScore[1]/500*100 + "% <br/>" + "Score of " + nameStu[2] + " is " + stuScore[2] + ". Percentage :" + stuScore[2]/500*100 + "% <br/>");

var colName = ["red", "yellow", "green", "blue", "purple", "orange", "brown"];
document.write("<h3>Q.12 Array with color names</h3>");
document.write([ "<b>" + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "<br/><br/></b>"]);
var colBeg = prompt("A) Which color should add to the beginning");
if (colBeg === "red") {
  document.write("A) " + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "<br/>");
}
else if (colBeg === "yellow") {
    document.write("A) " + colName[1] + "," + colName[0] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "<br/>");
  }
else if (colBeg === "green") {
    document.write("A) " + colName[2] + "," + colName[0] + "," + colName[1] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "<br/>");
}
else if (colBeg === "blue") {
    document.write("A) " + colName[3] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "<br/>");
}
else if (colBeg === "purple") {
    document.write("A) " + colName[4] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[5] + "," + colName[6] + "<br/>");
}
else if (colBeg === "orange") {
    document.write("A) " + colName[5] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[6] + "<br/>");
}
else {
    document.write("A) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "<br/>")
}

var colEnd = prompt("B) Which color should add to the end");
if (colBeg === "red") {
    document.write("B) " + colName[6] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[0] + "<br/>");
  }
else if (colBeg === "yellow") {
      document.write("B) " + colName[6] + "," + colName[0] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[1] + "<br/>");
    }
else if (colBeg === "green") {
      document.write("B) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[2] + "<br/>");
  }
else if (colBeg === "blue") {
      document.write("B) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[4] + "," + colName[5] + "," + colName[3] + "<br/>");
  }
else if (colBeg === "purple") {
      document.write("B) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[5] + "," + colName[4] + "<br/>");
  }
else if (colBeg === "orange") {
      document.write("B) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "<br/>");
  }
else {
      document.write("B) " + colName[5] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[6] + "<br/>")
  }
colName.unshift("pink", "black");
document.write("C) "+ [colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "," + colName[7] + "," + colName[8] + "<br/>"])
colName.shift();
document.write("D) "+ [colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] + "," + colName[7] +"<br/>" ]);
colName.pop();
document.write("E) "+ [colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[6] +"<br/>" ]);

var indAdd = prompt("At which index a color should add");
if (indAdd === "1" || "one") {
  document.write("F) " + colName[6] + ", golden, " + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[0] + "<br/>");
}
else if (indAdd === "2" || "two") {
  document.write("F) " + colName[6] + "," + colName[0] + ", golden, " + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[1] + "<br/>");
}
else if (indAdd === "3" || "three") {
  document.write("F) " + colName[6] + "," + colName[0] + "," + colName[1] + ", golden, " + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[2] + "<br/>");
}
else if (indAdd === "4" || "four") {
  document.write("F) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[2] + ", golden, " + colName[4] + "," + colName[5] + "," + colName[3] + "<br/>");
}
else if (indAdd === "5" || "five") {
  document.write("F) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + ", golden, " + colName[5] + "," + colName[4] + "<br/>");
}
else if (indAdd === "6" || "six") {
  document.write("F) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + ", golden, " + colName[5] + "<br/>");
}
else {
  document.write("F) " + colName[5] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[6] + ", golden, <br/>")
}

var indDel = prompt("At which index a color should delete");
if (indDel === "1" || "one") {
  document.write("G) " + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[0] + "<br/>");
}
else if (indDel === "2" || "two") {
  document.write("G) " + colName[6] + "," + colName[2] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[1] + "<br/>");
}
else if (indDel === "3" || "three") {
  document.write("G) " + colName[6] + "," + colName[0] + "," + colName[3] + "," + colName[4] + "," + colName[5] + "," + colName[2] + "<br/>");
}
else if (indDel === "4" || "four") {
  document.write("G) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[4] + "," + colName[5] + "," + colName[3] + "<br/>");
}
else if (indDel === "5" || "five") {
  document.write("G) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[5] + "," + colName[4] + "<br/>");
}
else if (indDel === "6" || "six") {
  document.write("G) " + colName[6] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[5] + "<br/>");
}
else {
  document.write("G) " + colName[5] + "," + colName[0] + "," + colName[1] + "," + colName[2] + "," + colName[3] + "," + colName[4] + ", <br/>")
}

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selCities = cities.slice(2, 4);
document.write("<h3> Q.15 Array with city names and copy two city names to a new array </h3>");
document.write(cities[0] + "," + cities[1] + "," + cities[2] + "," + cities[3] + "," + cities[4] + "<br/>");
document.write(selCities[0] + "," + selCities[1] + "<br/>");

var arr = ["This", "is", "my", "cat"];
var str = ["This is my cat"];
document.write("<h3> Q.16 Single array from mentioned array </h3>");
document.write(str);

var newArr = ["keyboard", "mouse", "printer", "monitor"];
document.write("<h3> Q.17 Output of array with First-in First-out method </h3>");
document.write(newArr[0] + "<br/>" + newArr[1] + "<br/>" + newArr[2] + "<br/>" + newArr[3] + "<br/>");

var desOrd = ["keyboard", "mouse", "printer", "monitor"];
document.write("<h3> Q.18 Output of array with First-in Last-out method </h3>");
document.write(desOrd[3] + "<br/>" + desOrd[2] + "<br/>" + desOrd[1] + "<br/>" + desOrd[0] + "<br/>");

var multi = [[["empty multidimensional array"]]];
document.write("<h3>Q.20 empty multidimensional array</h3>");
document.write(multi);

var matMulti = [[["0", "1", "2", "3", "1", "0", "1", "2", "2", "1", "0", "1"]]];
document.write("<h3>Q.21 matrix multidimensional array</h3>");
document.write(matMulti[0], matMulti[1], matMulti[2], matMulti[3] + "<br/>" + matMulti[4], matMulti[5], matMulti[6], matMulti[7] + "<br/>" + matMulti[8], matMulti[9], matMulti[10], matMulti[11] + "<br/>");