let bts =  document.querySelector("#bts");

bts.addEventListener("click", function() {

    let div = document.querySelector("#maissecao");

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
});