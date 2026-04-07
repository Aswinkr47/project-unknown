function checkLogin()
{
	const correctusername= "cpboys";
	const correctpassword="blublublu";
	
	let user =document.get("username").value;
    let pass =document.get("password").value;
if (user == correctusername && pass == correctpassword)
{
	window.location.href="home.html";
}
else {
	document.getElementById("error")innerText="invalid username or password!";
}
}
