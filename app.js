


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

        showText('main-label', encryted_text);
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
    let HTML_element = document.querySelector(`.${className}`)
    HTML_element.innerHTML = text;
    return ;
}


showText('main-label', 'Ningún mensaje fue encontrado');
showText('secondary-label', 'Ingresa el texto que desees encriptar o desencriptar');    
