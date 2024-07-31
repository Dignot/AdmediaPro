const div1=document.getElementById('div1')
const div2=document.getElementById('div2')
const div3=document.getElementById('div3')

const button1=document.getElementById('button1')
const button2=document.getElementById('button2')
const button3=document.getElementById('button3')

function click(block){
    
    if(block===div1){
block.style.opacity="1"
div2.style.opacity="0"
div3.style.opacity="0"
    }
      
   else if(block===div2){
    block.style.opacity="1"
    div1.style.opacity="0"
    div3.style.opacity="0"
        button1.style.background="#F7F9FC"
        button1.style.color="rgba(58, 44, 128, 1) "
        
            }
            else if(block===div3){
              block.style.opacity="1"
              div2.style.opacity="0"
              div1.style.opacity="0"
                button1.style.background="#F7F9FC"
                button1.style.color="rgba(58, 44, 128, 1) "

                
                    }
        }

// button1.onclick=()=>{click(div1)}

// button2.onclick=()=>{click(div2)}

// button3.onclick=()=>{click(div3)}
button1.addEventListener("mouseover", function(e){click(div1)})
button2.addEventListener("mouseover", function(e){click(div2)})
button3.addEventListener("mouseover", function(e){click(div3)})

const input=document.getElementsByClassName('input')
const er=document.getElementById('error')
const inpThree=document.getElementById('inpThree')
function isEmailValid(email) {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
  
    return emailRegexp.test(email)
  }
inpThree.addEventListener('change',(e)=>{
   if(isEmailValid(e.target.value)){}
   else{
    const error=document.getElementById(`error3`)
    error.style.display="block"
    error.textContent="Неверный формат почты"

   }
   
})
function a(){
    for(let i=0;i<input.length;i++){
    if(input[i].value===""){
     console.log(1)
     input[i].style.border="1px solid red"
     const error=document.getElementById(`error${i+1}`)
     error.style.display="block"
     error.textContent="Поле обязательно для заполение"
    }
    }
 }


