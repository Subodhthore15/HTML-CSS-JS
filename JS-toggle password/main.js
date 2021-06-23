let pass = document.getElementById('psd')

let icon = document.querySelector('.fa-lock')

function show_hide(){
    if (pass.type==='password'){
        pass.type="text";
        icon.style.color="#e84393"
    }
    else{
        pass.type="password";
        icon.style.color="white"
    }
}