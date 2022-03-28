async function apiCall(url) {

    //add api call logic here
    try {
        
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data);
        return(data);
      } catch (error) {
        console.log("Error: ",error);
      }

}


function appendArticles(articles, main) {

    //add append logic here
    main.innerHTML = "";
    articles.forEach(function(el,index){
        // console.log(el)

    let div = document.createElement("div");
    div.addEventListener("click",function(e){
        e.preventDefault();
        console.log(el)
        var local = JSON.parse(localStorage.getItem("article"))||[];

        function Constructor(el) {
            this.title = el.title;
            this.description = el.description;
            this.img = el.urlToImage;
          }
        
          let ar = new Constructor(el);
          local.pop()
          local.push(ar);
          localStorage.setItem("article",JSON.stringify(local));
          window.location.href = "blog.html";
    })

    let title = document.createElement("h3");
    title.innerHTML = el.title;

    let img = document.createElement("img");
    img.src = el.urlToImage;

    let description = document.createElement("h3");
    description.innerHTML = el.description;

    div.append(title,description,img);
    main.append(div);
  })

}

export { apiCall, appendArticles }