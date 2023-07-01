const form1=document.querySelector(".form")
form1.addEventListener('click', e=>{
  var x = document.getElementById("yp");
    if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
})

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
    // Process the repository data
    let i=0;
    console.log("reached before")
    // Display the repositories on your webpage
    data.forEach(project => {
      console.log(i)
      const projectName = project.name;
      const projectDescription = project.description;
      const projectUrl = project.html_url;
      
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



//   const accessToken2 = 'AQUnquk45qX2gaY1vXtBS6BOQvHs1B_uKQSDkq9FPizwh6wPz9npck13dV3J-Oerbt9S-pFZghkzFaG0hwbtIaRbYXwe0_RTyafeljcK1XdkDC5gJZiH3HeACYDX7bARUspRTfQPJZAWv0Tk-b2rEAarOUOn60OV2x5R8VRRZPq_FpG0SC_TyqyZIBhv2LuFraDLRyNkv8MIcC8FW-zqb67FN9qJ9fNgGbtugz919Gn8efX2O0g-EQsbZAB-eIXFM32EbKYDRnuh-GaW6VGwhPvExDg1fGX1PvR7HgIoZa7OyeANEHw1BbgvrJY9iT4EJPIi_QCDz0nuc51Bql00BXBsGtyhSQ';
//   const apiUrl2 = 'https://api.linkedin.com/v2';

// fetch(`${apiUrl2}/me`, {
//   mode:'no-cors',
//   headers: {
//     'Authorization': `Bearer ${accessToken2}`,
//     'Connection': 'Keep-Alive',
//     'x-li-format': 'json',
    
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     // Process the profile data
//     console.log(data);
//     // Display the profile information on your webpage
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });





// // access code: AQBV8unlSghC4MlHL_pKdSjBVdAMZS0fZDAMAO1BtX5PUtwxk7yW3pkK9NMsJZgnNV5mVwaNSdNGvM28xfKh66Jx3Mhcc6CUrekAMjpoRKAwURcyQF2qpTxTX6yE8OFJYYeLe6BZK698hRXCQ72-XkZ5Nopc6iQFrp1NVxhxXu-M7YIgqkIIXJBJGyI7l5FVfZbR0q2a3E6vyg

// const authUrl = 'https://accounts.spotify.com/api/token';

// // Construct the request options
// const requestOptions = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   body: 'grant_type=authorization_code&code=AQBV8unlSghC4MlHL_pKdSjBVdAMZS0fZDAMAO1BtX5PUtwxk7yW3pkK9NMsJZgnNV5mVwaNSdNGvM28xfKh66Jx3Mhcc6CUrekAMjpoRKAwURcyQF2qpTxTX6yE8OFJYYeLe6BZK698hRXCQ72&redirect_uri=http://127.0.0.1:5500/public/about.html&client_id=http://127.0.0.1:5500/public/about.html&client_secret=7496549493414508b9aee1e79e1c17bd'
// };

// // Send the request to the Spotify Accounts service
// fetch(authUrl, requestOptions)
//   .then(response => response.json())
//   .then(data => {
//     // Handle the response data
//     const accessToken = data.access_token;
//     // Continue with using the access token
//   })
//   .catch(error => console.error('Error:', error));

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