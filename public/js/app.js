
const searchButton = document.querySelector('#submit-button');
const searchKey = document.querySelector('#search');


searchButton.addEventListener('click',(e) => {


    fetch(`./search/${searchKey.value}`)
        .then(response => response.json())
        .then(data => {
            showTweets(data);

        })
        .catch(console.log);
});