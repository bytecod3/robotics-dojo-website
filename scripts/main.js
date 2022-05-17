let theme = localStorage.getItem('theme');

// if (theme === null){
//     setTheme('white');
// }else{
//     setTheme(theme);
// }

let themeDots = document.getElementsByClassName('theme-dot');

for (let i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('theme: '+ mode)
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode === 'light'){
        document.getElementById('theme-style').href = '../styles/default.css'
    }
    if(mode === 'blue'){
        document.getElementById('theme-style').href = '../styles/themes/blue.css'
    }
    if(mode === 'green'){
        document.getElementById('theme-style').href = '../styles/themes/green.css'
    }
    if(mode === 'purple'){
        document.getElementById('theme-style').href = '../styles/themes/purple.css'
    }

    localStorage.setItem('theme', mode)
}