/**
 * APP PWA - Etanol x Gasolina
 * @author Elen Gecco
 * @version 2.0
 */

function calcular(){
    //calcular os valores das caixas de imput
    let gasolina = document.getElementById('gasolina').value 
    let etanol = document.getElementById('etanol').value
    let kmlGasolina = document.getElementById('kmGasolina').value
    let kmlEtanol = document.getElementById('kmEtanol').value
    //Calculo a vantagem
    if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
        document.getElementById('status').src = "img/etanol.png"

    } else {
        document.getElementById('status').src = "img/gasolina.png"
    }

}