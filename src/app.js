// Place your DOM creation code here

// Took me a while to figure out you cant just append different elements to the document and expect it to behave normally
// So, I am going to contain the entire body inside the "main" element. I will then append the element main to the documents body
// Had to use https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main to find out the main tag "doesn't affect the DOM's concept of the structure of the page."
// What a pain in the butt! If I had looked closer at the old index file, it would have saved me a lot of hassle
const main = document.createElement("main");

// Adding in a section element too since that is contained inside the main in the old index. This changes the heading to the correct size
const section = document.createElement("section");

// From https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction just modified slightly
// Heading
const heading = document.createElement("h1");
const headingText = document.createTextNode("Homework 01");
heading.appendChild(headingText);
section.appendChild(heading);

// First paragraph
const paragraph1 = document.createElement("p");
const paragraph1Text = document.createTextNode("For this homework, I want you to recreate this HTML page using JavaScript and the DOM API. " +
                                          "This means, the HTML should have a blank body and minimal head. " +
                                          "Once the page loads, use JavaScript to recreate all the elements from the original page.");
paragraph1.appendChild(paragraph1Text);
section.appendChild(paragraph1);

// Second paragraph
const paragraph2 = document.createElement("p");
const paragraph2Text = document.createTextNode("To make it fun, and maybe a bit tricky, I've added several types of elements. " +
                                          "Some elements are pretty simple like these <p> tags. " +
                                          "Others are more going to require extra attributes or mixing text nodes with element nodes.");
paragraph2.appendChild(paragraph2Text);
section.appendChild(paragraph2);

// Putting section inside the main
main.appendChild(section);

// Displays the heading and paragraphs
document.body.appendChild(main);

// Creating the aside element
const aside = document.createElement("aside");

// Mario image
const image = document.createElement("img");
// Ended up having to google to figure out how to set the image source https://flaviocopes.com/how-to-add-image-dom/
image.src = "assets/mario.png";
aside.appendChild(image);

// Blockquote
const quote = document.createElement("blockquote");
// Had issues getting the reserved character to work. Ended up finding out about Template Strings from https://www.w3schools.com/js/js_strings.asp
// Really neat backticks allow you to use quotes inside your strings
quote.textContent = 'Mario says "Wahoo!" to homework';
aside.appendChild(quote);

// Audio
const sound = document.createElement("audio")
sound.controls = true;
sound.autoplay = false;
sound.src = "assets/Super Mario Bros. medley.mp3";
aside.appendChild(sound);

// Displays the aside
document.body.appendChild(aside);