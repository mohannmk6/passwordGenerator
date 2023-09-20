const passwordBox=document.getElementById("Password");
const length=8;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#%^&*()!?/{}[]<>-=_+|";
const allChar=upperCase+lowerCase+symbol+number
function CreatePassword(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    while(length > password.length){
     
password +=  allChar[Math.floor(Math.random()* allChar.length)]
    }
    passwordBox.value=password


}
function CopyPassword(){
    passwordBox.select();
    document.execCommand("copy");
        }
