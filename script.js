/* In each "li" after the delete button add an edit button with class 'edit-btn'. Once you do this
 the output on the screen will look like this:
 Now, implement the add and delete functionality just the way it is done in the video. 
 There is only one difference that now the new 'li' element that you will create will have two buttons 
 (delete and edit) instead of one button.
Note:
You have to just add the edit button. You do not have to implement the edit functionality.
Do not touch the html file.
To listen for form submission event use addEventListener. */

const deletebtn=document.getElementsByClassName('delete-btn')
for(let i=0;i<deletebtn.length;i++)
{
    const editbtn=document.createElement('button')
    editbtn.textContent='edit'
    editbtn.classList.add('edit-btn')
    deletebtn[i].insertAdjacentElement('afterend', editbtn);}

    const form=document.querySelector('form')
    const fruits=document.querySelector('.fruits')

    fruits.addEventListener('click',function(event){
        if(event.target.classList.contains('delete-btn'))
        {
            const fruittodel=event.target.parentElement
            fruits.removeChild(fruittodel)
        }
    });

    form.addEventListener('submit',function(event){
        event.preventDefault();
        const newInput=document.getElementById('fruit-to-add')
        const newli=document.createElement('li')
        newli.innerHTML=newInput.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>'
        fruits.appendChild(newli);
    })