 // Fonction pour afficher/cacher le texte
 function toggleText() {
    var text = document.getElementById('hiddenText');
    text.style.display = (text.style.display === 'none' || text.style.display === '') ? 'block' : 'none';
}
function toggleText2() {
    var text = document.getElementById('hiddenText2');
    text.style.display = (text.style.display === 'none' || text.style.display === '') ? 'block' : 'none';
}
function toggleText3() {
    var text = document.getElementById('hiddenText3');
    text.style.display = (text.style.display === 'none' || text.style.display === '') ? 'block' : 'none';
}
function change(evt, nom) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(nom).style.display = "block";
    evt.currentTarget.className += " active";
  }
document.getElementById("defaultOpen").click();

