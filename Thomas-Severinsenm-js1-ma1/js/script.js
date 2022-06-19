/// Question 1

const cat = {};
cat.complaint = "meow";
console.log(cat.complaint)

/// Question 2

var h3 = document.querySelector("h3");
    h3.innerHTML = "Updated Heading"

/// Question 3

var h3 = document.querySelector("h3")
    h3.style.fontSize = "2em"

/// Question 4

document.querySelector('h3').classList.add('subheading');
console.log(document.querySelector('h3').classList.value);

/// Question 5

let ps = document.querySelectorAll('p');
ps.forEach(function (p) {
    p.style.color = 'red';
});

/// Question 6


const resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML  = "<p> New Paragraph. </p>"

let elemContent = resultsContainer.innerHTML
console.log(elemContent)

resultsContainer.style.backgroundColor = "yellow";

/// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

for(i = 0; i < cats.length; i++){
    if (cats[i].name)
    console.log(cats[i].name);
  }

/// Question 8

function createCats(cats) {
    var html = ""; 
    cats.forEach(function (cat) {
     
      var name = cat["name"];
      if (!cat["age"]) {
        var age = "Age unknown";
      } else {
        var age = cat["age"];
      }
      html += "<div><h5>" + name + "</h5><p>" + age + "</p></div>"; 
    });
    return html; 
  }
  document.querySelector(".cat-container").innerHTML = createCats(cats); 