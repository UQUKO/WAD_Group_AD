async function loadPosts() {
    try {
        // consts
        //const response = await fetch("https://api.npoint.io/cb42fd064c81bee531e1");
        const response = await fetch("posts.json");
        const posts = await response.json();
        const postsContainer = document.getElementById("postsContainer");

        posts.forEach(post => {
            // div for each post.
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");

            // header contains the author img and post date.
            const header = document.createElement("header");
            
            // img
            const authorImg = document.createElement("img");
            authorImg.src = post.authorImage;
            authorImg.width = 35;
            authorImg.height = 35;
            authorImg.alt = `${post.authorName}'s profile picture`;
            // date
            const postDate = document.createElement("span");
            postDate.textContent = new Date(post.dateCreated).toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});

            // add to header.
            header.appendChild(authorImg);
            header.appendChild(postDate);

            // txt
            const postText = document.createElement("p");
            postText.innerHTML = post.postText.replace(/\n/g, "<br>");


            // if there's an img, add it.
            if (post.postImage) {
                const postImg = document.createElement("img");
                postImg.src = post.postImage;
                postImg.width = 300;
                postImg.alt = "<Couldn't load image.>";
                postText.appendChild(document.createElement("br"));
                postText.appendChild(postImg);
            }

            // like (todo: add "postLikes")
            const likeDiv = document.createElement("div");
            likeDiv.classList.add("like");

            const likeImg = document.createElement("img");
            likeImg.src = "res/img/youtube-like-button-png-11.png";
            likeImg.width = 25;
            likeImg.height = 25;
            likeImg.alt = "Like";
            likeDiv.appendChild(likeImg);


            // add to the root div.
            postDiv.appendChild(header);
            postDiv.appendChild(postText);
            postDiv.appendChild(likeDiv);

            // add div to the container.
            postsContainer.appendChild(postDiv);
        });
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

// call when page loads.
document.addEventListener("DOMContentLoaded", loadPosts);
