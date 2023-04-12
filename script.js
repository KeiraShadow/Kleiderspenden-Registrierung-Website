// Start at the top of the page
window.scrollTo( (document.top))

$(document).ready(function() {
    // Activate the accordion component
    $('#accordionExample').collapse({
      toggle: false
    });
    
    $('#submit1').click(function(event) {
      event.preventDefault();
      const artDerKleidung = $('#type1').val();
      const kriesengebiet = $('#area1').val();

     if (artDerKleidung.trim() === '' || kriesengebiet.trim() === '') {
     alert('Bitte füllen Sie alle mit * gekenzeichneten Felder aus.');
     return; // Stoppt die Ausführung des restlichen Codes
     }
      
      localStorage.clear();
      const formdata = new FormData($('form#myForm')[0]);
      const formobj = Object.fromEntries(formdata);
      const json = JSON.stringify(formobj);
      localStorage.setItem("myForm", json);
      window.location.href = "bestaetigung.html";
    });
    const json = localStorage.getItem("myForm");
    const obj = JSON.parse(json);
    for (key in obj) {
      // wen leer dann zeig es nicht
      if (key === "Name" && obj[key].trim()=== ""){continue;}
      if (key === "Email" && obj[key].trim()=== ""){continue;}
      if (key === "Telefon" && obj[key].trim()=== ""){continue;}
     const text = `<div><b>${key}</b>: ${obj[key]}</div>`;
    $("#data").append(text);
  }
    
    $('#submit2').click(function(event) {
        event.preventDefault();
        const artDerKleidung2 = $('#type2').val();
        const kriesengebiet2 = $('#area2').val();
        const adress2 = $('#adress2').val();
        const stadt2 = $('#stadt2').val();
        const postleitzahl2 = $('#postleitzahl2').val();
      
       if (artDerKleidung2.trim() === '' || kriesengebiet2.trim() === '' || adress2.trim() === '' || stadt2.trim() === '' || postleitzahl2.trim() === '') {
       alert('Bitte füllen Sie alle mit * gekenzeichneten Felder aus.');
       return; // Stoppt die Ausführung des restlichen Codes
       }
       //Checkt ob die Postleitzahl mit 50 beginnt
       if (postleitzahl2.startsWith('50')){
        localStorage.clear();
        const formdata2 = new FormData($('form#myForm2')[0]);
        const formobj2 = Object.fromEntries(formdata2);
        const json2 = JSON.stringify(formobj2);
        localStorage.setItem("myForm2", json2);
        window.location.href = "bestaetigung.html";
       }
       else{
       alert('Die Postleitzahl muss mit "50" beginnen.');
       }
      });
      const json2 = localStorage.getItem("myForm2");
      const obj2 = JSON.parse(json2);
      for (key in obj2) {
        // wen kein Wert zeige es nicht
        if (key === "Name" && obj2[key].trim()=== ""){continue;}
        if (key === "Email" && obj2[key].trim()=== ""){continue;}
        if (key === "Telefon" && obj2[key].trim()=== ""){continue;}
       const text2 = `<div><b>${key}</b>: ${obj2[key]}</div>`;
      $("#data2").append(text2);
    }
       // Holt die aktuelle Zeit und das Datum für Abholen und Übergabe
       var currentTime = new Date();
       var currentDateTime = currentTime.toLocaleString();
       const timeText2 = `<div><b>Datum und Zeit:</b> ${currentDateTime} </div>`;
      $("#data2").append(timeText2);

        
        $("#impressum-link").click(function(event) {
            $.getJSON("impressum.json", function(data) {
              // JSON Impressum Daten werden angezeigt und formatiert
              var jsonString = JSON.stringify(data, null, 2).replace(/[{}]/g, '').replace(/\\n/g, "<br>").replace(/\"/g, "");
              // Alert Box anzeige
              alert(jsonString);
            });
          });
      });      
;
