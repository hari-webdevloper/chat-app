 const form = document.querySelector(".typing-area");
 inputField = form.querySelector('.input-field');
 sendBtn = form.querySelector('button');
chatbox = document.querySelector('.chat-box');
form.onsubmit = (e)=>{
    e.preventDefault();
}


 sendBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
       if(xhr.status === 200){
       inputField.value = "";
       }
    }
   }
xhr.open("POST","php/insert-chat.php",true);
let formData = new FormData(form);
xhr.send(formData);
 }
 chatbox.onmouseenter = ()=>{
    chatbox.classList.add('active');
}
chatbox.onmouseleave = ()=>{
    chatbox.classList.remove('active');
}
 setInterval(()=>{
    let xhr = new XMLHttpRequest(); 
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
          let data = xhr.response;
          chatbox.innerHTML = data;
         if(!chatbox.classList.contains('active')){
            scrollToBottom()
         }
           }
        }
       }
    xhr.open("POST","php/get-chat.php",true);
    let formData = new FormData(form);
    xhr.send(formData);
},500)


function scrollToBottom(){
    chatbox.scrollTop = chatbox.scrollHeight;
}