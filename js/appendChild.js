
// console.log(parantChild);

// const placeSection = document.createElement('section');
// parantChild.appendChild(placeSection)
// const h1 = document.createElement('h1');
// h1.innerText = 'thsi is new child';
// placeSection.appendChild(h1)

// const ul = document.createElement("ul");
// placeSection.appendChild(ul)


// const li1 = document.createElement('li');
// li1.innerText = 'sundorbon';

// ul.appendChild(li1);


// const li2 = document.createElement('li');
// li2.innerText = 'bandorban'
// ul.appendChild(li2);
const parantChild = document.getElementById('food-content');

const newaChilds = document.createElement('section');
newaChilds.innerHTML = `
<h1>THis is new child and new element from this session</h1>
<h3>list of fruits</h3>
<ul>
<li>bananas</li>
<li>mango</li>
<li>jackfruits</li>
<li>color</li>
</ul>
`;
parantChild.appendChild(newaChilds);


const colors = document.getElementsByTagName('h1');
newaChilds.style.backgroundColor = 'red';
newaChilds.style.color = 'white';
// newaChilds.style.border = 'blue';
// newaChilds.style.borderRadius = 'blue'
newaChilds.style.borderColor = ' blue';
newaChilds.style.margin = '40px'
newaChilds.style.padding = '50px';
newaChilds.style.fontSize = ' 25px';

