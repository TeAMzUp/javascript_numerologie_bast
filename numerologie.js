//Exercice de numérologie @ https://www.callac-soft-college.fr/JavaScript/numerologie.pdf
//En cours de refonte pour utiliser des champs de texte plutôt que des alertes...

//DECLARER TABLEAU donné en énoncé ici
//Tableau

var grille = new Array();

var g1 = new Array(1, "A", "J", "S");
var g2 = new Array(2, "B", "K", "T");
var g3 = new Array(3, "C", "L", "U");
var g4 = new Array(4, "D", "M", "V");
var g5 = new Array(5, "E", "N", "W");
var g6 = new Array(6, "F", "O", "X");
var g7 = new Array(7, "G", "P", "Y");
var g8 = new Array(8, "H", "Q", "Z");
var g9 = new Array(9, "I", "R", 0);

grille[0] = g1;
grille[1] = g2;
grille[2] = g3;
grille[3] = g4;
grille[4] = g5;
grille[5] = g6;
grille[6] = g7;
grille[7] = g8;
grille[8] = g9;
var i = 0;
var j = 0;

var prz; // storing first name with uppercase
var noz; // storing family name with uppercase

//alert(grille.length);
//alert(g9.length);

/*
//2e methode
var grille26 = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

for(var i=0; i<26; i++)
	grille26[i] = new Array();

// on parcourt les lignes...
for(var i=0; i<26; i++){
	// ... et dans chaque ligne, on parcourt les cellules
	for(var j=0; j<1; j++){
		grille[i][j] = 0;
	}
}
*/

/*
//Parcours du tableau:
for(var i=0; i<9; i++)
	for(var j=0; j<4; j++)
		alert("Case "+ i + "-" + j +" : "+ grille[i][j]);
*/

//Fonctions pour chaque type de "nombre"...
function calc_prenom (prenoms)
{
	//var firstName = new Array(prenoms.substr(0,1));
	//return firstName[0]; // works
	//return prenoms[0]; // works
	var fixed = prenoms.toUpperCase();
	prz = fixed;
	var le = fixed.length;
	//window.alert(le); // testing length
	//var fir = fixed.charAt(0);
	//window.alert(fir); // testing 1st letter
	//window.alert(grille[0][1]); // testing grille
	
	var conv = 0; // Number return (can be >= 10)
	
	for (var k = 0; k < le; k++){
		for(var i=0; i<9; i++){
			for(var j=1; j<4; j++){
				var str = grille[i][j];
				//var str2 = str.charAt(0); // already char
				if (fixed.charAt(k) == str){
					//alert(fixed.charAt(k)); // testing comparision
					//alert(str);
					var num = grille[i][0];
					conv = conv + num;
				}
			}
		}
	}
	
	var str2 = conv.toString();
	//alert(str2);
	var le2 = str2.length;
	
	var res = 0;
	for (var m = 0; m < le2; m++){
		res = res + parseInt(str2.charAt(m));
	}
	
	return res;
}

function calc_nom (noms)
{
	var fixed = noms.toUpperCase();
	noz = fixed;
	var le2 = fixed.length;
	
	var conv = 0; // Number return (can be >= 10)
	
	for (var k = 0; k < le2; k++){
		for(var i=0; i<9; i++){
			for(var j=1; j<4; j++){
				var strB = grille[i][j];
				//var str2 = str.charAt(0); // already char
				if (fixed.charAt(k) == strB){
					//alert(fixed.charAt(k)); // testing comparision
					//alert(strB);
					var num = grille[i][0];
					conv = conv + num;
				}
			}
		}
	}
	
	var strB2 = conv.toString();
	//alert(strB2);
	var le2 = strB2.length;
	
	var res2 = 0;
	for (var m = 0; m < le2; m++){
		res2 = res2 + parseInt(strB2.charAt(m));
	}
	
	return res2;
}

var prenom = window.prompt("Veuillez indiquer votre prénom");
var nom = window.prompt("Veuillez maintenant indiquer votre nom de famille");

//Pour le nombre actif (ce qui est inné dans votre caractère)
var disp = calc_prenom(prenom); // grâce au nombre retourné
alert("Votre nombre actif est le : " +disp +". C'est ce qui est inné dans votre caractère.");

//Nombre héréditaire (relations) utilisant le même algorithme
var disp2 = calc_nom(nom); // on utilise la même formule!
alert("Votre nombre héréditaire est le : " +disp2 +". C'est la partie qui influe dans vos relations avec les autres.");

//Nombre d'expression (tempérament et caractère)
alert("Votre nombre d'expression (décrivant plus précisément votre caractère) est donc le : " +(disp+disp2) +".");


//Nombre issu des initiales (trait dominant):
function calc_inits (mot1, mot2)
{
	var conv1 = 0; // nombre de la 1ere init
	var conv2 = 0; // nombre de la 2e init
	
	var in1 = mot1.charAt(0);
	for(var i=0; i<9; i++){
		for(var j=1; j<4; j++){
			var strB = grille[i][j];
			//var str2 = str.charAt(0); // already char
			if (in1 == strB){
				//alert(prz.charAt(k)); // testing comparision
				//alert(strB);
				var num = grille[i][0];
				conv1 = num;
			}
		}
	}
	
	var in2 = mot2.charAt(0);
	for(var i=0; i<9; i++){
		for(var j=1; j<4; j++){
			var strB = grille[i][j];
			//var str2 = str.charAt(0); // already char
			if (in2 == strB){
				//alert(prz.charAt(k)); // testing comparision
				//alert(strB);
				var num = grille[i][0];
				conv2 = num;
			}
		}
	}
	
	var inits = conv1 + conv2;
	return inits;
}

alert("Votre trait dominant est représenté par le chiffre : " +calc_inits(prz, noz) +".");
