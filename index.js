const ProfileContainer = document.querySelector('.profile_links_container');

const buttonAttributes = [
    {text: 'Github'},
    {text: 'Frontend Mentor'},
    {text: 'Linkedin'},
    {text: 'Twitter'},
    {text: 'Instagram'}
]

// For loop to display buttons

function displayButton(){
   for (let i = 0; i < buttonAttributes.length; i++){
    // console.log(buttonAttributes[i]);
    const button = document.createElement('button');
    button.textContent = buttonAttributes[i].text;
    ProfileContainer.appendChild(button);
   }
}

displayButton();