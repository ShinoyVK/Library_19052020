function checkPassword()
{
    var pas1=document.getElementById("pass1").value;
    var pas2=document.getElementById("pass2").value;

    if(pas1!=pas2)
    {
        alert("Password Mismatch");
        return false;
    }
}