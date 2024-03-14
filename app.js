
showElement('image-person', 'block');
showText('main-label', 'Ningún mensaje fue encontrado');
showText('secondary-label', 'Ingresa el texto que desees encriptar o desencriptar');  

//Function that encrypts the input text
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

        showElement('image-person', 'none');
        showElement('copy-button', 'block');
        showText('main-label', encryted_text);
        changeHeight('main-label','100%');

        showText('secondary-label', '');
      
    }
    return encryted_text;


}

//Function that decrypts the input text
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

//Function that encrypts the input text
function showText(className, text) {
    let HTML_element = document.querySelector(`.${className}`);
    HTML_element.innerHTML = text;
    return ;
}

//Function that shows an element whose display property has been changed
function showElement(idName, text) {
    let css_element = document.getElementById(idName);
    css_element.style.display = text;
    return;
}

//Function that change the height of the result box
function changeHeight(idName, value){
    let css_element = document.getElementById(idName);
    css_element.style.textAlign = 'left'
    css_element.style.height = value
    css_element.style.fontSize = '1.4em'
    css_element.style.padding = '28px 20px 20px 20px'
    css_element.style.fontWeight = 'normal';
    css_element.style.color= 'rgba(113, 118, 125, 0.9)'
    css_element.style.width = '100%';

    return; 
}

//Function that copy the text in the clipboard
function copyText(){
    let inputElement = document.getElementById('main-label');
    let copy_text = inputElement.textContent;

    navigator.clipboard.writeText(copy_text)
    .then(() => {
        console.log('Contenido copiado al portapapeles.');
    })
    .catch((error) => {
        console.error('Error al copiar:', error);

    });

}