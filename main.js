(()=>{"use strict";function e(){console.log("delete todo button pressed");var e=this.parentNode;e.parentNode.removeChild(e)}function t(){console.log("check box button pressed"),console.log(document.getElementById("checkbox").checked);var e=this.parentNode;e.parentNode,document.getElementById("test"),1==this.checked?(console.log("if statemetn"),e.style.backgroundColor="gray",e.style.color="white",e.style.textDecoration="line-through"):(e.style.backgroundColor="cornflowerblue",e.style.color="black",e.style.textDecoration="")}console.log("hello new program"),document.getElementById("addTodo").addEventListener("click",(function(){console.log("add todo button pressed"),document.getElementById("toDoDesc").value="",document.getElementById("toDoDueDate").value="";var o=document.getElementById("myModal"),n=(document.getElementById("addTodo"),document.getElementsByClassName("close")[0]);o.style.display="block",n.onclick=function(){o.style.display="none"},window.onclick=function(e){e.target==o&&(o.style.display="none")},submitToDo.onclick=function(){console.log("sumbit to do button pressed");var n=document.getElementById("addTodo"),d=document.getElementById("toDoDesc").value,l=document.getElementById("toDoDueDate").value;const c=document.querySelector(".listColumn"),s=document.createElement("div");s.classList.add("todo"),s.setAttribute("id","todo"),c.insertBefore(s,n);const a=document.createElement("input");a.setAttribute("type","checkbox"),a.setAttribute("id","checkbox"),a.classList.add("checkBox"),s.appendChild(a);const i=document.createElement("label");i.classList.add("task"),i.innerHTML=d,s.appendChild(i);const u=document.createElement("div");u.classList.add("dueDate"),u.innerHTML="Due by: "+l,s.appendChild(u);const r=document.createElement("button");r.classList.add("deleteTodo"),r.setAttribute("id","deleteTodo"),r.innerHTML="X",s.appendChild(r),o.style.display="none",r.addEventListener("click",e),a.addEventListener("click",t)}}))})();