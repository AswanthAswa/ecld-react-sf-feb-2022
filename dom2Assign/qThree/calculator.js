let screen = document.getElementById('screen');

let buttons = Array.from(document.getElementsByClassName('button'));
//console.log(buttons);

buttons.map(  button=> {
    button.addEventListener('click', (ele) => {
        switch(ele.target.innerText){
            case 'square':
                screen.innerText= screen.innerText*screen.innerText;
                break;
            case 'C':
                screen.innerText = '';
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = "Error.!"
                }
                break;
            case '←':
                if (screen.innerText){
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            default:
                screen.innerText += ele.target.innerText;
        }
    });
});
