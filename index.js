let refrence=document.getElementById('st');
let refrence1=document.getElementById('st1');
let events=document.getElementById('hashcode');
let body=document.querySelector('body');
let hur=document.getElementById('hur');
function hexcodegen(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}
let cnt=0;
    refrence.addEventListener('click',function(){
        hur.textContent='#FFFFFF'
        if(cnt===0){
            cnt=1
        refrence.style.color="white"
        refrence.style.backgroundColor="brown"
        refrence.style.borderRadius='10px'
        events.addEventListener('click',function(){
            let f=hexcodegen();
            console.log()
            body.style.backgroundColor=f
            hur.textContent=f
        })
        }
        else if(cnt===1){
            cnt=0
            body.style.backgroundColor='white'
            hur.textContent='#FFFFFF'
            
            refrence.style.color="black"
            events.addEventListener('click',function(){
                body.style.backgroundColor='white'
                hur.textContent='#FFFFFF'
            })
        }
        
    })
    let arr=["red","green","blue","orange"];
let cnt1=0;

refrence1.addEventListener('click',function(){
    hur.textContent='white'
    if(cnt===0){
        cnt=1
    refrence1.style.color="white"
    refrence1.style.backgroundColor="brown"
    refrence1.style.borderRadius='10px'
    events.addEventListener('click',function(){
            
            let f=Math.floor(Math.random()*arr.length);
            let newColor=arr[f];
            body.style.backgroundColor=newColor;
            hur.textContent=newColor
    })
    }
    else if(cnt===1){
        cnt=0
        body.style.backgroundColor='white'
        hur.textContent='white'
        
        refrence1.style.color="black"
        events.addEventListener('click',function(){
            body.style.backgroundColor='white'
            hur.textContent='white'
        })
    }
    
})

