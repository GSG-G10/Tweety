
const searchButton = document.querySelector('#submit-button');
const searchProfile = document.querySelector('#search-profile');
const searchKey = document.querySelector('#search');


if(searchButton){
    searchButton.addEventListener('click',(e) => {

        showLoader();
    
        fetch(`./tweets/${searchKey.value}`)
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
}

if(searchProfile){
searchProfile.addEventListener(`click`, (e) => {
    showLoader();

    fetch(`./search/${searchKey.value}`)
        .then(response => response.json())
        .then(data => {

            hideLoader();
            console.log(data);
            showProfile(data,tweetsBox);

        })
        .catch(err => {
            hideLoader();

            showErrorMessage("Some Thing went wrong try again");
        });
});
}