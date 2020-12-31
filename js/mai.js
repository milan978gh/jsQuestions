// using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach(item => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});


// traversing the DOM
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     const questions = document.querySelectorAll('.question');
//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove('show-text');
//       }
//     });
//     question.classList.toggle('show-text');
//   });
// });
