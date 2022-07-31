var searchInput = document.querySelector("#searchInput");
var searchBtn = document.querySelector("#searchBtn");

function start(){
    // var searchInputValue = searchInput.value;                // K the gan .valiue cho 1 bien khac
    searchBtn.addEventListener("click", function(e){
        e.preventDefault();
        // console.log(searchInputValue);
        getDataByFetch(searchInput.value);
    })
}

// Cach 1
function getDataByFetch(searchInputValue){
    console.log(searchInputValue);
    var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInputValue}&app_id=4183d70d&app_key=28c3899a545d0ddae614ffb19ae0fb04`;
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(jsDataType){
            console.log(jsDataType);
    renderDataToScreen(jsDataType.hits);

        })
}

// Cach 2
// async function getDataByFetch(searchInputValue) {
//     var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchInputValue}&app_id=4183d70d&app_key=28c3899a545d0ddae614ffb19ae0fb04`;
//     var result = await fetch(url); 
//     // console.log(result);
//     var datas = await result.json(); 
//     // console.log(datas);
//     renderDataToScreen(datas.hits);
// }

function renderDataToScreen(datas){
    // cach 1
    // datas.forEach(function(item){
    //     console.log(item);
    // });
    // cach 2
    var datasList = datas.map(function(item){
        return item;
    });
    console.log(datasList);
    var bootstrap = document.querySelector("#bootstrap");
    var html = "";
    datasList.forEach(function(item){
        // console.log(item.recipe.image);
        html += `<div class ="col-12 col-sm-6 col-md-4 itemMeal">
                        <img class="imgMeal" src="${item.recipe.image}" alt="">
                        <span class="nameMeal"> ${item.recipe.label} </span> </br>
                        <span class="typeMeal"> (${item.recipe.mealType}) </span>
                        <span class="fromMeal"> ${item.recipe.cuisineType} </span>
                </div>`

    });
    bootstrap.innerHTML = html;
}

start();