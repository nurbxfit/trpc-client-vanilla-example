import { GreetServiceClient } from "./modules/greet/greet.service";

const app : HTMLElement = document.getElementById('app');

const title : HTMLHeadingElement = document.createElement('h1');
title.textContent = "Hello World This is webpack trpc client example"

const button : HTMLButtonElement = document.createElement('button');
button.textContent="click me";
button.onclick = changeTitle; 

async function changeTitle(){
    const greetText = await GreetServiceClient.greet(); 
    title.textContent = greetText
}


app.appendChild(title)
app.appendChild(button)