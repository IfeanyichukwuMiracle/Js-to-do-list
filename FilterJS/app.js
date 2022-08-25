let searchInput = document.querySelector('#search');
let searchBtn = document.querySelector('#search-btn');
let contacts = document.querySelectorAll('div.contact');

let allBtn = document.querySelector('#all-btn');

searchBtn.addEventListener('click', function() {
    let searchedValue = searchInput.value;

    contacts.forEach((contact) => {
        if(contact.classList.contains(searchedValue.toLowerCase())){
            contact.style.display = "flex";

        }if(!contact.classList.contains(searchedValue.toLowerCase())) {
            contact.style.display = "none";
        }
    });
    allBtn.addEventListener('click', () => {
        contacts.forEach(function(contact){
            if(contact.classList.contains('no-display')) {
                contact.style.display = "none";
            }else{
                contact.style.display = "flex";
            }
        })
    })
});

let contactContainer = document.querySelector('section.contact-container');
let deleteModal = document.querySelector('section.delete-modal');

let cancelBtn = document.querySelector('#cancel');
let deleteBtn = document.querySelector('#continue');

let editModal = document.querySelector('section.edit-modal');

let cancelEdit = document.querySelector('div.head .fa-xmark');

let textEdit = document.querySelector('section.edit-modal input[type="text"]');
let changeBtn = document.querySelector('section.edit-modal input[type="button"]');

let newName = textEdit.value;

contactContainer.addEventListener('click', (e) => {
    let targetIcon = e.target;
    
    if(targetIcon.classList.contains('fa-trash')) {
        targetIcon.addEventListener('click', () => {
            deleteModal.classList.remove('no-display');
        });

    deleteBtn.addEventListener('click', () => {
        deleteModal.classList.add('no-display');
        targetIcon.parentElement.parentElement.parentElement.style.display = "none";
    })
    cancelBtn.addEventListener('click', () => {
        deleteModal.classList.add('no-display');
    })
    }


    else if(targetIcon.classList.contains('fa-pen')) {
        targetIcon.addEventListener('click', () => {
            editModal.classList.remove('hide-edit');
            editModal.classList.add('show-edit');
        });
        cancelEdit.addEventListener('click', () => {
            editModal.classList.remove('show-edit');
            editModal.classList.add('hide-edit');
        });
        changeBtn.addEventListener('click', () => {
            targetIcon.parentElement.parentElement.firstElementChild.innerText = textEdit.value;
            targetIcon.parentElement.parentElement.parentElement.classList.add(textEdit.value.toLowerCase());
        })
    }
})
