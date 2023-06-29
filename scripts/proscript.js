// const element = (
//     <div className="toggle-switch">
//       <input
//         type="checkbox"
//         data-toggle="toggle"
//         data-on="Ready"
//         data-off="Not Ready"
//         data-onstyle="success" 
//         data-offstyle="danger"
//       />
//     </div>
//   );
  
//   ReactDOM.render(
//     element,
//     document.getElementById('app')
//   );
const tog1=document.querySelector(".tog1")
tog1.addEventListener('click', e=>{
    var x = document.getElementById("yp");
    console.log("click")
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
    var y = document.getElementById("yo");
    console.log("click")
    if (y.style.display === "none") {
    y.style.display = "block";
    } else {
    y.style.display = "none";
    }
    var y = document.getElementById("yr");
    console.log("click")
    if (y.style.display === "none") {
    y.style.display = "block";
    } else {
    y.style.display = "none";
    }
    
})

const tog2=document.querySelector(".tog2")
tog2.addEventListener('click', e=>{
    var x = document.getElementById("ra");
    console.log("click")
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
    var y = document.getElementById("rb");
    console.log("click")
    if (y.style.display === "none") {
    y.style.display = "block";
    } else {
    y.style.display = "none";
    }
    
})


