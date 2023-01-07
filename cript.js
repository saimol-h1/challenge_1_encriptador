/* let palabraDelUsuario = "hola como estan"; */

/* let palabracrip = palabraDelUsuario;
for (let x = 0; x < palabracrip.length; x++) {
  if (palabracrip[x] === "a") {
    palabracrip =
      palabracrip.substring(x, 1) + "enter" + palabracrip.substring(x + 1);
  }
} */
/* console.log(palabracrip); */
/* function crip() {
  let palabracrip1 = document.getElementById("input_text");
  let text_crip = palabracrip1;
  text_crip = text_crip.replace(/a/gm, "im");
  text_crip = text_crip.replace(/e/gm, "enter");
  text_crip = text_crip.replace(/i/gm, "imes");
  text_crip = text_crip.replace(/o/gm, "ober");
  text_crip = text_crip.replace(/u/gm, "ufat");

  document.getElementById("text_salidas").innerHTML = text_crip;
  document.getElementById("text_salidas").style.display = "inline-block";
} */
function crip() {
  let palabracrip1 = document.getElementById("texto_input").value;
  let text_crip = palabracrip1;
  text_crip = text_crip.replace(/e/gm, "enter");
  text_crip = text_crip.replace(/o/gm, "ober");
  text_crip = text_crip.replace(/i/gm, "imes");
  text_crip = text_crip.replace(/a/gm, "ai");
  text_crip = text_crip.replace(/u/gm, "ufat");

  document.getElementById("text_salidas").innerHTML = text_crip;
  document.getElementById("text_salidas").style.display = "inline-block";
}
function descrip() {
  let palabracrip1 = document.getElementById("texto_input").value;
  let text_crip = palabracrip1;
  text_crip = text_crip.replace(/enter/gm, "e");
  text_crip = text_crip.replace(/ober/gm, "o");
  text_crip = text_crip.replace(/imes/gm, "i");
  text_crip = text_crip.replace(/ai/gm, "a");
  text_crip = text_crip.replace(/ufat/gm, "u");

  document.getElementById("text_salidas").innerHTML = text_crip;
  document.getElementById("text_salidas").style.display = "inline-block";
}
