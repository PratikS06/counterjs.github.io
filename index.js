// document.getElementById("count").innerText= "5"


function incre() {
    let count = 0;
    document.getElementById("int-btn").onclick=function(){
        count +=1 
        document.getElementById("count").innerHTML=count
    }
    document.getElementById("reset-btn").onclick=function(){
        count =0 
        document.getElementById("count").innerHTML=count
    }
    document.getElementById("dec-btn").onclick=function(){
        count = count<=0 ?  0 : count -=1   
        document.getElementById("count").innerHTML=count
    }
    
}