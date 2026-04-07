function checkLogin()
{
	const correctusername= "cpboys";
	const correctpassword="123456";
	
	let user =document.getElementById("username").value;
    let pass =document.getElementById("password").value;
if (user == correctusername && pass == correctpassword)
{
	window.location.href= "home.html";
}
else {
	document.getElementById("error").innerText="invalid username or password!";
}
}
