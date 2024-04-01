function postTweet() {
    var tweetContent = document.getElementById("tweetContent").value;
    if (tweetContent.trim() === "") {
        alert("Please enter some content!");
        return;
    }

    var tweetElement = document.createElement("div");
    tweetElement.classList.add("tweet");
    tweetElement.innerHTML = tweetContent;

    document.getElementById("tweetsContainer").appendChild(tweetElement);

    // Clear textarea after posting tweet
    document.getElementById("tweetContent").value = "";
}
