let user_id=sessionStorage.getItem("user");
function logIn(){
    console.log(user_id);
const name1=document.querySelector("#name").value;
const pass=document.querySelector("#pass").value;
console.log(name1);
fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/users`, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(users => {
    let found=false;
    users.find((u)=>{
        
      if(u.name===name1&&u.password===pass){
        console.log("s");
        sessionStorage.setItem("user",user_id);
        window.location.assign("homePage.html");
        found=true;
      }
      
     
    })
    if(!found){
        alert("enter correct info");
      }
    
    // Do something with the list of tasks
  }).catch(error => {
    // handle error
  })
}

document.querySelector("#logIn").addEventListener('click',logIn);