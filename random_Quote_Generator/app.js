let output = document.getElementById('output');
let btn = document.getElementById('btn');

btn.addEventListener('click', generateQuote);

function generateQuote(){
    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        output.innerHTML ="";
        output.innerHTML += data.message;
    })
}

