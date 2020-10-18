(function(){

    fetch("https://type.fit/api/quotes")
    .then(response=>{
        return response.json()
    })
    .then(data=>{

        button = document.querySelector('#generate-quote');

        button.addEventListener('click', function(){

            valueIndex = Math.floor(Math.random()*data.length);

            document.querySelector('#quote-text').innerHTML = data[valueIndex].text;
            document.querySelector('#author-name').innerHTML = data[valueIndex].author;

        })


    })

})()