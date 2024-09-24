let userId=sessionStorage.getItem("user");
const q1Cgoices= document.querySelectorAll('input[name="q1"]');
const q2Cgoices= document.querySelectorAll('input[name="q2"]');
const q3Cgoices= document.querySelectorAll('input[name="q3"]');
const labelq1= document.querySelectorAll('.q1');
const labelq2= document.querySelectorAll('.q2');
const labelq3= document.querySelectorAll('.q3');
let q1=""; let q2="";let q3="";
labelq1.forEach((q1)=>{
    q1.addEventListener("click", function () {
        labelq1.forEach((q1)=>{ q1.classList.remove("checkd");});
            this.classList.add("checkd");  
       });
    });
    labelq2.forEach((q2)=>{
        q2.addEventListener("click", function () {
            labelq2.forEach((q2)=>{ q2.classList.remove("checkd");});
                this.classList.add("checkd");  
           });
        });
        
        labelq3.forEach((q3)=>{
            q3.addEventListener("click", function () {
                labelq3.forEach((q3)=>{ q3.classList.remove("checkd");});
                    this.classList.add("checkd");  
               });
            });
            
q1Cgoices.forEach((q1c)=>{
    q1c.addEventListener("change", function () {
        console.log(this); 
    if(this.checked){
        q1=this.value;
    }
   });
});
   q2Cgoices.forEach((q2c)=>{
    q2c.addEventListener("click", function () {
      
    if(q2c.checked){
       
        q2=q2c.value;
    }
   });
});
   q3Cgoices.forEach((q3c)=>{
    q3c.addEventListener("change", function () {
       
    if(q3c.checked){
        
        q3=q3c.value;
    }
   });
});

function submit(){
   
     let num=0;
   
  
   if(q1===""||q2===""||q3===""){
    alert("جاوب كل الاسئلة");
   }else{
     if(q1==="تأخر"){
    num++;
    //  addScore();
   }
   if(q2==="تعثر"){
    num++;
   }
   if(q3==="عنكبوت"){
    num++;
   }
   addScore(num);
}
}

function addScore(num){
    fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/scores/${userId}`, {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify({
            south:num
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
