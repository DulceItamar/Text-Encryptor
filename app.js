


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

    return decrypetd_text;

}
