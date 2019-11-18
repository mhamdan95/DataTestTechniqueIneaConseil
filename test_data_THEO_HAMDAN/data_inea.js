/*!
 * JavaScript test Technique.
 * Afficher, Ajouter, modifier et supprimer les informations des utilisateur.
 * @by Théo Hamdan
 * Etudiant à l'école ETNA - Développeur.
 * Email : m.hamdan@outlook.fr
 */
 
$(function(){

   var users = [];

   $.getJSON('data.json', function(data){
       $.each(data.utilisateur, function(i, user){
          var tableau = "<tr>" + "<td>" + user.id + "</td>" + "<td>" + user.nom + "</td>" +
           "<td>" + user.prenom + "</td>" + "<td>" + user.profession + "</td>" +
           "<td>" + user.age + "</td>" + "<td>" + user.telephone + "</td>" + "<td>" + user.email + "</td>" + "</tr>"
           $(tableau).appendTo("#table tbody");
     });

   });

});

var donneeTable,
    table = document.getElementById("table");

function verification_Donnee(){
    var vide = false,
        id = document.getElementById("id").value;
        nom = document.getElementById("nom").value,
        prenom = document.getElementById("prenom").value,
        profession = document.getElementById("profession").value;
        age = document.getElementById("age").value;
        telephone = document.getElementById("telephone").value;
        email = document.getElementById("email").value;
}

// rajouter un rangé / row
function Ajout_TableRow(){
    if(!verification_Donnee()){
    var nouveauRow = table.insertRow(table.length),
        cell1 = nouveauRow.insertCell(0),
        cell2 = nouveauRow.insertCell(1),
        cell3 = nouveauRow.insertCell(2),
        cell4 = nouveauRow.insertCell(3),
        cell5 = nouveauRow.insertCell(4),
        cell6 = nouveauRow.insertCell(5),
        cell7 = nouveauRow.insertCell(6),
        id = document.getElementById("id").value;
        nom = document.getElementById("nom").value,
        prenom = document.getElementById("prenom").value,
        profession = document.getElementById("profession").value;
        age = document.getElementById("age").value;
        telephone = document.getElementById("telephone").value;
        email = document.getElementById("email").value;
    cell1.innerHTML = id;
    cell2.innerHTML = nom;
    cell3.innerHTML = prenom;
    cell4.innerHTML = profession;
    cell5.innerHTML = age;
    cell6.innerHTML = telephone;
    cell7.innerHTML = email;
    // J'appelle ma fonction selectedRowToInput pour mettre en place le nouveau row
    selectedRowToInput();
    }
}

// Afficher les données row sélectionnées.
function selectedRowToInput(){
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
          // get the seected row index
          donneeTable = this.rowIndex;
          document.getElementById("id").value = this.cells[0].innerHTML;
          document.getElementById("nom").value = this.cells[1].innerHTML;
          document.getElementById("prenom").value = this.cells[2].innerHTML;
          document.getElementById("profession").value = this.cells[3].innerHTML;
          document.getElementById("age").value = this.cells[4].innerHTML;
          document.getElementById("telephone").value = this.cells[5].innerHTML;
          document.getElementById("email").value = this.cells[6].innerHTML;
        };
    }
}
selectedRowToInput();

function modifier_donnee(){
    var id = document.getElementById("id").value;
        nom = document.getElementById("nom").value,
        prenom = document.getElementById("prenom").value,
        profession = document.getElementById("profession").value;
        age = document.getElementById("age").value;
        telephone = document.getElementById("telephone").value;
        email = document.getElementById("email").value;
      if(!verification_Donnee()){
          table.rows[donneeTable].cells[0].innerHTML = id;
          table.rows[donneeTable].cells[1].innerHTML = nom;
          table.rows[donneeTable].cells[2].innerHTML = prenom;
          table.rows[donneeTable].cells[3].innerHTML = profession;
          table.rows[donneeTable].cells[4].innerHTML = age;
          table.rows[donneeTable].cells[5].innerHTML = telephone;
          table.rows[donneeTable].cells[6].innerHTML = email;
      }
}

function suppression_donnee(){
    table.deleteRow(donneeTable);
    document.getElementById("id").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
    document.getElementById("telephone").value = "";
    document.getElementById("email").value = "";
}