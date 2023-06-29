var typed=new Typed(".auto-input",{
    strings:["Student", "Aspiring Developer", "ML Enthusiast", "Chess Player"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

const accessToken = 'AQWhQBlh6iAxe4LGYs5E0Q9ekPReuOx_OhHERQHCic3fUDbfakD_KdaMrZn82PINTDAnyrluN2wmZe-3KHv8paTEvLdmZkZuOkG1lEjtURXA1OYtAU9WIK7l_Mmi5lRv8p9EiKFmh0EyRcDd8gsrR1MAMxqqU56sikkEo-SHAjBguQzXwO7EXOmdlQ5oeOUnRj9uUCOvy-_xQNPJnyapwBPgW2RNhj2s1fbs-JwQl2Oe5B_uJlhK1dFIqfBKlibjAq4G_v38Rk6FkKT9e3dvMz5RteC8Z0P2GzJjjTwRsBauus5jr3a6b8wUyH6GHEB4Kwpb1jMXvRAhzQtA8dibvCYjxv_KFw';
const apiUrl = 'https://api.linkedin.com/v2';

fetch(`${apiUrl}/me`, {
    mode:'no-cors',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Connection': 'Keep-Alive',
    'x-li-format': 'json'
  }
})
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
