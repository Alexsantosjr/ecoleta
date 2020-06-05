function populateUfs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => {return res.json()})
    .then( states => {
        
        for(state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUfs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectdState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectdState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a Cidade </option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => {return res.json()})
    .then( cities => {
        
        for(city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// Itens de coleta

const itensToCollect = document.querySelectorAll(".itens-grid li")

for (item of itensToCollect){
    item.addEventListener("click", handleSelectedItem)
}

let selectItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    //adicionar ou remover uma classe
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id

    //verificar se existem items selecionados, se sim
    //pegar os itens selecionados

    const alreadySelected = selectItems.findIndex(function(item){
        
    })

    //se já estiver selecionado, tirar da seleção

    //se não estiver selecionado, adicionar a seleção

    //atualizar o campo escondido com os itens selecionados
}