// Preguntar una frase al usuario
function cipher (phrases, n) { 
    // Nombrar una variable result, como un string
    var result = " ";
    // Hacer un ciclo repetitivo para recorrer la frase
    for (var i = 0; i < phrases.length; i++) {
      // Crear una variable letters para colocar el código ASCII de cada letra  
      var letters = phrases.charCodeAt(i);
      // Determinar un parámetro para letras mayúsculas, según el código ASCII
      if (65 <= letters && letters <=  90) {
        result += String.fromCharCode((letters - 65 + n) % 26 + 65);}  
      // Determinar un parámetro para letras minúsculas, según el código ASCII
      else if (97 <= letters && letters <= 122){
        result += String.fromCharCode((letters - 97 + n) % 26 + 97);}  
      // Aplicar un mensaje error, si el usuario no escribe letras.
      else {
        alert ("mensaje error");}
      
    }
    return result;
  }
  
  console.log(cipher (prompt ("Escriba una frase"), 33))
    
  
  function decipher (phrases,n){
    var result = " ";
    for (var i = 0; i < phrases.length; i++) {
      var letters = String.fromCharCode (parseInt(i));
      result += ((letters - n) % 26);  
      
    }
    return result;
  }
  console.log (decipher("h", 33))  
    