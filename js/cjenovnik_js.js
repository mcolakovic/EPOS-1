function Kalkulator() {

  var table = document.getElementById("Cjenovnik");
  var count = table.rows.length;  
  var cena;
  var kolicina;
  var ukupno = 0;
  for(var i=0; i<count; i++) {    
  
  if (document.getElementById("Cjenovnik").rows[i].cells[0].children[0].checked) {
    cena = document.getElementById("Cjenovnik").rows[i].cells[0].children[0].value;
    kolicina = document.getElementById("Cjenovnik").rows[i].cells[2].children[0].value;
    ukupno = ukupno + parseInt(cena) * parseInt(kolicina);
    }
  }
    document.getElementById("price").value = ukupno + ' €';
  }  