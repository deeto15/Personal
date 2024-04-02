const dueDate = new Date("March 3, 2024 23:59:59").getTime();
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = dueDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "Time's up!";
    }
}

$(document).ready(function() {
    var header = $('#header');
    var footer = $('#footer');

    footer.hide();

    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if (scrollPosition === 0) {
            header.slideDown();
        } else {
            header.slideUp();
        }

        if (scrollPosition + windowHeight >= documentHeight) {
            footer.slideDown();
        } else {
            footer.slideUp();
        }
    });

    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Interactive header
$('header').hover(
    function() {
        $(this).css('background-color', '#555');
    },
    function() {
        $(this).css('background-color', 'rgb(127, 166, 208)');
    }
);
    var logo = document.getElementById('logo');
    anime({
        targets: logo,
        translateY: [
            { value: -20, duration: 500 },
            { value: 0, duration: 800 }
        ],
        loop: true
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        displayMessage('Please fill in all fields.', 'error');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayMessage('Please enter a valid email address.', 'error');
        return;
    }
});

function getCatPicture() {
    $.ajax({
        url: 'https://api.thecatapi.com/v1/images/search', 
        method: 'GET',
        success: function(response) {
            var catPicture = document.getElementById('catPicture');
            catPicture.src = response[0].url;
            catPicture.style.display = 'block';
        },
        error: function(xhr, status, error) {
            displayMessage('An error occurred while fetching the cat picture.', 'error');
        }
    });
}

function displayMessage(message, type) {
    var messageElement = document.getElementById('formMessage');
    messageElement.textContent = message;
    messageElement.className = type;
}
