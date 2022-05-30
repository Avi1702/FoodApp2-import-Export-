function navbar(){
 
    return `<div id="nav">
    <div id="input"><input type="text" placeholder="Search For Recepie"  id="search"/></div>
    <div><a href="receipe_of_the_day.html">Recepie Of The Day</a></div>
    </div>`;
}

async function get_list(){
  let value=  document.getElementById("search").value
  console.log(value)
  try{

    let raw=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)

    let real= await raw.json()

    show_in_suggestions(real.meals)

  }
  catch(error){
    console.log(error)
  }
}


let box=document.createElement("div")
box.setAttribute("id","suggestions")

function show_in_suggestions(data){
  box.innerHTML=""
  data.forEach(ele => {
    
    let p=document.createElement("p")
    p.innerText=ele.strMeal

    box.append(p)
    document.getElementById("show_Suggestions").append(box)
    

    p.addEventListener("click",function(){
      localStorage.setItem("dish_name",ele.strMeal)
      window.location.href="The_dish.html"
    })

    
  });
}

// function store()
// async function Get_data(dish_name){
//   console.log(dish_name)
//   try{
// let raw= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
// let real= await raw.json()
// // display_data(real.strMeal)
// let final_dish=real.strMeal
// localStorage.setItem("dish_name",final_dish)
// window.location.href="The_dish.html"

//   }
//   catch(error){
// console.log(error)
//   }

// }


let timer
function debounce(){

  if(timer){
      clearTimeout(timer)
   }
  
   timer= setTimeout(function(){get_list()},1000)
  }

// let timer


export {navbar,get_list,debounce}

