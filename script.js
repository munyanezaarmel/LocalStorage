const insertKey=document.getElementById('insert-key');
const insertValue=document.getElementById('insert-value');
const insertButton=document.getElementById('insert-button');
const outputData=document.getElementById('data');
insertButton.onclick=function() {
    const key=insertKey.value;
    const value=insertValue.value;
    if(key&&value){
        localStorage.setItem(key,value);
        location.reload();
    }
}
for(let i=0;i<localStorage.length;i++){
const key=localStorage.key(i);
const value=localStorage.getItem(key);
outputData.innerHTML+=`${key}:${value}<br />`
}
