const containerCarCatalog = document.querySelector('.container__car-catalog');

if (containerCarCatalog.children.length < 2) {
  containerCarCatalog.style.display = 'none';
}


const btnOpenAddForm = document.querySelector('.btn-open--add-form');
const btnCloseAddForm = document.querySelector('.btn-close--add-form');
const modalCarAdd = document.querySelector('.modal__car-add');

btnOpenAddForm.addEventListener('click', () => {
  modalCarAdd.showModal();
});
btnCloseAddForm.addEventListener('click', () => {
  modalCarAdd.close();
});

const btnOpenEditForm = document.querySelector('.btn-open--edit-form');
const btnCloseEditForm = document.querySelector('.btn-close--edit-form');
const modalCarEdit = document.querySelector('.modal__car-edit');

btnOpenEditForm.addEventListener('click', () => {
  modalCarEdit.showModal();
});
btnCloseEditForm.addEventListener('click', () => {
  modalCarEdit.close();
});

const btnOpenRemoveForm = document.querySelector('.btn-open--remove-form');
const btnCloseRemoveForm = document.querySelector('.btn-close--remove-form');
const modalCarRemove = document.querySelector('.modal__car-remove');

btnOpenRemoveForm.addEventListener('click', () => {
  modalCarRemove.showModal();
});
btnCloseRemoveForm.addEventListener('click', () => {
  modalCarRemove.close();
});