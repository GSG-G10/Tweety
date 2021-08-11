const tweetsBox = document.querySelector('#tweets');
const loader = document.querySelector('.loader');
const tweetsDiv = document.querySelector('#tweets');

const showSingleTweet = (tweet,tweetsBox) => {
    const avatarImg = document.createElement('img');
    avatarImg.src = tweet.user.profile_image_url;
    avatarImg.style.width = "50px";

    const tweetAvatar = document.createElement('div');
    tweetAvatar.classList.add('tweet-avatar');
    tweetAvatar.appendChild(avatarImg);

    const tweetUsername = document.createElement('h5');
    tweetUsername.textContent = tweet.user.name;


    //username
    const username = document.createElement('h6');
    username.textContent = '@'+tweet.user.screen_name

    const tweetContent = document.createElement('p');
    tweetContent.textContent = tweet.text;


    //hashtags
    let hashtags = '';

    hashtags += tweet.entities.user_mentions.map(mention => {
        return `@${mention.screen_name}`
    }).join(" ");

    hashtags += " " + tweet.entities.hashtags.map(hashtag => {
        return `#${hashtag.text}`
    }).join(" ");
    
    const hashtagsParagraph = document.createElement('p');
    hashtagsParagraph.textContent = hashtags;
    hashtagsParagraph.classList.add('hashtags');


    const time = document.createElement('span');
    time.textContent = tweet.created_at;

    const user = document.createElement('div');
    user.appendChild(tweetUsername);
    user.appendChild(time);
    user.classList.add('user');


    const tweetBody = document.createElement('div');
    tweetBody.classList.add('tweet-body');
    tweetBody.appendChild(user);
    tweetBody.appendChild(username);
    tweetBody.appendChild(tweetContent);
    tweetBody.appendChild(hashtagsParagraph);


    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet');
    tweetDiv.appendChild(tweetAvatar);
    tweetDiv.appendChild(tweetBody);

    tweetsBox.appendChild(tweetDiv);
}

const showTweets = (tweets) => {
    tweetsBox.innerHTML = "";
    tweets.forEach((tweet) => {
        showSingleTweet(tweet,tweetsBox);
    });
};

const showLoader = () => {
    loader.style.display = "block";
}

const hideLoader = () => {
    loader.style.display = "none";
}

const showErrorMessage = (message) => {
    tweetsDiv.innerHTML = '';

    const errorP = document.createElement("p");
    errorP.textContent = message;
    tweetsDiv.appendChild(errorP);

}