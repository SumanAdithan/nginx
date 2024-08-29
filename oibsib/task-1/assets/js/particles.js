// main
particlesJS('main-dot-particles', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#79FDFF',
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 1.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 1.5,
            random: false,
            anim: {
                enable: true,
                speed: 10,
                size_min: 2,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            out_mode: 'out',
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});

// home
particlesJS('home-dot-particles', {
    particles: {
        number: {
            value: 250,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: ['#ffffff', '#032b5c'],
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 2,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            out_mode: 'out',
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});

// about
particlesJS('about-node-particles', {
    particles: {
        number: {
            value: 30,
            density: {
                enable: false,
                value_area: 800,
            },
        },
        color: {
            value: '#589CFF',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 3,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.7,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 5,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#589CFF',
            opacity: 0.7,
            width: 2,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                // rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

particlesJS('about-dot-particles', {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#79FDFF',
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 1.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 1,
            random: false,
            anim: {
                enable: true,
                speed: 10,
                size_min: 2,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            out_mode: 'out',
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});

// why choose us
particlesJS('why-choose-us-node-particles', {
    particles: {
        number: {
            value: 20,
            density: {
                enable: false,
                value_area: 800,
            },
        },
        color: {
            value: '#589CFF',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 3,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.7,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 5,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#589CFF',
            opacity: 0.7,
            width: 2,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                // rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

particlesJS('why-choose-us-dot-particles', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: false,
                value_area: 800,
            },
        },
        color: {
            value: '#DC0046',
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 2,
            random: false,
            anim: {
                enable: true,
                speed: 10,
                size_min: 2,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'left',
            out_mode: 'out',
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});

// guide
particlesJS('guide-node-particles1', {
    particles: {
        number: {
            value: 15,
            density: {
                enable: false,
                value_area: 800,
            },
        },
        color: {
            value: '#589CFF',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 3,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.7,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 5,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#589CFF',
            opacity: 0.7,
            width: 2,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                // rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

particlesJS('guide-dot-particles1', {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#79FDFF',
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 1.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 1,
            random: false,
            anim: {
                enable: true,
                speed: 10,
                size_min: 2,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            out_mode: 'out',
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});

particlesJS('guide-node-particles2', {
    particles: {
        number: {
            value: 30,
            density: {
                enable: false,
                value_area: 800,
            },
        },
        color: {
            value: '#589CFF',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 3,
            },
            image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.7,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 5,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#589CFF',
            opacity: 0.7,
            width: 2,
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                // rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

particlesJS('guide-dot-particles2', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: false,
                value_area: 800,
            },
        },
        color: {
            value: '#DC0046',
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 2.5,
            random: false,
            anim: {
                enable: true,
                speed: 10,
                size_min: 2,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'left',
            out_mode: 'out',
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});
