var queryParams = {}
location.search.substr(1).split("&").forEach(function(item) {queryParams[item.split("=")[0]] = item.split("=")[1]})

console.log(queryParams)


const storyAuthor = document.getElementsByClassName("story-author-div");
const storyImage = document.getElementsByClassName("story-square-img");
const storyTitle = document.getElementById("story-title");
const storyCategory = document.getElementById("story-category");
const storyContent = document.getElementById("story-content");

const initializeStory = ()=> {
    let story = stories.filter((item)=> item.id == queryParams.id);
    let author = authors.filter((item) => item.id == story[0].authorId);
    story = story[0];
    author = author[0];

    storyAuthor[0].innerHTML = `<div class="parent-author-img">
                                    <img src="${author.img}"/>
                                </div>
                                <span style="font-size: 18pt;margin-top: 20px;">Author</span>
                                <span style="font-size: 28pt;font-weight:bold">${author.name}</span>
                                <span style="font-size: 18pt;">${author.strand}</span>`;

    storyImage[0].style.backgroundImage = `url(${story.bgImg})`;
    storyTitle.innerHTML = story.title;
    const category = categories.filter(item=>item.id == story.categoryId)[0];
    storyCategory.innerHTML = `( ${category.category} )`
    storyContent.innerHTML = story.content;
}

initializeStory();