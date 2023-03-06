    //FORM VALIDATION  
//First, let's target all the ID selectors from the HTML in JavaScript.
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

    /* Then, build a submit event listener for the 
    form so that it can prevent the default behaviour of our App. 
    At the same time, we will create a function named formValidation.*/

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank!";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

    //How to accept data from input fields

    /*Whatever data we get from the input fields, we will store them in an object. 
    Let's create an object named data. And, create a function named acceptData*/

let data = {};
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

    //How to create posts using JavaScript template literals
    /*In order to post our input data on the right side, we need to create a div element 
    and append it to the posts div. First, let's create a function and write these lines*/

let createPost = () => {
    posts.innerHTML += `
        <div>
            <p>${data.text}</p>
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i>    
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
        </div>
        `;
        input.value = "";
};
    //After this, in acceptdata function, we will fire our createPost function. 

    //How to delete a post
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

    //How to edit a post
    let editPost = (e) => {
        input.value = e.parentElement.previousElementSibling.innerHTML;
        e.parentElement.parentElement.remove();
      };