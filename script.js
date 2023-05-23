const textoDesencriptado = document.getElementById("texto_desencriptado");
const textoEncriptado = document.getElementById("texto_encriptado");
const botonEncriptar = document.querySelector(".btn1");
const botonDesencriptar = document.querySelector(".btn2");
const botonCopiar = document.querySelector(".btn3");
const spans = document.querySelector(".spans");

function encriptar() {
   let texto = textoDesencriptado.value.trim();
   texto = texto.replaceAll("e", "enter");
   texto = texto.replaceAll("i", "imes");
   texto = texto.replaceAll("a", "ai");
   texto = texto.replaceAll("o", "ober");
   texto = texto.replaceAll("u", "ufat");
   textoEncriptado.value = texto;
}

function desencriptar() {
   let texto = textoDesencriptado.value.trim();
   texto = texto.replaceAll("enter", "e");
   texto = texto.replaceAll("imes", "i");
   texto = texto.replaceAll("ai", "a");
   texto = texto.replaceAll("ober", "o");
   texto = texto.replaceAll("ufat", "u");
   textoEncriptado.value = texto;
}

function soloMinusculas() {
   textoDesencriptado.value = textoDesencriptado.value.toLowerCase();
   textoDesencriptado.value = textoDesencriptado.value.replace(/[^a-zñ ]/g, "");
}

function copiar() {
   textoEncriptado.select();
   navigator.clipboard.writeText(textoEncriptado.value);
}

function mostrarResultado() {
   textoEncriptado.style.backgroundImage = 'none';
   spans.style.display = 'none';
   botonCopiar.style.display = 'block';
}

function parametrosIniciales() {
   textoEncriptado.style.backgroundImage = 'url(Muñeco.png)';
   spans.style.display = 'block';
   botonCopiar.style.display = 'none';
   textoEncriptado.value = '';
}

botonEncriptar.addEventListener('click', function () { encriptar() });
botonDesencriptar.addEventListener('click', function () { desencriptar() });
botonCopiar.addEventListener('click', function () { copiar() });
textoDesencriptado.addEventListener('keyup', function () {
   if (textoDesencriptado.value.length === 0) {
      parametrosIniciales();
   }
})