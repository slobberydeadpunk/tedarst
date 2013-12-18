 var Set=function(){
   var menu= document.getElementById("nav").getElementsByTagName("li");
   for(i=0;i<menu.length;i++){
        if(menu[i].className=="li_a"){
	        menu[i].onmouseover=function(){
	            this.getElementsByTagName("ul")[0].style.display="block";
				this.getElementsByTagName("ul")[0].style.width="120px";
				this.getElementsByTagName("ul")[0].style.height="100px";
				this.getElementsByTagName("ul")[0].style.position="absolute";
                }
			menu[i].onmouseout=function(){
	            this.getElementsByTagName("ul")[0].style.display="none";
                }
        }
   }
 }
 window.onload=Set;
 
 function show(d1)
 {
  if(document.getElementById(d1).style.display=='none')
    {
     document.getElementById(d1).style.display='block'; //ÏÔÊ¾
    }
  else
    {
     document.getElementById(d1).style.display='none'; //Òþ²Ø
    }
 }