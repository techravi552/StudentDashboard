
    table = document.getElementById("tabledata")
    fetch('https://profiledashboardstudents-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')



.then(response => response.json())
.then((data) => {
    const usersp = Object.entries(data)


    let fusers = usersp.map(([id , user])=>({id ,...user}))
    // console.log(fusers)

    fusers.map((e)=>{
        let tr=document.createElement("tr")
        tr.innerHTML=`<td>${e.name}</td>
            <td>${e.email}</td>
            <td>${e.age}</td>
            <td>${e.cource}</td>
            <td>${e.skill}</td>
            <td>${e.gender}</td>
           <td><button onclick="Edit('${e.id}')">Edit</button></td>
          <td><button onclick="Delete('${e.id}')">DELET</button></td>
            
            
            `
            table.append(tr)
        console.log(e.name)
    })
})

function Edit(id){
     

    
    localStorage.setItem("userid", id);
    window.location.href = "edit.html";
    
}



// delete 

async function Delete(id) {
   

    await fetch(`https://profiledashboardstudents-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`, {
        method:"DELETE",
      
    })
    location.reload()
  }