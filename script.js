var abc = ["texta", "textb", "textc", "textd"];

var buttonwert_a = 0;
var buttonwert_b = 0;
var buttonwert_c = 0;
var buttonwert_d = 0;

var counter_frage = 0;

var richtige = ["1978", "Wolfgang Grenke", "1900", "33", "4. April 2000"];

var erste_frage = ["1978", "1960", "1999", "1964"];
var zweite_frage = [
  "Wolfgang Grenke",
  "Hubert Gränke",
  "Hildegartus Grenki",
  "Robert Grenke",
];
var dreite_frage = ["nur 4 Praktikanten","22000", "5400", "1900"];
var vierte_frage = ["in allen", "33", "22", "11"];
var fünfte_frage = ["4. April 2000", "5. April 2000", "6. April 2000", "7. April 2000"];

var erste_frage2 = ["1978", "1960", "1999", "1964"];
var zweite_frage2 = [
  "Wolfgang Grenke",
  "Hubert Gränke",
  "Hildegartus Grenki",
  "Robert Grenke",
];
var dreite_frage2 = ["nur 4 Praktikanten","22000", "5400", "1900"];
var vierte_frage2 = ["in allen", "33", "22", "11"];
var fünfte_frage2 = ["4. April 2000", "5. April 2000", "6. April 2000", "7. April 2000"];

var fragenzahl = [erste_frage, zweite_frage, dreite_frage, vierte_frage, fünfte_frage];

var fragestellung = ["Wann wurde Grenke gründet?", "Wer hat Grenke gegründet?", "Wie viele Mitarbeiter hat Grenke?", "In wie vielen Ländern ist Gränke vertreten?", "Seit wann ist Grenke an der Börse?"];

function werteaufnull() {
  buttonwert_a = 0;
  buttonwert_b = 0;
  buttonwert_c = 0;
  buttonwert_d = 0;
}

function ende() {
  document.getElementById("startbutton").style.display = "block";
  document.getElementById("a").style.display = "none";
  document.getElementById("b").style.display = "none";
  document.getElementById("c").style.display = "none";
  document.getElementById("d").style.display = "none";
  document.getElementById("überschrift").innerHTML =
    "Herzlich Willkommen zum GRENKE Quiz!";
  erste_frage = erste_frage.concat(erste_frage2);
  zweite_frage = zweite_frage.concat(zweite_frage2);
  dreite_frage = dreite_frage.concat(dreite_frage2);
  vierte_frage = vierte_frage.concat(vierte_frage2);
  fünfte_frage = fünfte_frage.concat(fünfte_frage2);
  counter_frage = 0;
  werteaufnull();
  fragenzahl = [erste_frage, zweite_frage, dreite_frage, vierte_frage, fünfte_frage];
  window.alert("fertig");
}

function frage1() {
  if (counter_frage >= richtige.length) {
    ende();
  } else {
    buttons_farbe();
    document.getElementById("überschrift").innerHTML =
      fragestellung[counter_frage];
    for (i = 0; i < 4; i++) {
      var zwischenspeicher = fragenzahl[counter_frage];
      var anzahl_mögliche_antworten = zwischenspeicher.length;
      var auswahl = Math.floor(Math.random() * anzahl_mögliche_antworten);
      var auserwählte = zwischenspeicher[auswahl];
      document.getElementById(abc[i]).innerHTML = auserwählte;
      zwischenspeicher.splice(auswahl, 1);
    }
  }
}

function buttons_farbe() {
  if (buttonwert_a == 0) {
    document.getElementById("a").style.filter = "grayscale(0%)";
  } else {
    document.getElementById("a").style.filter = "grayscale(100%)";
  }
  if (buttonwert_b == 0) {
    document.getElementById("b").style.filter = "grayscale(0%)";
  } else {
    document.getElementById("b").style.filter = "grayscale(100%)";
  }
  if (buttonwert_c == 0) {
    document.getElementById("c").style.filter = "grayscale(0%)";
  } else {
    document.getElementById("c").style.filter = "grayscale(100%)";
  }
  if (buttonwert_d == 0) {
    document.getElementById("d").style.filter = "grayscale(0%)";
  } else {
    document.getElementById("d").style.filter = "grayscale(100%)";
  }
}

function blocka() {
  var a = document.getElementById("texta").innerHTML;
  if (a == richtige[counter_frage]) {
    counter_frage++;
    werteaufnull();
    buttons_farbe();
    frage1();
  } else {
    buttonwert_a++;
    buttons_farbe();
  }
}

function blockb() {
  var a = document.getElementById("textb").innerHTML;
  if (a == richtige[counter_frage]) {
    counter_frage++;
    werteaufnull();
    buttons_farbe();
    frage1();
  } else {
    buttonwert_b++;
    buttons_farbe();
  }
}

function blockc() {
  var a = document.getElementById("textc").innerHTML;
  if (a == richtige[counter_frage]) {
    counter_frage++;
    werteaufnull();
    buttons_farbe();
    frage1();
  } else {
    buttonwert_c++;
    buttons_farbe();
  }
}

function blockd() {
  var a = document.getElementById("textd").innerHTML;
  if (a == richtige[counter_frage]) {
    counter_frage++;
    werteaufnull();
    buttons_farbe();
    frage1();
  } else {
    buttonwert_d++;
    buttons_farbe();
  }
}

function starte() {
  document.getElementById("startbutton").style.display = "none";
  document.getElementById("a").style.display = "inline-block";
  document.getElementById("b").style.display = "inline-block";
  document.getElementById("c").style.display = "inline-block";
  document.getElementById("d").style.display = "inline-block";
  frage1();
}
