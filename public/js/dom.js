const tweetsBox = document.querySelector('#tweets');
const loader = document.querySelector('.loader');

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

const showProfile = (user,box) => {
    const avatarImg = document.createElement('img');
    avatarImg.src = user.profile_image_url;
    avatarImg.style.width = "50px";

    const avatar = document.createElement('div');
    avatar.classList.add('tweet-avatar');
    avatar.appendChild(avatarImg);

    const name = document.createElement('h5');
    name.textContent = user.name;

    const username = document.createElement('h6');
    username.textContent = '@'+user.screen_name

    const bio = document.createElement('p');
    bio.textContent = user.description;

    const userDiv = document.createElement('div');
    userDiv.appendChild(name);
    userDiv.classList.add('user');


     
    const location = document.createElement('span');
    const url = document.createElement('span');
    const joindAt = document.createElement('span');

    const div1 = document.createElement('div');
    div1.classList.add('tweet-buttons');

    if(user.location){
        location.innerHTML = `<i class="fa fa-map-marker"></i> ${user.location}`;
        div1.appendChild(location);
    }

    if(user.url){
        url.innerHTML = `<i class="fa fa-link"></i> <a href="${user.url}">${user.url}</a>`;
        div1.appendChild(url);

    }

    if(user.created_at){
        joindAt.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i> Joined ${user.created_at}`;
        div1.appendChild(joindAt);
    }

    // followers
    const following = document.createElement('span');
    following.textContent = user.friends_count + " Following";

    const followers = document.createElement('span');
    followers.textContent = user.followers_count + " Followers";

    const div2 = document.createElement('div');
    div2.classList.add('tweet-buttons');
    div2.appendChild(following);
    div2.appendChild(followers);

    const tweetBody = document.createElement('div');
    tweetBody.classList.add('tweet-body');
    tweetBody.appendChild(userDiv);
    tweetBody.appendChild(username);
    tweetBody.appendChild(bio);
    tweetBody.appendChild(div1);
    tweetBody.appendChild(div2);


    const tweetDiv = document.createElement('div');
    tweetDiv.classList.add('tweet');
    tweetDiv.appendChild (avatar);
    tweetDiv.appendChild(tweetBody);

    box.appendChild(tweetDiv);
}

const showLoader = () => {
    loader.style.display = "block";
}

const hideLoader = () => {
    loader.style.display = "none";
}

const showErrorMessage = (message) => {
    tweetsBox.innerHTML = '';

    const errorP = document.createElement("p");
    errorP.textContent = message;
    tweetsBox.appendChild(errorP);

}