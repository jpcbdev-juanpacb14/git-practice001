function showHome(){
    document.getElementById("home").hidden = false;
    document.getElementById("blog").hidden = true;
    document.getElementById("contact").hidden = true;

}

function showBlog(){
    document.getElementById("home").hidden = true;
    document.getElementById("blog").hidden = false;
    document.getElementById("contact").hidden = true;
}
function showContact(){
    document.getElementById("home").hidden = true;
    document.getElementById("blog").hidden = true;
    document.getElementById("contact").hidden = false;
}