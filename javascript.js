
 const ndiv = document.querySelector('div');
            const ndiv1 = document.createElement('p');
            ndiv1.style.color = 'red';
           ndiv.appendChild(ndiv1);

          
           const ndivx = document.createElement('div');
           const ndiv2 = document.createElement('p');
            ndiv2.style.color = 'red';
           ndiv.appendChild(ndivx);
           ndivx.appendChild(ndiv2);

    let final=0;
       
    let c_w=0;
    let u_w=0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=>{ 
    button.addEventListener('click', function something()
    {
      if(final==1){return}  
      playRound(button.id);
    })
 });




function computer_choice()
{
    return Math.floor(Math.random() * 3);
}

function actual_comp()
{
    let chosen_one = computer_choice();

    if(chosen_one==0)
        {
            return "rock";
        }
    else if(chosen_one==1)
        {
            return "paper";
        }
    else 
        {
            return "scissor";
        }
}

function user_choice()
{
    let user = prompt("First comes water, then there is fire - Rock Paper Scissors = ")
    return user;
}





function playRound(x)
    {
    
        let u = x;
        let c = actual_comp();


        if(c_w>=5 || u_w>=5)
        {
            result();
            final=1;
        }

        else
        {

        if(c==u)
        {
            console.log("Draw")
            ndiv1.textContent=`Draw   Computer Wins=${c_w} Player Wins = ${u_w}`;

          
        }
        else if(c=="rock" && u == "paper")
        {
            u_w=u_w+1
            console.log("You win")
            ndiv1.textContent=`You win   Computer Wins=${c_w} Player Wins = ${u_w}`;

    
        }
        else if(c=="rock" && u == "scissor")
        {
            c_w=c_w+1
            console.log("You lose")
            ndiv1.textContent=`You lose   Computer Wins=${c_w} Player Wins = ${u_w}`;

    
        }
        else if(c=="paper" && u=="rock")
        {
            c_w=c_w+1
            console.log("You lose")
            ndiv1.textContent=`You lose   Computer Wins=${c_w} Player Wins = ${u_w}`;

    
        }
        else if(c=="paper" && u=="scissor")
        {
            u_w=u_w+1
            console.log("You win")
            ndiv1.textContent=`You win   Computer Wins=${c_w} Player Wins = ${u_w}`;

    
        }
        else if(c=="scissor" && u== "rock")
        {
            u_w=u_w+1
            console.log("You win")
            ndiv1.textContent=`You win   Computer Wins=${c_w} Player Wins = ${u_w}`;

    
        }
        else if(c=="scissor" && u== "paper")
        {
            c_w=c_w+1
            console.log("You lose")
            ndiv1.textContent=`You lose   Computer Wins=${c_w} Player Wins = ${u_w}`;

    
        }
    
        else{
            console.log("Do it properly-")
            
        }
    }
    

    console.log(c_w)
    console.log(u_w)
  
    
}


    
    
function result()
{ 




 if(u_w==c_w)
{
    console.log("Great Draw")
    ndiv2.textContent=`Great Draw`;

}
else if(u_w>c_w)
{
    console.log("You win total")
    ndiv2.textContent=`You win total`;

}
else{
    console.log("You lose total")
    ndiv2.textContent=`You lose total`;

}

}


 