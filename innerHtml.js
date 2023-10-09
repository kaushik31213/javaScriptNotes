const headline = document.querySelector(".headline");
console.log(headline.innerHTML);
headline.innerHTML = "<h1> Changed using innerHTML </h1>";
headline.innerHTML += "<h1> Changed using innerHTML </h1>";
headline.innerHTML += '<button class = "btn btn-headline"> Submit</button>';

// we can add html elements using this

// we should not use innerhtml in order to add or create elements
