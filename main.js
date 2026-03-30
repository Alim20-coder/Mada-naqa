const textElement = document.getElementById('typing');
const words = ["نقاء فائق", "رذاذ منعش", "تقنية متطورة"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIdx];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
    } else {
        textElement.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
    }

    let speed = isDeleting ? 70 : 150;

    if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        speed = 2000;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', typeEffect);
////////////////////////// logic one ////////////////////////////////////////////////



const myCarousel = document.querySelector('#customerCarousel');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 4000,
        wrap: true,
        pause: 'hover'
    });
    // customer logic 

const whatsappBtn = document.createElement('div');
whatsappBtn.innerHTML = `
    <a href="https://wa.me/966564328445" 
       style="position:fixed; bottom:20px; right:20px; background:#25d366; color:white; width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:30px; box-shadow: 2px 2px 10px rgba(0,0,0,0.2); z-index:1000; text-decoration:none;">
        <i class="bi bi-whatsapp"></i>
    </a>
`;
document.body.appendChild(whatsappBtn);
    // last logic to make contact faster 
    

// Section Who Logic 
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // تشغيل العداد عند الوصول للسيكشن بالسكرول
    let started = false;
    window.onscroll = function() {
        const whoSection = document.getElementById('who');
        if (whoSection) {
            const rect = whoSection.getBoundingClientRect();
            if (rect.top <= window.innerHeight && !started) {
                startCounters();
                started = true;
            }
        }
    };

