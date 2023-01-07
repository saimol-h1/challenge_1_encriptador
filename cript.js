/* let palabraDelUsuario = "hola como estan"; */

/* let palabracrip = palabraDelUsuario;
for (let x = 0; x < palabracrip.length; x++) {
  if (palabracrip[x] === "a") {
    palabracrip =
      palabracrip.substring(x, 1) + "enter" + palabracrip.substring(x + 1);
  }
} */
/* console.log(palabracrip); */

function crip() {
  let palabracrip1 = document.getElementById("input_text");
  let crip = palabracrip1.replace(/e/gm, "enter");
}
