
addEventListener('click', e => {
let colo_new = document.getElementById('color').value;
    if(e.target.classList == "box-content"){
      console.log("This box " + e.target.id);
        e.target.style.backgroundColor = colo_new;
        e.target.style.transition = "all 2s";
        e.target.style.width= "190px";
        e.target.style.height= "146px";
        e.target.style.paddin= "10px";
}

});