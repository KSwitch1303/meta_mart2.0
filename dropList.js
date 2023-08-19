listElem = document.querySelector('.dropList')
for (i = 0; i < profiles.length ; i++) {
  listElem.innerHTML = listElem.innerHTML + `<option value="${i}">${profiles[i]}</option>`
}

listElem2 = document.querySelector('.dropList2')
let dlElem = document.querySelector('.dropList')
let selectElem = dlElem
let dlElem2 = document.querySelector('.dropList2')
let selectElem2 = dlElem2

dropList2Changer();

function createProduct() {
  dlElem = document.querySelector('.dropList')
  selectElem = dlElem
  let profile = profiles[selectElem.value]
  let objLength = Object.keys(stores[profile]).length
  console.log(objLength)
  stores[profile][`product${objLength+1}`] = {}
  dropList2Changer()
  saveStore()
}


function dropList2Changer () {
  let profile = profiles[selectElem.value]
  let objLength = Object.keys(stores[profile]).length
  console.log(Object.keys(stores[profile]))
  listElem2.innerHTML = ''
  for (i = 0; i < objLength ; i++) {
    listElem2.innerHTML = listElem2.innerHTML + `<option value="${i+1}">${Object.keys(stores[profile])[i]}</option>`
  }
}


function submitt () {
  let uin1 = document.querySelector('.inBox1')
  let uin2 = document.querySelector('.inBox2')
  console.log(uin1.value)
  console.log(uin2.value)
  console.log(selectElem.value)
  console.log(selectElem2.value)
  stores[profiles[selectElem.value]][`product${selectElem2.value}`][String(uin1.value)] = uin2.value
  console.log(stores)
  uin1.value = ''
  uin2.value = ''
  saveStore()
}