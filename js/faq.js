const img1 = document.querySelector('.faq-img1 ');
const img2 = document.querySelector('.faq-img2 ');
const img3 = document.querySelector('.faq ');
const questions = document.querySelectorAll('.question');
const title = document.querySelector('.faq-top-left h1');
const text = document.querySelector('.faq-top-left p')
const form = document.querySelector('.faq-form')

window.onload = function () {
    title.style.animation = 'fadeInText 3s'
    text.style.animation = 'fadeInText 5s';
};


document.addEventListener("scroll", function () {
    let value = window.scrollY;

    img1.style.animation = "moveOutLeft 3s";
    img2.style.animation = "moveOutRight 3s";
    img3.style.animation = "moveOutTop 3s";
    title.style.animation = 'fadeOutText 1s'
    text.style.animation = 'fadeOutText 1s';
    form.style.opacity = 1;
    
    
    if (value < 200) {
        img1.style.animation = "moveInLeft 3s";
        img2.style.animation = "moveInRight 3s";
        img3.style.animation = "moveInTop 3s";
        title.style.animation = 'fadeInText 3s';
        text.style.animation = 'fadeInText 5s';
    }

    questions.forEach((question) => {
        if (isInView(question)) {
            question.classList.add("question-show");
            
        } else {
            question.classList.remove("question-show");
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
        (window.innerHeight - 80 || document.documentElement.clientHeight - 80)
    );
}

// Answer show 
questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            if (item != question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});
