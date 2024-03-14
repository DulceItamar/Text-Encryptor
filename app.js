


function encrypt() {
    let encryted_text = ""
    let inputCode = document.getElementById('input-text').value;
    
    if (inputCode === '') {
        return;
    } else {
        for (let i = 0; i < inputCode.length; i++) {

            switch(inputCode[i]) {
                case 'a':
                    encryted_text += 'ai';
                    break;
                case 'e': 
                encryted_text += 'enter';
    
                    break;
                case 'i':
                    encryted_text += 'imes';
                    break;
                case 'o':
                    encryted_text += 'ober';
                    break;
                case 'u':
                    encryted_text += 'ufat';
                    break;
                default:
                    encryted_text += inputCode[i];
                    break;
            }
        }
        showImage('image-person', 'none');
        showText('main-label', encryted_text);
        changeHeight('main-label','100%');
        
        
        
        

        showText('secondary-label', '');
      
    }
    return encryted_text;


}


function decrypt() {
    let text = encrypt();

    let decrypetd_text = text
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

   
    showText('main-label', decrypetd_text);
    showText('secondary-label', '');
    return decrypetd_text;

}

function showText(className, text) {
    let HTML_element = document.querySelector(`.${className}`);
    HTML_element.innerHTML = text;
    return ;
}

function showImage(idName, text) {
    let css_element = document.getElementById(idName);
    css_element.style.display = text;
    return;
}

showImage('image-person', 'block');
showText('main-label', 'Ningún mensaje fue encontrado');
showText('secondary-label', 'Ingresa el texto que desees encriptar o desencriptar');    

function changeHeight(idName, value){
    let css_element = document.getElementById(idName);
    css_element.style.textAlign = 'left'
    css_element.style.height = value
    css_element.style.fontSize = '1.4em'
    css_element.style.padding = '20px'
    css_element.style.fontWeight = 'normal';
    css_element.style.color= 'rgba(113, 118, 125, 0.9)'
    css_element.style.width = '100%';

    return; 
}