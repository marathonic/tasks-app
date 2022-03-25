//we need a function to do the following:
//when the function runs,
// register the clicked Project's id && look for 
// an item in the array of fragments that is an exact match

//this function will run when clicking a project div,
//at the end of the event listener.
//We can later modify it to switch to a newly created proj.
//upon pressing the 'OK' button to create the project.

//WE COULD JUST USE NUMBERS AS id
// that way, we just iterate through the array
//and attach an id of <      i    > to each item
//in the array.

//we do the same each time a project div is created,
//and so a if div gets id = 1, the project that is created
//for it in that same second, will get id = 1, however,
//ids must be unique. So we could match id '1' to id '1-doc';
// function openProject(e) {
//     e.target.id ===  
// }

export default function divJam() {

        const newDiv = document.querySelector('.new-project-div');
        newDiv.addEventListener('click', function() {
            alert('ok');
            let throwaway = mainPanel.removeChild(fragmentsArray[0]);

         })
}





// (async () => {
    
// })();
    

//we don't need all that much

// when creating new Project:

//give the project div an id of its text + a number;
// let i = 0;
// div.id = div.textContent + '-' + i;
//       let's say it's called ProjectOne. 
//       div.id = projectOne-1;
// ++i;
// div.id = div.textContent + '-' + i;
//        if we named it ProjectTwo,
//        div.id = projectTwo-2;
// ++i;
//
//then, just give each new project (newPanel) an id of i;
//
// 

//
//HOW DO WE CREATE MULTIPLE newPanels, each storing its own project?
//right now  we're working with 1 div called newPanel,
// however, we're not creating a new one each time,
//just modifying the 1 div we have by the name of "newPanel".
//let's see how far we can get it working.