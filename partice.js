var res = fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>{
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
         var div = document.createElement("div")
          div.innerHTML = `
          <div class="container">
            <div class="row ">
             <div class="column">
               <div class"col-lg-sm">
                       <div class="card" style="width: 18rem;" >
                               <img src="${data1[i].flag}" class="card-img-top" alt="...">
                           <div class="card-body">
                             <h5 class="card-title">Country Name:${data1[i].name}</h5>
                             <h5 class="card-title">Country Region:${data1[i].region}</h5>
                            <h5 class="card-title">Country Subregion:${data1[i].subregion}</h5>
                            <a<input class="button" text="click for ">>
                           </div>
                       </div>
               </div>
             </div>
            </div>
          </div>`;
        document.body.append(div)
      }
});

