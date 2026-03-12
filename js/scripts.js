const container = document.querySelector(".container")

const inputInsert = document.querySelector(".form-container input")

const inputButton = document.querySelector(".form-container button")

const qrCodeImg = document.querySelector(".qr-code img")

function gerandoQrcode(){
    const inputButtonValue =inputInsert.value;

    if(!inputButtonValue) return;

    inputButton.innerText = "Gerando QR Code..."

    qrCodeImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputButtonValue}`

    qrCodeImg.addEventListener("load", () =>{
        container.classList.add("active");
        inputButton.innerText="QR Code gerado com sucesso!"
    })
}

inputButton.addEventListener("click", () =>{
    gerandoQrcode()
})

inputInsert.addEventListener("keydown", (e) =>{
    if(e.code === "Enter"){
        gerandoQrcode()
    }
})

inputInsert.addEventListener("keyup", () =>{
    if(!inputInsert.value){
        container.classList.remove("active")
        inputButton.innerText="Gerar QR Code."
    }
})