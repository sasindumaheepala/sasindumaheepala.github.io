function render(){!function(){var e=document.getElementsByTagName("styles").length;for(y=0;y<e;y++){var t=document.getElementsByTagName("styles")[y].innerHTML;document.getElementsByTagName("styles")[y].style.display="none";var a=(t=(t=(t=t.replace(/ /g,"")).replace(/\n/g,"")).split(",")).length;for(b=0;b<a;b++){var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",""+t[b]),document.getElementsByTagName("head")[0].appendChild(n)}}}(),function(){var e=document.getElementsByTagName("scripts").length;for(y=0;y<e;y++){var t=document.getElementsByTagName("scripts")[y].innerHTML;document.getElementsByTagName("scripts")[y].style.display="none";var a=(t=(t=(t=t.replace(/ /g,"")).replace(/\n/g,"")).split(",")).length;for(b=0;b<a;b++)if("head"==document.getElementsByTagName("scripts")[y].getAttribute("place"))(n=document.createElement("script")).setAttribute("type","text/javascript"),n.setAttribute("src",""+t[b]),document.getElementsByTagName("head")[0].appendChild(n);else if("body"==document.getElementsByTagName("scripts")[y].getAttribute("place")){var n;(n=document.createElement("script")).setAttribute("type","text/javascript"),n.setAttribute("src",""+t[b]),document.getElementsByTagName("body")[0].appendChild(n)}}}()}function style(){document.getElementsByTagName("body")[0].style.overflowX="hidden",function(){var e,t=document.getElementsByTagName("nav").length,a=!1,n=!1;for(y=0;y<t;y++){var s=document.getElementsByTagName("nav")[y];if("modern"==s.getAttribute("nav")){var l=s.style,g=s.getAttribute("size");if(Number(g)>6?g=5:"1"==g?g=10:"2"==g?g=9:"3"==g?g=8:"4"==g?g=7:"5"==g?g=6:"6"==g&&(g=5),g=7*Number(g),l.position="absolute",l.top="0",l.left="0",l.width="99vw",l.maxWidth="99vw",l.backgroundColor=s.getAttribute("bg-color"),l.color=s.getAttribute("color"),l.height=g+"px",l.padding="15px","modern"==s.getAttribute("nav")){var i=s.getElementsByTagName("brand")[0];i.style.position="relative",i.style.top=g/2-10+"px",i.style.left="20px",i.style.fontFamily="Arial",i.style.fontSize="25px";var m=s.getElementsByTagName("form").length;for(b=0;b<m;b++)s.getElementsByTagName("form")[b].getAttribute("nav-form")}function r(){s.getElementsByTagName("navigation")[0].style.zIndex="100",n&&s.getElementsByTagName("navigation")[0].removeAttribute("style");var e=s.getElementsByTagName("navigation")[0].getElementsByTagName("a").length;for(b=0;b<e;b++){var t=s.getElementsByTagName("navigation")[0].getElementsByTagName("a")[b];t.style.color=""+t.getAttribute("color"),t.style.textDecoration="none",t.innerHTML=t.innerHTML.replace(/<br>/g,""),"modern"==s.getAttribute("nav")&&(t.style.position="relative",t.style.top=g/2-10+"px",t.style.left="40px",t.style.fontFamily="Arial",t.style.marginLeft="20px",t.style.display="inline",t.style.fontSize="17.5px",t.onmouseover=function(){this.style.opacity="0.5"},t.onmouseout=function(){this.style.opacity="1"})}s.getElementsByTagName("menu")[0].style.display="none"}var o=s.innerText.length;function d(){s.getElementsByTagName("navigation")[0].style.textAlign="center";var e=s.getElementsByTagName("navigation")[0].getElementsByTagName("a").length;for(b=0;b<e;b++){var t=s.getElementsByTagName("navigation")[0].getElementsByTagName("a")[b];t.innerHTML=t.innerHTML.replace(/<br>/g,""),t.style.marginLeft="-50",t.innerHTML+="<br><br>"}s.getElementsByTagName("menu")[0].style.display="block",s.getElementsByTagName("navigation")[0].style.width="100vw",s.getElementsByTagName("navigation")[0].style.display="none",s.getElementsByTagName("navigation")[0].style.backgroundColor="white",s.getElementsByTagName("navigation")[0].style.position="absolute",s.getElementsByTagName("navigation")[0].style.top="100px",s.getElementsByTagName("navigation")[0].style.left="0",s.getElementsByTagName("navigation")[0].style.paddingBottom="25px",s.height="500px"}var p=s.getElementsByTagName("menu")[0];p.innerHTML="<div></div><div></div><div></div>",p.style.cursor="pointer",p.getElementsByTagName("div")[0].style.width="35px",p.getElementsByTagName("div")[0].style.height="5px",p.getElementsByTagName("div")[0].style.backgroundColor=p.getAttribute("color"),p.getElementsByTagName("div")[0].style.margin="6px 0",p.getElementsByTagName("div")[0].style.transition="0.4s",p.getElementsByTagName("div")[1].style.width="35px",p.getElementsByTagName("div")[1].style.height="5px",p.getElementsByTagName("div")[1].style.backgroundColor=p.getAttribute("color"),p.getElementsByTagName("div")[1].style.margin="6px 0",p.getElementsByTagName("div")[1].style.transition="0.4s",p.getElementsByTagName("div")[2].style.width="35px",p.getElementsByTagName("div")[2].style.height="5px",p.getElementsByTagName("div")[2].style.backgroundColor=p.getAttribute("color"),p.getElementsByTagName("div")[2].style.margin="6px 0",p.getElementsByTagName("div")[2].style.transition="0.4s",p.style.position="absolute",p.style.top=g/2-17.5+"px",p.style.right="50px",p.style.display="none",p.onclick=function(){a?a&&(p.getElementsByTagName("div")[0].style.webkitTransform="rotate(0deg) translate(0px, 0px)",p.getElementsByTagName("div")[0].style.transform="rotate(0deg) translate(0px, 0px)",p.getElementsByTagName("div")[1].style.opacity="1",p.getElementsByTagName("div")[2].style.webkitTransform="rotate(0deg) translate(0px, 0px)",p.getElementsByTagName("div")[2].style.transform="rotate(0deg) translate(0px, 0px)",s.getElementsByTagName("navigation")[0].style.display="none",a=!1):(p.getElementsByTagName("div")[0].style.webkitTransform="rotate(-45deg) translate(-9px, 6px)",p.getElementsByTagName("div")[0].style.transform="rotate(-45deg) translate(-9px, 6px)",p.getElementsByTagName("div")[1].style.opacity="0",p.getElementsByTagName("div")[2].style.webkitTransform="rotate(45deg) translate(-8px, -8px)",p.getElementsByTagName("div")[2].style.transform="rotate(45deg) translate(-8px, -8px)",s.getElementsByTagName("navigation")[0].style.display="block",a=!0)},window.onresize=function(){var e=window.innerWidth;8*(o+1)+e/100*35>e||e<1e3?a||d():8*(o+1)+e/100*35<e&&(r(),p.getElementsByTagName("div")[0].style.webkitTransform="rotate(0deg) translate(0px, 0px)",p.getElementsByTagName("div")[0].style.transform="rotate(0deg) translate(0px, 0px)",p.getElementsByTagName("div")[1].style.opacity="1",p.getElementsByTagName("div")[2].style.webkitTransform="rotate(0deg) translate(0px, 0px)",p.getElementsByTagName("div")[2].style.transform="rotate(0deg) translate(0px, 0px)",a=!1,n=!0)},e=void 0,e=window.innerWidth,8*(s.innerText.length+1)+e/100*35>window.innerWidth||e<1e3?(r(),d()):8*(o+1)+e/100*35<e&&(r(),p.getElementsByTagName("div")[0].style.webkitTransform="rotate(0deg) translate(0px, 0px)",p.getElementsByTagName("div")[0].style.transform="rotate(0deg) translate(0px, 0px)",p.getElementsByTagName("div")[1].style.opacity="1",p.getElementsByTagName("div")[2].style.webkitTransform="rotate(0deg) translate(0px, 0px)",p.getElementsByTagName("div")[2].style.transform="rotate(0deg) translate(0px, 0px)",a=!1,n=!0)}}}()}window.onload=render(),window.onload=style();
