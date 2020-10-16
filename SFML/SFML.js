function render() {
    function css() {
        var x = document.getElementsByTagName("styles").length;
        for (y = 0; y < x; y++) {
            var styles = document.getElementsByTagName("styles")[y].innerHTML;
            document.getElementsByTagName("styles")[y].style.display = "none";
            styles = styles.replace(/ /g, "");
            styles = styles.replace(/\n/g, "");
            styles = styles.split(",");
            var a = styles.length;
            for (b = 0; b < a; b++) {
                var style = document.createElement("link");
                style.setAttribute("rel", "stylesheet");
                style.setAttribute("type", "text/css");
                style.setAttribute("href", "" + styles[b] + "");
                document.getElementsByTagName("head")[0].appendChild(style);
            }
        }
    }
    function js() {
        var x = document.getElementsByTagName("scripts").length;
        for (y = 0; y < x; y++) {
            var scripts = document.getElementsByTagName("scripts")[y].innerHTML;
            document.getElementsByTagName("scripts")[y].style.display = "none";
            scripts = scripts.replace(/ /g, "");
            scripts = scripts.replace(/\n/g, "");
            scripts = scripts.split(",");
            var a = scripts.length;
            for (b = 0; b < a; b++) {
                if (document.getElementsByTagName("scripts")[y].getAttribute("place") == "head") {
                    var script = document.createElement("script");
                    script.setAttribute("type", "text/javascript");
                    script.setAttribute("src", "" + scripts[b] + "");
                    document.getElementsByTagName("head")[0].appendChild(script);
                } else if (document.getElementsByTagName("scripts")[y].getAttribute("place") == "body") {
                    var script = document.createElement("script");
                    script.setAttribute("type", "text/javascript");
                    script.setAttribute("src", "" + scripts[b] + "");
                    document.getElementsByTagName("body")[0].appendChild(script);
                }
            }
        }
    }
    css();
    js();
}
function style() {
    document.getElementsByTagName("body")[0].style.overflowX = "hidden";
    function nav() {
        var x = document.getElementsByTagName("nav").length;
        var changed = false;
        var used = false;
        if (modern) {
            for (y = 0; y < x; y++) {
                var nav = document.getElementsByTagName("nav")[y];
                var style = nav.style;
                var option = nav.getAttribute("size");
                if (Number(option) > 6) {
                    option = 5;
                } else if (option == "1") {
                    option = 10;
                } else if (option == "2") {
                    option = 9;
                } else if (option == "3") {
                    option = 8;
                } else if (option == "4") {
                    option = 7;
                } else if (option == "5") {
                    option = 6;
                } else if (option == "6") {
                    option = 5;
                }
                option = Number(option) * 7;
                style.position = "absolute";
                style.top = "0";
                style.left = "0";
                style.width = "99vw";
                style.maxWidth = "99vw";
                style.backgroundColor = nav.getAttribute("bg-color");
                style.color = nav.getAttribute("color");
                style.height = option + "px";
                style.padding = "15px";
                if (nav.getAttribute("nav") == "modern") {
                    var brand = nav.getElementsByTagName("brand")[0];
                    brand.style.position = "relative";
                    brand.style.top = option/2 - 10 + "px";
                    brand.style.left =  "20px";
                    brand.style.fontFamily = "Arial";
                    brand.style.fontSize = "25px";
                    var a = nav.getElementsByTagName("form").length;
                    for (b = 0; b < a; b++) {
                        var form = nav.getElementsByTagName("form")[b];
                        var type = form.getAttribute("nav-form");
                        if (type = "search") {
                            
                        }
                    }
                }
                function linkNavigation() {
                    nav.getElementsByTagName("navigation")[0].style.zIndex = "100";
                    if (used) {
                        nav.getElementsByTagName("navigation")[0].removeAttribute("style");
                    } 
                    var a = nav.getElementsByTagName("navigation")[0].getElementsByTagName("a").length;
                    for (b = 0; b < a; b++) {
                        var link = nav.getElementsByTagName("navigation")[0].getElementsByTagName("a")[b];
                        link.style.color = "" + link.getAttribute("color") + "";
                        link.style.textDecoration = "none";
                        link.innerHTML = link.innerHTML.replace(/<br>/g, "");
                        if (nav.getAttribute("nav") == "modern") {
                            link.style.position = "relative";
                            link.style.top = option/2 - 10 + "px";
                            link.style.left =  "40px";
                            link.style.fontFamily = "Arial";
                            link.style.marginLeft = "20px";
                            link.style.display = "inline";
                            link.style.fontSize = "17.5px";
                            link.onmouseover = function() {
                                this.style.opacity = "0.5";
                            }
                            link.onmouseout = function() {
                                this.style.opacity = "1";
                            }
                        }
                    }
                    nav.getElementsByTagName("menu")[0].style.display = "none";
                }
                var navWidth = nav.innerText.length;
                function wrapNav() {
                    nav.getElementsByTagName("navigation")[0].style.textAlign = "center";
                    var a = nav.getElementsByTagName("navigation")[0].getElementsByTagName("a").length;
                    for (b = 0; b < a; b++) {
                        var link = nav.getElementsByTagName("navigation")[0].getElementsByTagName("a")[b];
                        link.innerHTML = link.innerHTML.replace(/<br>/g, "");
                        link.style.marginLeft = "-50";
                        link.innerHTML += "<br><br>";
                    }
                    nav.getElementsByTagName("menu")[0].style.display = "block";
                    nav.getElementsByTagName("navigation")[0].style.width = "100vw";
                    nav.getElementsByTagName("navigation")[0].style.display = "none";
                    nav.getElementsByTagName("navigation")[0].style.backgroundColor = "white";
                    nav.getElementsByTagName("navigation")[0].style.position = "absolute";
                    nav.getElementsByTagName("navigation")[0].style.top = "100px";
                    nav.getElementsByTagName("navigation")[0].style.left = "0";
                    nav.getElementsByTagName("navigation")[0].style.paddingBottom = "25px";
                    nav.height = "500px";
                }
                var menu = nav.getElementsByTagName("menu")[0];
                menu.innerHTML = "<div></div><div></div><div></div>";
                menu.style.cursor = "pointer";
                menu.getElementsByTagName("div")[0].style.width = "35px";
                menu.getElementsByTagName("div")[0].style.height = "5px";
                menu.getElementsByTagName("div")[0].style.backgroundColor = menu.getAttribute("color");
                menu.getElementsByTagName("div")[0].style.margin = "6px 0";
                menu.getElementsByTagName("div")[0].style.transition = "0.4s";
                
                menu.getElementsByTagName("div")[1].style.width = "35px";
                menu.getElementsByTagName("div")[1].style.height = "5px";
                menu.getElementsByTagName("div")[1].style.backgroundColor = menu.getAttribute("color");
                menu.getElementsByTagName("div")[1].style.margin = "6px 0";
                menu.getElementsByTagName("div")[1].style.transition = "0.4s";
                
                menu.getElementsByTagName("div")[2].style.width = "35px";
                menu.getElementsByTagName("div")[2].style.height = "5px";
                menu.getElementsByTagName("div")[2].style.backgroundColor = menu.getAttribute("color");
                menu.getElementsByTagName("div")[2].style.margin = "6px 0";
                menu.getElementsByTagName("div")[2].style.transition = "0.4s";
                menu.style.position = "absolute";
                menu.style.top = option/2 - 17.5 + "px";
                menu.style.right = "50px";
                menu.style.display = "none";
                menu.onclick = function() {
                    if (!changed) {
                        menu.getElementsByTagName("div")[0].style.webkitTransform = "rotate(-45deg) translate(-9px, 6px)";
                        menu.getElementsByTagName("div")[0].style.transform = "rotate(-45deg) translate(-9px, 6px)";
                        menu.getElementsByTagName("div")[1].style.opacity = "0";
                        menu.getElementsByTagName("div")[2].style.webkitTransform = "rotate(45deg) translate(-8px, -8px)";
                        menu.getElementsByTagName("div")[2].style.transform = "rotate(45deg) translate(-8px, -8px)";
                        nav.getElementsByTagName("navigation")[0].style.display = "block";
                        changed = true;
                    } else if (changed) {
                        menu.getElementsByTagName("div")[0].style.webkitTransform = "rotate(0deg) translate(0px, 0px)";
                        menu.getElementsByTagName("div")[0].style.transform = "rotate(0deg) translate(0px, 0px)";
                        menu.getElementsByTagName("div")[1].style.opacity = "1";
                        menu.getElementsByTagName("div")[2].style.webkitTransform = "rotate(0deg) translate(0px, 0px)";
                        menu.getElementsByTagName("div")[2].style.transform = "rotate(0deg) translate(0px, 0px)";
                        nav.getElementsByTagName("navigation")[0].style.display = "none";
                        changed = false;
                    }
                }
                function loadNav() {
                    var windowWidth = window.innerWidth;
                    if (((nav.innerText.length + 1) * 8) + (windowWidth / 100 * 35) > window.innerWidth || windowWidth < 1000) {
                        linkNavigation();
                        wrapNav();
                    } else if (((navWidth + 1) * 8) + (windowWidth / 100 * 35) < windowWidth) {
                        linkNavigation();
                        menu.getElementsByTagName("div")[0].style.webkitTransform = "rotate(0deg) translate(0px, 0px)";
                        menu.getElementsByTagName("div")[0].style.transform = "rotate(0deg) translate(0px, 0px)";
                        menu.getElementsByTagName("div")[1].style.opacity = "1";
                        menu.getElementsByTagName("div")[2].style.webkitTransform = "rotate(0deg) translate(0px, 0px)";
                        menu.getElementsByTagName("div")[2].style.transform = "rotate(0deg) translate(0px, 0px)";
                        changed = false;
                        used = true;
                    }
                }
                window.onresize = function() {
                    var windowWidth = window.innerWidth;
                    if (((navWidth + 1) * 8) + (windowWidth / 100 * 35) > windowWidth || windowWidth < 1000) {
                        if (!changed) {
                            wrapNav();
                        }
                    } else if (((navWidth + 1) * 8) + (windowWidth / 100 * 35) < windowWidth) {
                        linkNavigation();
                        menu.getElementsByTagName("div")[0].style.webkitTransform = "rotate(0deg) translate(0px, 0px)";
                        menu.getElementsByTagName("div")[0].style.transform = "rotate(0deg) translate(0px, 0px)";
                        menu.getElementsByTagName("div")[1].style.opacity = "1";
                        menu.getElementsByTagName("div")[2].style.webkitTransform = "rotate(0deg) translate(0px, 0px)";
                        menu.getElementsByTagName("div")[2].style.transform = "rotate(0deg) translate(0px, 0px)";
                        changed = false;
                        used = true;
                    }
                }
                loadNav();
        }
        }
    }
    nav();
}
window.onload = render();
window.onload = style();
