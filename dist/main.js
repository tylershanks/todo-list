(()=>{"use strict";function e(){console.log("delete todo button pressed");var e=this.parentNode;e.parentNode.removeChild(e)}function t(){console.log("check box button pressed"),console.log(document.getElementById("checkbox").checked);var e=this.parentNode;e.parentNode,document.getElementById("test"),1==this.checked?(console.log("if statemetn"),e.style.backgroundColor="gray",e.style.color="white",e.style.textDecoration="line-through"):(e.style.backgroundColor="rgb(240, 219, 152)",e.style.color="black",e.style.textDecoration="")}function o(){console.log("delete category button pressed"),event.stopPropagation();var e=this.parentNode;let t=document.getElementById("categorySelector"),o=t.getElementsByTagName("OPTION");for(let n=0;n<t.length;n++)t.options[n].value==e.id&&t.removeChild(o[n]);var n=this.parentNode;n.parentNode.removeChild(n);let l=document.getElementsByClassName(e.id);for(;l.length>0;)l[0].parentNode.removeChild(l[0]);let d=this.parentNode,c=document.getElementById("maincatbutn");console.log(d.style.backgroundColor),"rgb(136, 136, 136)"==d.style.backgroundColor&&(c.click(),console.log("main cat butn should be clicked"))}function n(){let e=document.getElementById("categoryColumn").querySelectorAll(".subCategory"),t=document.getElementById("maincatbutn");for(let t=0;t<e.length;t++)e[t].style.backgroundColor="rgb(104, 104, 104)";t.style.backgroundColor="rgb(104, 104, 104)",this.style.backgroundColor="rgb(136, 136, 136)";var o=this.id;let n=document.getElementById("listColumn"),l=(document.getElementById("mainCategoryList"),n.querySelectorAll("."+o),n.childNodes);document.getElementsByClassName(o.id);for(let e=0;e<l.length;e++)"DIV"==l[e].tagName&&"maincatbutn"==o?l[e].style.display="block":"DIV"==l[e].tagName&&l[e].id!=o?l[e].style.display="none":"DIV"==l[e].tagName&&l[e].id==o&&(l[e].style.display="block")}console.log("hello new program"),document.getElementById("addTodo").addEventListener("click",(function(){console.log("add todo button pressed"),document.getElementById("toDoDesc").value="",document.getElementById("toDoDueDate").value="";var o=document.getElementById("myModal"),n=(document.getElementById("addTodo"),document.getElementsByClassName("close")[0]);o.style.display="block",n.onclick=function(){o.style.display="none"},window.onclick=function(e){e.target==o&&(o.style.display="none")},submitToDo.onclick=function(){console.log("sumbit to do button pressed"),document.getElementById("addTodo");let n=document.getElementById("toDoDesc").value,l=document.getElementById("toDoDueDate").value,d=document.getElementById("categorySelector").value;console.log(d),document.querySelector(".mainCategoryList");const c=document.querySelector("."+d);c.toString();const a=document.createElement("div");a.classList.add("todo"),a.setAttribute("id",n),c.appendChild(a);const s=document.createElement("input");s.setAttribute("type","checkbox"),s.setAttribute("id","checkbox"),s.classList.add("checkBox"),a.appendChild(s);const r=document.createElement("label");r.classList.add("task"),r.innerHTML=n,a.appendChild(r);const i=document.createElement("div");i.classList.add("dueDate"),i.innerHTML=""==l?"":"Due by: "+l,a.appendChild(i);const u=document.createElement("button");u.classList.add("deleteTodo"),u.setAttribute("id","deleteTodo"),u.innerHTML="X",a.appendChild(u),u.addEventListener("click",e),s.addEventListener("click",t),o.style.display="none"}})),document.getElementById("addCategory").addEventListener("click",(function(){document.getElementById("categoryDesc").value="";var e=document.getElementById("myCategoryModal"),t=(document.getElementById("addCategory"),document.getElementsByClassName("close")[1]);e.style.display="block",t.onclick=function(){e.style.display="none"},window.onclick=function(t){t.target==e&&(e.style.display="none")},submitCategory.onclick=function(){var t=document.getElementById("addCategory"),l=document.getElementById("categoryDesc").value,d=l.replace(/\s/g,"");if(document.getElementById("categoryDesc").setAttribute("placeholder","Enter Category Here"),d.checkValidity())console.log("CHECK VAILDITY RAN HERE");else{const c=document.querySelector(".categoryColumn"),a=document.createElement("div");a.classList.add("subCategory"),a.setAttribute("id","a"+d),a.setAttribute("style","cursor: pointer"),a.addEventListener("click",n),c.insertBefore(a,t);const s=document.createElement("label");s.classList.add("task"),s.innerHTML=l,a.appendChild(s);const r=document.createElement("button");r.classList.add("deleteCategory"),r.setAttribute("id","deleteCategory"),r.innerHTML="X",a.appendChild(r);const i=document.querySelector(".listColumn"),u=document.createElement("div");u.classList.add("a"+d),u.setAttribute("id","a"+d),i.insertBefore(u,addTodo);const m=document.querySelector(".categorySelector"),y=document.createElement("option");y.setAttribute("value","a"+d),y.innerHTML=l,m.appendChild(y),e.style.display="none",r.addEventListener("click",o)}}})),document.getElementById("deleteTodo"),document.querySelector(".maincatbutn").style.cursor="pointer",document.getElementById("maincatbutn").addEventListener("click",n)})();