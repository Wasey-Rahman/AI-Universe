// All card data fetch
const loadHubs=async()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`;
    const res =await fetch(url);
    const data=await res.json();
    console.log(data);
    displayTool(data.data.tools);

}
loadHubs();

// All Card data shown
const displayTool = tools=>{
    const toolsContainer=document.getElementById('tool-container');

    // Display 6 tools only
    tools=tools.slice(0,6);
// All Card Shown Continued
    tools.forEach (tool =>{
        const toolDiv = document.createElement('div');
        toolDiv.classList.add('col');
        toolDiv.innerHTML=
      `<div class="col">
    <div class="card h-100">
      <img src="${tool.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Features</h5>
        <p class="card-text"><p>${tool.features}</p>
        
       
        
      </div>
      <div class="card-footer">
        <small class="text-muted"><h5>${tool.name}</h5></small>
        <h6>${tool.published_in}</h6><button onclick="toolDetails('${tool.id}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#toolDetailModal" >
          <span>&rarr;</span>
          
  
</button>

        </div>
    `;

        toolsContainer.appendChild(toolDiv);

    })
}


// See More button Part
document.getElementById("myButton").addEventListener("click", function () {
    this.querySelector("span").classList.toggle("visually-hidden");
  });

  // Tool Details
  const toolDetails = async id =>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }



  