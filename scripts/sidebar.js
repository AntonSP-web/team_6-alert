// const buttonArrow = document.querySelector('.sidebar__button');
// const sideBarList = document.querySelector('.sidebar__list');

// sideBarList.addEventListener('click', (evt) => {
//   const elem = evt.target.closest('.sidebar__item');
//   const listActivity = elem.querySelector('.sidebar__list-activity');
//   if(evt.target.classList.contains('sidebar__button_type_arrow-down')) {
//     listActivity.classList.remove('sidebar__list-activity_closed');
//     evt.target.classList.remove('sidebar__button_type_arrow-down');
//     evt.target.classList.add('sidebar__button_type_arrow-up');

//   } else if(evt.target.classList.contains('sidebar__button_type_arrow-up')) {
//     evt.target.classList.remove('sidebar__button_type_arrow-up');
//     evt.target.classList.add('sidebar__button_type_arrow-down');
//     listActivity.classList.add('sidebar__list-activity_closed');
//   }
// });

const wrappers = document.querySelectorAll('.sidebar__wrapper');

wrappers.forEach(wrapper => {
  wrapper.addEventListener('click', (evt) => {
    const elem = evt.target.closest('.sidebar__item');
    const listActivity = elem.querySelector('.sidebar__list-activity');
    const buttonArrow = wrapper.querySelector('.sidebar__button');
    buttonArrow.classList.toggle('sidebar__button_type_arrow-up');
    buttonArrow.classList.toggle('sidebar__button_type_arrow-down');
    listActivity.classList.toggle('sidebar__list-activity_closed');
  })
})

export default wrappers;
