function showHome() {
    document.getElementById("home").hidden = false;
    document.getElementById("blog").hidden = true;
    document.getElementById("contact").hidden = true;

}

function showBlog() {
    document.getElementById("home").hidden = true;
    document.getElementById("blog").hidden = false;
    document.getElementById("contact").hidden = true;
}
function showContact() {
    document.getElementById("home").hidden = true;
    document.getElementById("blog").hidden = true;
    document.getElementById("contact").hidden = false;
}
function sendData() {
    if (document.getElementById("acepto").checked === false) {
        throw alert("Por favor acepte los terminos");
    }
    if (document.getElementById("email").value.trim() === ""){
        throw alert("Por Ingrese su correo");
    }
    alert("Datos enviados de forma exitosa");


}