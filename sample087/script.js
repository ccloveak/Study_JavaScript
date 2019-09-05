window.onload = function() {
    var x = document.getElementById("tabs");
    var a = document.getElementsByTagName("li");
    var b = x.getElementsByTagName("div");
    for (i = 0; i < a.length; i++) {
        a[i].index = i;
        console.log(a[i]);
        a[i].onmouseover = function()
        {
            for (i = 0; i < a.length; i++) {
                a[i].className = "li2";
                b[i].className = "box2";
            }
            a[this.index].className = "li1";
            b[this.index].className = "box1";
        } 
    }
}
