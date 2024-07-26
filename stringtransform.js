const input = document.querySelector(".string");
const loweroutput = document.querySelector("#lower p")
const upperoutput = document.querySelector("#upper p")
const cameloutput = document.querySelector("#camel p")
const snakeoutput = document.querySelector("#snake p")
const pascaloutput = document.querySelector("#pascal p")
const kebaboutput = document.querySelector("#kebab p")
const trimoutput = document.querySelector("#trim p")

function capitalString(str){
  if(!str) return str
return str[0].toUpperCase() + str.slice(1,str.length) 
}

function update(){
  loweroutput.innerText = input.value.trim().toLowerCase() 
  upperoutput.innerText = input.value.trim().toUpperCase()
  cameloutput.innerText = camelCase(input.value.trim())
  pascaloutput.innerText = pascalCase(input.value.trim())
  snakeoutput.innerText = snakeCase(input.value.trim()) 
  kebaboutput.innerText = kebabCase(input.value.trim())
  trimoutput.innerText = trimCase(input.value.trim())
}
update()

input.addEventListener('input',()=>{
     update()
})
 
function camelCase(data){
  const lowerData = data.toLowerCase()
  const dataArray = lowerData.split(' ')
 const finalArray = dataArray.map((word,i)=>{
    if(i=== 0) return word
     return capitalString(word)
  })
  return finalArray.join('');
}


function pascalCase(data){
  const lowerData = data.toLowerCase()
  const dataArray = lowerData.split(' ')
 const finalArray = dataArray.map((word)=>{
     return capitalString(word)
  })
  return finalArray.join('')
}

function snakeCase(data){
  return data.replaceAll(' ','_')
}

function kebabCase(data){
 
  return data.replaceAll(' ','-')
}

function trimCase(data){
  
  return data.replaceAll(' ','')
}