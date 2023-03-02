// plain text or your secret language
const array=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",":","'","<",">","?","/",".",",","`","~"," "];
// cipher text array
const cipher = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","|",";",":","'","<",">","?","/",".",",","`","~"," ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];
// function to encrypt
function encrypt(text){
    let encrypted = "";
    for(let i=0;i<text.length;i++){
        encrypted += cipher[array.indexOf(text[i])];
    }
    return encrypted;
    console.log(encrypted);
}   
// function to decrypt

