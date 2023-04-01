document.addEventListener('DOMContentLoaded', () => {
    const reasonsList = [
        { reason: 'has the best music taste', img: 'music-taste.jpg' },
        { reason: 'makes great sandwiches', img: 'sandwiches.jpg' },
        { reason: 'hilarious', img: 'hilarious.jpg' },
        { reason: 'cutest dog', img: 'cutest-dog.JPG' },
        { reason: 'beautiful apartment', img: 'beautiful-apartment.jpg' },
        { reason: 'looks great in glasses', img: 'glasses.jpg' },
        { reason: 'bachelor nation', img: 'bachnache.JPG' },
        { reason: 'loves country music', img: 'loves-country-music.jpg' },
        { reason: 'teach me abt karaoke', img: 'karaoke.jpg' },
        { reason: 'great hair', img: 'great-hair.jpg' },
        { reason: 'loves ramen', img: 'ramen.jpg' },
        { reason: 'makes good drinks', img: 'good-drinks.jpg' },
        { reason: 'loves cats', img: 'loves-cats.jpg' },
        { reason: 'life of the party', img: 'party.jpg' },
        { reason: 'not allergic to anything', img: 'not-allergic.jpg' },
        { reason: 'sunset slut', img: 'sunset.jpg' },
        { reason: 'loves her friends', img: 'loves-friends.jpg' },
        { reason: 'great talker', img: 'great-talker.JPG' },
        { reason: 'great at sleeping', img: 'great-sleeper.jpg' },
        { reason: 'can drive manual', img: 'drive-manual.GIF' },
        { reason: 'really smart', img: 'really-smart.jpg' },
        { reason: 'loves the moon', img: 'moon.jpg' },
        { reason: 'did i say wanda????', img: 'wandawanda.jpg' },
        { reason: 'espresso martini angel', img: 'espresso.JPG' },
        { reason: 'great painting and drawing', img: 'painting-drawing.jpg' },
        { reason: 'good at organizing', img: 'good-organizing.JPG' },
        { reason: 'awesome drummer', img: 'awesome-drummer.jpg' },
        { reason: 'beautiful', img: 'beautiful.jpg' },
        { reason: 'big butt', img: 'big-butt.jpg' },

    ];

    const reasonsSection = document.querySelector('.reasons');

    reasonsList.forEach(({ reason, img }) => {
        const reasonDiv = document.createElement('div');
        reasonDiv.classList.add('reason');

        const reasonText = document.createElement('p');
        reasonText.textContent = reason;
        reasonDiv.appendChild(reasonText);

        const imageBox = document.createElement('img');
        imageBox.src = `assets/${img}`;
        imageBox.style.width = '20%';
        reasonDiv.appendChild(imageBox);

        reasonsSection.appendChild(reasonDiv);
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const reasonElements = document.querySelectorAll('.reason');
    let activeReasonIndex = 0;
    reasonElements[activeReasonIndex].classList.add('active');
    document.body.style.backgroundColor = getRandomColor();

    window.addEventListener('scroll', () => {
        let closestReasonIndex = 0;
        let minDistance = Number.MAX_VALUE;

        reasonElements.forEach((reason, index) => {
            const rect = reason.getBoundingClientRect();
            const distance = Math.abs(rect.top - window.innerHeight / 2);

            if (distance < minDistance) {
                minDistance = distance;
                closestReasonIndex = index;
            }
        });

        if (closestReasonIndex !== activeReasonIndex) {
            reasonElements[activeReasonIndex].classList.remove('active');
            activeReasonIndex = closestReasonIndex;
            reasonElements[activeReasonIndex].classList.add('active');
            document.body.style.backgroundColor = getRandomColor();
        }
    });
    const audioElement = document.getElementById('background-audio');
    const playAudio = confirm('Do you want to play background music?');
    if (playAudio) {
        audioElement.play();
    }

});
