// This Jacascript code is for the 
// If the scrolling of the page is up to 50px, this function will make the "display" of the "bck-to-top" button "none" 
    //(i.e It will Change it from "display: none" to "display: block")
    
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("bck-to-top-id").style.display = "block";
        } else {
            document.getElementById("bck-to-top-id").style.display = "none";
        }
    }
    
    // If you click the button, this function will returm you back to top of the page

    function topFunction() {
        document.documentElement.scrollTop = 0; // This line is for Chrome and other compatible ones... Maybe Opera, Firefox, MS Edge etc...
        document.body.scrollTop = 0;     // This Line is Particularly for Safari Browser
    }


    // Let's do it here 

    function openNav() {
        document.getElementById("myNav").style.height = "100%";
    }
    
    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }
// Just trying this 

    function filter(){
        document.getElementById('first').style.display = 'none';
        document.getElementById('second').style.display = 'none';
    }