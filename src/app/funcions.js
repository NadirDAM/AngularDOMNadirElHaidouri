export function yellowSubmarine(id) {
  let etiqueta = document.getElementById(id);
  etiqueta.innerHtml = etiqueta.style.color = "yellow";
}
export function changeSize() {
  let etiqueta2 = document.getElementsByTagName("table");
  for (const etiqueta of etiqueta2) {
    etiqueta.innerHtml = etiqueta.style.border = 1+"px solid black";
    etiqueta.innerHtml = etiqueta.style.width = 100+"px";
    etiqueta.innerHtml = etiqueta.style.height = 100+"px";
  }
}

export function countWords(parrafContar, parrafSortida) {
  let i = 0
  let paragraf = document.getElementById(parrafContar);
  paragraf = paragraf.innerHTML.toString().split(" ")
  for (const paraula in paragraf) {
    i++
  }
  let sortida = document.getElementById(parrafSortida)
  sortida.innerHTML = "El paragraf té " + i + " paraules.";
}

export function addImage() {
  let imatge = document.getElementById('imatgedom');
  imatge.src = "../../assets/imatge.jpg"
  imatge = imatge.style.width = 100+"px"
}
export function mostrarValorsLlistaDesplegable() {
  // Obtenim la llista desplegable pel seu ID
  let dropdownList = document.getElementById('dropdownListDavid');

  // Obtenim el div on volem mostrar els valors
  let resultsDiv = document.getElementById('resultsDiv');

  // Verifiquem que la llista desplegable i el div existeixin
  if (dropdownList && resultsDiv) {
    // Obtenim tots els elements de la llista desplegable
    let valors = [];
    for (let i = 0; i < dropdownList.options.length; i++) {
      valors.push(dropdownList.options[i].value);
    }

    // Mostrem els valors en el div
    resultsDiv.innerHTML = 'Valors de la llista desplegable: ' + valors.join(', ');
  } else {
    console.error('No es troba la llista desplegable o el div.');
  }

}
