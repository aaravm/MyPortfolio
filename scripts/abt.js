const form1=document.querySelector(".form")
form1.addEventListener('click', e=>{
  var x = document.getElementById("yp");
    if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
})
const fetchLinkedInProfile = async () => {
  const url = 'https://linkedin-profiles1.p.rapidapi.com/extract?url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Faarav-mehta-445959250%2F&html=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '59a6968ebbmsh46014aaadce47fdp1ca106jsn3b8c0b7184f5',
      'X-RapidAPI-Host': 'linkedin-profiles1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    console.log(result.extractor.awards)
    let awards=result.extractor.awards
    let i1=0
    awards.forEach(award => {
      // Create HTML elements to display project information
      i1++
      const award1 = document.createElement('div');
      award1.innerHTML = `
      <div class="row fs-5 m1-10">
          <div class="">${i1}.${award}</div>
      </div>
      `;
      // Append the project element to the container
      const menu1 = document.querySelector('#awar');
      menu1.appendChild(award1);
    });
    
  } catch (error) {
    console.error(error);
  }
};

fetchLinkedInProfile(); // Call the async function


// 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
const accessToken = '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';
const apiUrl = 'https://api.github.com';
const container = document.getElementById('project-container');
fetch(`${apiUrl}/user/repos`, {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})

  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Process the repository data
    let i=0;
    // Display the repositories on your webpage
    data.forEach(project => {
      const fullname=project.name;
      const Language=project.language;
      const created_at=project.created_at;
      const clone_url=project.clone_url;
      // Create HTML elements to display project information
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `
      <div class="row">
          <div class="col">${i}</div>
          <div class="col">${fullname}</div>
          <div class="col">${Language}</div>
          <div class="col">${created_at}</div>
          <div class="col"><a href=" ${clone_url}">${fullname}</a></div>
        
      `;
      i=i+1;
      // Append the project element to the container
      const menu = document.querySelector('#lis');
      menu.appendChild(projectElement);
    });
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
    
  });




function handleSubmit(event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page

  // You can perform additional validation or data manipulation here

  // Submit the form data to Formspree
  var form = document.getElementById("myForm");
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "https://formspree.io/f/mbjvrpok");
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      // Handle the successful form submission
      console.log("Form submitted successfully");


      const sub=document.querySelector(".sub")
      var messageElement = document.createElement('h2');
      messageElement.innerHTML = 'SUBMITTED!!';
      messageElement.style.fontWeight = 'bold';
    messageElement.style.textAlign = 'center';
      var x = document.getElementById("yp");
      x.style.display = "none"
      sub.appendChild(messageElement);
      setTimeout(function() {
        messageElement.remove();
        x.style.display = "block"
      }, 3000);
      form.reset(); // Optional: Reset the form after submission
    } else {
      // Handle the form submission error
      console.error("Form submission error:", xhr.status);
    }
  };

  xhr.send(formData);
}

// Add event listener to the form on submit
var form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);