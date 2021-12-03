// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// Quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            activeSlide: 0,
            counterClock: false,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum'
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                }
            ]
        },
        methods: {
            nextSlide: function() {
                if(this.activeSlide < this.slides.length - 1) {
                    this.activeSlide++; 
                } else {
                    this.activeSlide = 0;
                }
            },
            prevSlide: function() {
                if(this.activeSlide > 0) {
                    this.activeSlide--;
                } else {
                    this.activeSlide = this.slides.length - 1;
                }
            },
            clickOnSlide: function (index) {
                this.activeSlide = index;
            },
            autoPlay: function () {
                this.counterClock = setInterval(() => {
                    this.activeSlide++; 
                }, 3000);
            }
        },
        created: function () {
            this.autoPlay();
        }
    }
);