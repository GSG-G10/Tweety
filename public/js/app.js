
const searchButton = document.querySelector('#submit-button');
const searchKey = document.querySelector('#search');


searchButton.addEventListener('click',(e) => {

    showLoader();

    fetch(`./search/${searchKey.value}`)
        .then(response => response.json())
        .then(data => {

            hideLoader();
            
            showTweets(data);

        })
        .catch(err => {
            hideLoader();

            showErrorMessage("Some Thing went wrong try again");
        });
});