console.log('Hello!')
let messageDiv = document.querySelector('#message');
console.log(messageDiv)
console.log(messageDiv.innerText)
console.log(messageDiv.innerHTML)



/*
Would you be able to show an example of using doc query selector to find an element by class and its parents class?*/

/*setTimeout(()=>{
    messageDiv.innerHTML='<h1>I changed it</h1>';
   // messageDiv.style.color='blue'
  //  messageDiv.style.backgroundColor = 'red'
  messageDiv.classList.add('bigger');
},3000)

setTimeout(()=>{
    messageDiv.classList.remove('bigger')
}, 5000)*/

const foods = ['ramen','pizza','burrito', 'sushi','tacos', 'pazole','steak']
let list = document.querySelector('ul.foods');   // Get the area to add element to
for(let food of foods){
    let li = document.createElement('li'); //creates a list element <li></li>
    console.log(li)
    li.innerHTML=food;   //<li>ramen</li>
   // list.appendChild(li);
}

let parent = document.querySelector('.parent');
let child = document.createElement('div');
child.innerHTML=`I'm a child`;
child.classList.add('child');
parent.appendChild(child);


setTimeout(() => {
    parent.removeChild(child); //removes the child from the parent
}, 3000);
