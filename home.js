function home_show(){
    document.getElementById("home_box").style.display="block";
    document.getElementById("home_show_id").style.display="none";
    document.getElementById("home_hide_id").style.display="block";
    document.getElementById("search_box").style.display="none";
    document.getElementById("search_hide_id").style.display="none";
    document.getElementById("search_show_id").style.display="block";
}
function home_hide(){
    document.getElementById("home_box").style.display="none";
    document.getElementById("home_show_id").style.display="block";
    document.getElementById("home_hide_id").style.display="none";
}

function search_show(){
    document.getElementById("search_box").style.display="block";
    document.getElementById("search_show_id").style.display="none";
    document.getElementById("search_hide_id").style.display="block";
    document.getElementById("home_box").style.display="none";
    document.getElementById("home_hide_id").style.display="none";
    document.getElementById("home_show_id").style.display="block";
}
function search_hide(){
    document.getElementById("search_box").style.display="none";
    document.getElementById("search_show_id").style.display="block";
    document.getElementById("search_hide_id").style.display="none";
}