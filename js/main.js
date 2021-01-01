// const questions = document.querySelectorAll('.question');


// questions.forEach((question) => {
//   const btn = question.querySelector('.question-btn');

//   btn.addEventListener('click', () => {
//     questions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove('show-text');
//       }
//     });
//     question.classList.toggle('show-text');
//   });
// });


const btns = document.querySelectorAll('.question-btn');


btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    const questionS = document.querySelectorAll('.question');

    questionS.forEach((thing) => {
      if (thing !== question) {
        thing.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});

