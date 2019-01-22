/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*hätte aber gern onresize*/ 
window.onload = function navigation(){
    if (window.matchMedia("(min-width: 1200px)").matches) { // If media query matches
        console.log("The screen is at least 1200px big")
        document.getElementById('navi').innerHTML=`
            <div id='navbar'>
                <img src='./data/menu/drakan-symbol-new-gross.PNG' width: 732; height: 819;>
                <section id='top-crystal'>
                    <a href='./index.html'>
                        <img class='bottom' src='./data/menu/kristall1.png' >
                        <img class='top' src='./data/menu/kristall3.png' >
                    </a>
                </section>
                <section id='middle-crystal'>
                    <a href='./gallery.html'>
                        <img class='bottom' src='./data/menu/kristall1-g.png' >
                        <img class='top' src='./data/menu/kristall3-g.png' >
                    </a>
                </section>
                <section id='left-middle-crystal'>
                    <a href='./arokh.html'>
                        <img class='bottom' src='./data/menu/kristall1.png' >
                        <img class='top' src='./data/menu/kristall3.png' >
                    </a>
                </section>
                <section id='right-middle-crystal'>
                    <a href='./rynn.html'>
                        <img class='bottom' src='./data/menu/kristall1.png' >
                        <img class='top' src='./data/menu/kristall3.png' >
                    </a>
                </section>
                <section id='left-lower-crystal'>
                    <a href='./contact.html'>
                        <img class='bottom' src='./data/menu/kristall1-k.png' >
                        <img class='top' src='./data/menu/kristall3-k.png' >
                    </a>
                </section>
                <section id='right-lower-crystal'>
                    <a href='./links.html'>
                        <img class='bottom' src='./data/menu/kristall1-k.png' >
                        <img class='top' src='./data/menu/kristall3-k.png' >
                    </a>
                </section>
                <section id='bottom-crystal'>
                    <img class='bottom' src='./data/menu/kristall1-g.png' >
                    <img class='top' src='./data/menu/kristall3-g.png' >
                </section>
            </div>
         `;
    } else{
         console.log("the screen is smaller than 1200px");
         document.getElementById('navi').innerHTML =`
            <input id="check01" type="checkbox" name="Menu" />
            <label id="menu-label" for="check01">Menu</label>
            <ul class="submenu">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./gallery.html">Gallery</a></li>
                <li><a href="./arokh.html">Arokh</a></li>
                <li><a href="./rynn.html">Rynn</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li><a href="./links.html">Links</a></li>
            </ul>
        `;
    }
}