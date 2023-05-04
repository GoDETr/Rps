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



let c_w=0;
let u_w=0;

for(let i=0;i<5;i++)
{
    let u = user_choice()
    let c = actual_comp();

    if(c==u)
    {
        console.log("Draw")
        i=i-1
    }
    else if(c=="rock" && u == "paper")
    {
        u_w=u_w+1
        console.log("You win")

    }
    else if(c=="rock" && u == "scissor")
    {
        c_w=c_w+1
        console.log("You lose")

    }
    else if(c=="paper" && u=="rock")
    {
        c_w=c_w+1
        console.log("You lose")

    }
    else if(c=="paper" && u=="scissor")
    {
        u_w=u_w+1
        console.log("You win")

    }
    else if(c=="scissor" && u== "rock")
    {
        u_w=u_w+1
        console.log("You win")

    }
    else if(c=="scissor" && u== "paper")
    {
        c_w=c_w+1
        console.log("You lose")

    }

    else{
        console.log("Do it properly-")
        i=i-1
    }
}


if(u_w==c_w)
{
    console.log("Great Draw")
}
else if(u_w>c_w)
{
    console.log("You win total")
}
else{
    console.log("You lose total")
}

console.log(c_w)
console.log(u_w)

