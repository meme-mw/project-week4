let user=sessionStorage.getItem("user");
sessionStorage.setItem("user",user);
let name1=document.querySelector(".name");
fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/users/${user}`, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(user => {
   
      name1.append(user.name);
     
  
    // Do something with the list of tasks
  }).catch(error => {
    // handle error
  });
function getScores(){
    fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/users/${user}/scores`, {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(scores => {
        scores.forEach(scores => {
            if(scores.najd<=3){
                document.querySelector("#najd").append(`${scores.najd}/3`);
            }
            if(scores.east<=3){
                document.querySelector("#east").append(`${scores.east}/3`);
            }
            if(scores.hijaz<=3){
                document.querySelector("#hijaz").append(`${scores.hijaz}/3`);
            }
            if(scores.south<=3){
                document.querySelector("#south").append(`${scores.south}/3`);
            }
            if(scores.north<=3){
                document.querySelector("#north").append(`${scores.north}/3`);
            }
        });
      
      }).catch(error => {
        // handle error
      })
}
getScores();
console.log(user);