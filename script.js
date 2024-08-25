// Dropdown меню
function myFunction() {
    var dropdownContent = document.getElementById("myDropdown");
    var button = document.getElementById("profile-button");
    if (dropdownContent.classList.contains("show")) {
        setTimeout(function() {
            dropdownContent.classList.remove("show");
            button.classList.remove("active");
        }, 1);
    } else {
        dropdownContent.classList.add("show");
        button.classList.add("active");
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                setTimeout(function() {
                    openDropdown.classList.remove('show');
                    document.getElementById("profile-button").classList.remove("active");
                }, 1);
            }
        }
    }
}

// Форма заполнения
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="checkbox"]');
const submitButton = form.querySelector('.reg2');

function checkInputs() {
    let allFilled = true;
    inputs.forEach(input => {
        if (!input.value.trim() || (input.type === 'checkbox' && !input.checked)) {
            allFilled = false;
        }
    });
    if (allFilled) {
        submitButton.classList.add('active');
    } else {
        submitButton.classList.remove('active');
    }
}

inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
    input.addEventListener('change', checkInputs);
});

form.addEventListener('submit', (event) => {
    if (!submitButton.classList.contains('active')) {
        event.preventDefault();
    }
});

// Поп-ап окно
document.querySelector('.reg').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
});

// Слайдер изображений
const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const slideButtons = document.querySelectorAll(".buttons .button");

    // Обработчики для кнопок
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = 500 * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Переменные для отслеживания касаний
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    // Обработчик начала касания
    const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
    };

    // Обработчик движения касания
    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - startX;
        const diffY = currentY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            e.preventDefault();
            imageList.scrollBy({ left: -diffX, behavior: "auto" }); // Используем behavior: "auto"
        }
        startX = currentX;
        startY = currentY;
    };

    // Обработчик окончания касания
    const handleTouchEnd = () => {
        isDragging = false;
    };

    // Добавление обработчиков событий касания
    imageList.addEventListener("touchstart", handleTouchStart, { passive: false });
    imageList.addEventListener("touchmove", handleTouchMove, { passive: false });
    imageList.addEventListener("touchend", handleTouchEnd, { passive: false });
};

window.addEventListener("load", initSlider);


// Мобильное меню
function toggleMenu() {
    var ulNav = document.getElementById("ul_nav");
    var overlay = document.getElementById("overlay");
    var closeIcon = document.querySelector(".close-icon");
    if (ulNav.style.right === "-100%") {
        ulNav.style.right = "0";
        overlay.style.display = "block";
        if (!closeIcon) {
            closeIcon = document.createElement("div");
            closeIcon.className = "close-icon";
            closeIcon.innerHTML = "×";
            closeIcon.onclick = toggleMenu;
            ulNav.appendChild(closeIcon);
        }
    } else {
        ulNav.style.right = "-100%";
        overlay.style.display = "none";
        if (closeIcon) {
            ulNav.removeChild(closeIcon);
        }
    }
}


// арбитраж
document.addEventListener("DOMContentLoaded", function() {
    const manualElement = document.querySelector('.animate-manual');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(manualElement);
});
// мой профиль
document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.hello, .reg, .popup, .container_footer, .icons');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


// плавное появление в профиле
document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animate-hello, .animate-margin_input, .animate-reg2, .animate-container_footer, .animate-icons');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is intersecting:', entry.target); // Добавлено для отладки
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// изменение в профиле
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("#myForm input");
    const submitButton = document.getElementById("submitButton");

    inputs.forEach(input => {
        input.addEventListener("input", checkInputs);
    });

    function checkInputs() {
        let allFilled = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        if (allFilled) {
            submitButton.classList.add("active");
        } else {
            submitButton.classList.remove("active");
        }
    }
});

// копирование ключей
document.querySelectorAll('.copy').forEach(button => {
    button.addEventListener('click', function() {
        const codeElement = this.parentElement.querySelector('.code p');
        const codeText = codeElement.innerText;

        navigator.clipboard.writeText(codeText).then(() => {
            this.innerText = 'Успешно';

            setTimeout(() => {
                this.innerText = 'Скопировать';
            }, 2000);
        }).catch(err => {
            console.error('Ошибка копирования: ', err);
        });
    });
});







function checkVisibility() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);




document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion_li');

    accordionItems.forEach(item => {
        const label = item.querySelector('label');
        const content = item.querySelector('.content');

        label.addEventListener('click', () => {
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
});