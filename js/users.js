const searchBar = document.querySelector('.users .search input');
searchBtn = document.querySelector('.users .search button');
userlist = document.querySelector('.users .users-list');

searchBar.onkeyup = ()=>{
    let searchTerm = searchBar.value;
    
    if(searchTerm != ""){
    searchBar.classList.add('active');
    }else{
    searchBar.classList.remove('active');
    searchBar.value = "";
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST","php/search.php",true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
            let data = xhr.response;
            userlist.innerHTML = data;
           }
        }
       }
    xhr.setRequestHeader('content-type' , 'application/x-www-form-urlencoded');
    xhr.send("searchTerm="+searchTerm);

}

searchBtn.onclick = ()=>{
searchBar.classList.toggle('active');
searchBar.focus();
searchBtn.classList.toggle('active');
}



setInterval(()=>{
    let xhr = new XMLHttpRequest(); 
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
            let data = xhr.response;
            if(!searchBar.classList.contains('active')){
                userlist.innerHTML = data;
            }
           }
        }
       }
    xhr.open("GET","php/users.php",true);
    xhr.send();
},500)