//get all required elements from dom

    // get burger button

    let burgerButton = document.getElementById('burger-button');

    //get navbar

    let navBar = document.getElementById('navbar');

    //get header

    let headerNav = document.getElementById('header-nav');


// functions to hide or display navbar when burger is clicked

    // display/hide navbar

    const displayNav = () => {

        // fix header

        if (headerNav.classList.contains('hide-nav')){
            headerNav.classList.remove('hide-nav');
        } else {
            headerNav.classList.add('hide-nav');
        }

        if (navBar.classList.contains('display-navbar')) {
            navBar.classList.remove('display-navbar');
        } else {
            navBar.classList.add('display-navbar');
        }

        // change button
        
        if (burgerButton.classList.contains('cancel-bar')) {
            burgerButton.classList.remove('cancel-bar');
        } else {
            burgerButton.classList.add('cancel-bar');
        }

    }

    // change button


    // run functions on click

    burgerButton.addEventListener("click", () => {
        displayNav();
    });

// Copy text for Z-type

// create array with all 'copy buttons'

let copyTextButtons = document.getElementsByClassName('btnstyle-copy');

// Explore array and extract text from previous sibling element for each button

for (const copyButton of copyTextButtons){
    let contentToCopy = copyButton.previousElementSibling.innerHTML;
    console.log(contentToCopy);

    // Copy said text 

    const copyText = () => {
    navigator.clipboard.writeText(contentToCopy);
}

    // call above function when a button is clicked
    copyButton.addEventListener("click", () => {
        copyText();

        //notify user with a friendly pop up
        alert('Texte copié 😉')
    })
}





