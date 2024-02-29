const verifyInput = document.querySelector('input#verify-input')
const verifyButton = document.querySelector('button#verify-button')
const verifyResult = document.querySelector('div#verify-result')

const currentDate = new Date()
const date = currentDate.getFullYear()

verifyButton.addEventListener('click', function(){
    const inputDate = verifyInput.value

    if (!inputDate) {
        alert ('Por favor, insira uma data válida.')
        return
    }

    const birthYear = new Date(inputDate).getFullYear()

    const age = date - birthYear
    
    const ageElement = document.createElement('h1')
    ageElement.textContent = age

    let additionalInfo = ''

    switch(true){
        case age<12:
        additionalInfo = 'Você é uma criança.'
        break
    
        case age >= 12 && age < 18:
        additionalInfo = 'Você é um adolescente.'
        break
    
        case age >= 18 && age < 30:
        additionalInfo = 'Você é um jovem.'
        break 
    
        case age >= 30 && age < 60:
        additionalInfo = 'Você é um adulto.'
        break
    
        default: 
        additionalInfo = 'Você é um idoso'
    }

    const pElement = document.createElement('p')
    pElement.textContent = additionalInfo

    verifyResult.innerHTML = `Você possui/fará<br>${ageElement.outerHTML}anos.<br>`
    verifyResult.appendChild(pElement)
})
