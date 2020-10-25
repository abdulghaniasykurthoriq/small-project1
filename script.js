function myfunction() {
    var pagez = document.getElementById("pagesz2")
    pagez.scrollIntoView();
};


function moveall(){
    var yaudah = document.getElementById("pagez3")
    yaudah.scrollIntoView();
}






var i = 0;

function addtocart() {
    if (i < 9) {
        i++;
    } else if (i => 10) {
        i = "9+";
    }
    document.getElementById("display").innerHTML = i;
};


function plusCart(){
    
    if (i < 9) {
        i++;
    } else if (i => 10) {
        i = "9+";
    }
    document.getElementById("display").innerHTML = i;
};
function minusCart(){
    
    if (i > 0) {
        i--;
    } else if (i = "9+") {
        i = 8;
    }
    document.getElementById("display").innerHTML = i;
};



// myImage.src = 'gambar.jpg';
// x = document.getElementById("gambar");
// x.appendChild(myImage);	
// var image1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj9unLodxJAqzN5_C_Uw6I6-w5uEwtE-yMlg&usqp=CAU';
// var image2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcuWDvyI0CmV93vTKMwj2Vr1XtVkur5j5dqQ&usqp=CAU';


// function plusimg{
//     x = document.getElementById("imgoke");
//     x.appendChild(image1);
// };




// filter 
const search = document.getElementById("searching");
const data = document.querySelectorAll(".product-category div");


search.addEventListener("keyup", function (event){
    // console.log(event);
    const q = event.target.value.toLowerCase();
    data.forEach((datas) => {
        datas.querySelector('p').textContent.toLowerCase().startsWith(q) 
        ? (datas.style.display = '') 
        : datas.style.display = 'none';
    }
    );
});