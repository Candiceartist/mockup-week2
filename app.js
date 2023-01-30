let a;
function show_hide()
{
    if(a==1)
    {
        document.getElementById("info").style.display="inline";
        return a=0;
    }
    else
    {
        document.getElementById("info").style.display="none";
        return a=1;
    }
}