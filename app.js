let profiles = []
let stores = {};
if (localStorage.getItem('profiles') === null) {
  console.log('not there')
}else{
  let falseArray = localStorage.getItem('profiles')
  let falseObj = localStorage.getItem('stores')
  profiles = falseArray.split(',');
  stores = JSON.parse(falseObj);
}
console.log(profiles)
console.log(stores)

function addToProfile (profileName) {
  profileName =profileName.toLowerCase()
  if (profiles.includes(profileName) !== true) {
    profiles[profiles.length] = profileName
    createStoreProfile(profileName)
    localStorage.setItem('profiles',String(profiles))
    falseArray = localStorage.getItem('profiles')
    let profile2 = falseArray.split(',')
  }else{
    console.log('Profile already exists')
  }
  
};
function clearDB () {
  console.log(localStorage.getItem('profiles'))
  console.log(localStorage.getItem('stores'))
  localStorage.removeItem('profiles')
  localStorage.removeItem('stores')
  console.log(localStorage.getItem('profiles'))
  console.log(localStorage.getItem('stores'))
}
function createStoreProfile (storeName) {
  stores[storeName] = {}
  console.log(stores)
  saveStore()
}
function saveStore () {
  let falseObj = JSON.stringify(stores) 
  //console.log(falseObj)
  localStorage.setItem('stores',falseObj)
  //console.log(localStorage.getItem('stores'))
}