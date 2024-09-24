// document.querySelector('.next').addEventListener(("click",()=>{

// }));

let userId=sessionStorage.getItem("user");

function submit(){
    console.log("m");
    let q1=""; let q2="";let q3=""; let num=0;
    const q1Cgoices= document.querySelectorAll('input[name="q1"]');
    const q2Cgoices= document.querySelectorAll('input[name="q2"]');
    const q3Cgoices= document.querySelectorAll('input[name="q3"]');
   q1Cgoices.forEach((q1c)=>{
    if(q1c.checked){
        q1=q1c.value;
    }
   });
   q2Cgoices.forEach((q2c)=>{
    if(q2c.checked){
        q2=q2c.value;
    }
   });
   q3Cgoices.forEach((q3c)=>{
    if(q3c.checked){
        q3=q3c.value;
    }
   });
   if(q1===""||q2===""||q3===""){
    alert("جاوب كل الاسئلة");
   }else{
     if(q1==="خذ"){
    num++;
    //  addScore();
   }
   if(q2==="ثقيل الدم"){
    num++;
   }
   if(q3==="لي"){
    num++;
   }
   addScore(num);
}
}

function addScore(num){
    fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/users/${userId}/scores`, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify({
            najd:num
        })
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(score => {
        sessionStorage.setItem("user",userId);
        window.location.assign("homePage.html");
      }).catch(error => {
        // handle error
      })
    
}
