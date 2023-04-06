// Start at the top of the page
window.scrollTo( (document.top))

$(document).ready(function() {
    // Activate the accordion component
    $('#accordionExample').collapse({
      toggle: false
    });
    $('#submit1').click(function() {
        // Code to be executed when the button is clicked
        // For example, show an alert message
        alert('Danke!');
    });
   
      $('#submit2').click(function() {
        // Holen Sie die Werte aus dem Formular
        var artDerKleidung = $('#type2').val();
        var kriesengebiet = $('#area2').val();
        var StraseHausnummer = $('#straseHausnummer2').val();
        var Stadt = $('#stadt2').val();
        var postleitzahl = $('#postleitzahl2').val();
    
        // Holen Sie die aktuelle Zeit und das Datum
        var currentTime = new Date();
        var currentDateTime = currentTime.toLocaleString();
    
        // Erstellen Sie eine Ausgabezeichenfolge mit den Werten und der aktuellen Zeit und Datum n anstatt br
        var outputString = "Art der Kleidung: " + artDerKleidung + "\n" +
                           "Kriesengebiet: " + kriesengebiet + "\n" +
                           "Straße & Hausnummer: " + StraseHausnummer + "\n" +
                           "Stadt: " + Stadt + "\n" +
                           "Postleitzahl: " + postleitzahl + "\n" +
                           "Aktuelle Zeit und Datum: " + currentDateTime;
    
        // Zeigen Sie die Ausgabezeichenfolge als Alert-Nachricht an
        alert(outputString);
    });
  });
;
