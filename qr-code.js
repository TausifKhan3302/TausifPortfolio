let qrtext = document.getElementById('qr-text')
let sizes = document.getElementById('size')
let qrbody = document.querySelector('.qr-con')
let generatebtn = document.querySelector('.generate-btn')
let downloadebtn = document.querySelector('.download-btn')

let size  = sizes.value;
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    generateQrCode();
    isEmptyText();
})

function isEmptyText(){
    if (!qrtext.value.lenght > 0 || !qrtext.value) {
        generateQrCode()
    }
    else{
        alert('Please Enter The Text')
    }
    //   !qrtext || !qrtext.value ? alert('Please Enter The Text') : generateQrCode();
}

downloadebtn.addEventListener('click',()=>{

    let img = document.querySelector('.qr-con img')
    if (img !== null) {
        let url = img.getAttribute('src');
        downloadebtn.setAttribute('href',url);
    }
    else{
        downloadebtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`)      
    }

})


function generateQrCode(){
    qrbody.innerHTML= ''
    new QRCode(qrbody, {
        text: qrtext.value,
        width: size,
        height: size,
        colorLight : 'red',
        colorDark : '#f8b597',
    });
}

generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    generateQrCode()
    isEmptyText()
})







