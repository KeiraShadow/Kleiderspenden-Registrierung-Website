// Start at the top of the page
window.scrollTo( (document.top))

$(document).ready(function() {
    // Activate the accordion component
    $('#accordionExample').collapse({
      toggle: false
    });
    
    $('#submit1').click(function() {
        // Holen Sie die Werte aus dem Formular
        var artDerKleidung = $('#type1').val();
        var kriesengebiet = $('#area1').val();
         // Überprüfen, ob alle erforderlichen Felder ausgefüllt sind
        if (artDerKleidung.trim() === '' || kriesengebiet.trim() === '') {
        alert('Bitte füllen Sie alle mit * gekenzeichneten Felder aus.');
        return; // Stoppt die Ausführung des restlichen Codes
        }
        {
          // Holt die aktuelle Zeit und das Datum
          var currentTime = new Date();
          var currentDateTime = currentTime.toLocaleString();
          // Ausgabe mit den Werten und der aktuellen Zeit, Datum
          var outputString = "Art der Kleidung: " + artDerKleidung + "\n" +
                             "Kriesengebiet: " + kriesengebiet + "\n" +
                             "Aktuelle Zeit und Datum: " + currentDateTime;
          
          // Zeigt eine Alert-Nachricht an
          alert(outputString);
        } 
      });  

        $('#submit2').click(function() {
          // Holen Sie die Werte aus dem Formular
          var artDerKleidung = $('#type2').val();
          var kriesengebiet = $('#area2').val();
          var StraseHausnummer = $('#straseHausnummer2').val();
          var Stadt = $('#stadt2').val();
          var postleitzahl = $('#postleitzahl2').val();
           // Überprüfen, ob alle erforderlichen Felder ausgefüllt sind
          if (artDerKleidung.trim() === '' || kriesengebiet.trim() === '' || StraseHausnummer.trim() === '' || Stadt.trim() === '' || postleitzahl.trim() === '') {
          alert('Bitte füllen Sie alle mit * gekenzeichneten Felder aus.');
          return; // Stoppt die Ausführung des restlichen Codes
          }
         //if else um zu testen ob die Eingabe der Postleitzahl mit 05 begint sonst else Warnung
          if (postleitzahl.startsWith('50')) {
            // Holt die aktuelle Zeit und das Datum
            var currentTime = new Date();
            var currentDateTime = currentTime.toLocaleString();
            // Ausgabe mit den Werten und der aktuellen Zeit, Datum
            var outputString = "Art der Kleidung: " + artDerKleidung + "\n" +
                               "Kriesengebiet: " + kriesengebiet + "\n" +
                               "Straße & Hausnummer: " + StraseHausnummer + "\n" +
                               "Stadt: " + Stadt + "\n" +
                               "Postleitzahl: " + postleitzahl + "\n" +
                               "Aktuelle Zeit und Datum: " + currentDateTime;
            // Zeigt eine Alert-Nachricht an
            alert(outputString);
          } else {
            // Zeigt eine Fehlermeldung an, wenn die Postleitzahl nicht mit '50' beginnt
            alert('Die Postleitzahl muss mit "50" beginnen.');
          }
        });                          
      });      
;
