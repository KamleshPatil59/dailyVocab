var word = document.getElementById("word");
var meaning = document.getElementById("meaning");
var example = document.getElementById("example");
var submit = document.getElementById("submit");
var outputDiv = document.getElementById("outputDiv");


submit.addEventListener('click',function(){

    let div1 = document.createElement('div');
    let head1 = document.createElement('h2');
    let para1 = document.createElement('p');

    let head2 = document.createElement('h2');
    let para2 = document.createElement('p');

    let head3 = document.createElement('h2');
    let para3 = document.createElement('p');


    head1.innerText = "WORD";
    head2.innerText = "MEANING";
    head3.innerText = "EXAMPLE";
    para1.innerText = word.value;
    para2.innerText = meaning.value;
    para3.innerText = example.value;

    outputDiv.appendChild(div1);
    div1.appendChild(head1);
    div1.appendChild(para1);
    div1.appendChild(head2);
    div1.appendChild(para2);
    div1.appendChild(head3);
    div1.appendChild(para3);
    
    div1.classList.add('div1-styling');
    head1.classList.add('head1-styling');
    head1.classList.add('head2-styling');
    head1.classList.add('head3-styling');

    para1.classList.add('para1-styling');
    para2.classList.add('para2-styling');
    para3.classList.add('para3-styling');
    


})