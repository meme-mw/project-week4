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
                document.querySelector("#najd").innerHTML=`اللهجة النجدية ${scores.najd}/3`;
            }
            if(scores.east<=3){
                document.querySelector("#east").innerHTML=`اللهجة الشرقاوية ${scores.east}/3`;
            }
            if(scores.hijaz<=3){
                document.querySelector("#hijaz").innerHTML=` اللهجة الحجازية${scores.hijaz}/3`;
            }
            if(scores.south<=3){
                document.querySelector("#south").innerHTML=` اللهجة الجنوبية${scores.south}/3`;
            }
            if(scores.north<=3){
                document.querySelector("#north").innerHTML=`اللهجة الشمالية ${scores.north}/3`;
            }
        });
      
      }).catch(error => {
        // handle error
      })
}
getScores();
console.log(user);