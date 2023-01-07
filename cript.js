let palabraDelUsuario = "hola como estan";

function crip(sentence) {
  let palabracrip = sentence;
  for (let x = 0; x < palabracrip.length; x++) {
    if (palabracrip[x] === "a") {
      palabracrip[x] = "uta";
      console.log(palabracrip);
    }
  }
}

crip(palabraDelUsuario);
