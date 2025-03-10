

const iconTrigger = document.getElementById("iconTrigger")
const icon = document.getElementById("icon")
const menu = document.querySelector(".menu-container")
const mainBody = document.getElementById("main-body")
const search = document.getElementById("searchInput");
const featuredItems = document.getElementsByClassName("featured-items")
const categoriesDiv = document.getElementsByClassName("categories")

iconTrigger.onclick = (()=>{
    if(icon.classList.contains("fa-bars")){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-close")
        menu.classList.add("show")
        menu.classList.remove("hide")
    }else{
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-close")
        menu.classList.remove("show")
        menu.classList.add("hide")
    }
})

const renderResult = ()=> {
  if(search.value === ""){
    window.location.href = "./index.html";
    return;
  }

  let storiesDiv = ``;

  stories.filter((item,index)=> {
    const author = authors.filter(auth=>auth.id == item.authorId)[0]
    if(item.title.toLocaleLowerCase().includes(search.value.toLowerCase())) {
      storiesDiv = storiesDiv + `<div><a href="story.html?id=${item.id}" class="item-box" onmouseover="bigImg(${item.id}, ${true})" onmouseout="normalImg(${item.id}, ${true})">
      <div class="item-box-shadow">
          <img class="item-box-story" id="item2-box-id-${item.id}" src="${item.img}" />
      </div>
      </a>
      <div class="storyDetails">
      <span style="font-weight:bold">${item.title}</span>
      <span style="font-size:10pt">by ${author.name}</span>
    </div>
    </div>`
    }
  })
  mainBody.innerHTML = `<div class="featured-blogs">
  <span class="section-title">Searched Results</span>
  <div class="featured-items">
  ${storiesDiv.length > 0 ? storiesDiv : "NO STORIES FOUND"}
    </div>
  </div>`
}

const filterCategory = (id)=> {
  const tags = document.getElementsByClassName("tags");
  const tag = document.getElementById(`categ-${id}`)
  for(let x= 0; x < tags.length ; x++){
    tags[x].classList.remove("tags-active");
  }
  tag.classList.add("tags-active")

  const filteredStories = id == 0 ? stories : stories.filter(story=> story.categoryId == id);

  let storiesDiv = ``;
  filteredStories.map((item,index)=> {
    const author = authors.filter(auth=>auth.id == item.authorId)[0]
    storiesDiv = storiesDiv + `<div><a href="story.html?id=${item.id}" class="item-box" onmouseover="bigImg(${item.id}, ${true})" onmouseout="normalImg(${item.id}, ${true})">
    <div class="item-box-shadow">
        <img class="item-box-story" id="item2-box-id-${item.id}" src="${item.img}" />
    </div>
    </a>
    <div class="storyDetails">
    <span style="font-weight:bold">${item.title}</span>
    <span style="font-size:10pt">by ${author.name}</span>
  </div>
    </div>`
  })

  featuredItems[1].innerHTML = storiesDiv;

}


// render featured
const init = ()=> {
  let featureds = ``;
  let storiesDiv = ``;
  featured.map((item,index)=> {
    const author = authors.filter(auth=>auth.id == item.authorId)[0]
    featureds = featureds + `<div><a href="story.html?id=${item.id}" class="item-box" onmouseover="bigImg(${item.id})" onmouseout="normalImg(${item.id})">
    <div class="item-box-shadow">
        <img class="item-box-story" id="item-box-id-${item.id}" src="${item.img}" />
    </div>
    </a>
    <div class="storyDetails">
    <span style="font-weight:bold">${item.title}</span>
    <span style="font-size:10pt">by ${author.name}</span>
  </div>
  </div>`
  })

  stories.map((item,index)=> {
    const author = authors.filter(auth=>auth.id == item.authorId)[0]
    storiesDiv = storiesDiv + `<div><a href="story.html?id=${item.id}" class="item-box" onmouseover="bigImg(${item.id}, ${true})" onmouseout="normalImg(${item.id}, ${true})">
    <div class="item-box-shadow">
        <img class="item-box-story" id="item2-box-id-${item.id}" src="${item.img}" />
    </div>
    </a>
    <div class="storyDetails">
    <span style="font-weight:bold">${item.title}</span>
    <span style="font-size:10pt">by ${author.name}</span>
  </div>
    </div>`
  })

  featuredItems[0].innerHTML = featureds;
  featuredItems[1].innerHTML = storiesDiv;

  let categorydiv = `<div id="categ-0" class="tags tags-active" onclick="filterCategory(0)">
  <span>ALL</span>   
</div>`;

  categories.map((item,index)=> {
    categorydiv = categorydiv + `<div id="categ-${item.id}" class="tags" onclick="filterCategory(${item.id})">
    <span>${item.category}</span>   
  </div>`
  })

  categoriesDiv[0].innerHTML = categorydiv;

}

init();





function bigImg(x , story = false) {
  const item = story ? document.getElementById(`item2-box-id-${x}`) : document.getElementById(`item-box-id-${x}`);
  item.style.height = "105%";
  item.style.width = "105%";
}

function normalImg(x, story =false) {
  const item =story ? document.getElementById(`item2-box-id-${x}`) : document.getElementById(`item-box-id-${x}`);
  item.style.height = "100%";
  item.style.width = "100%";
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);    
}



