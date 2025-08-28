document.addEventListener('DOMContentLoaded', function() {
    const typingTextElement = document.getElementById('typing-text');
    const texts = [
        '> Initializing system...',
        '> Loading modules...',
        '> Connecting to secure server...',
        '> Access granted: Welcome to LogSearch.xyz'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = false;
            setTimeout(function() {
                if (textIndex < texts.length - 1) {
                    isDeleting = true;
                }
            }, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex++;
            
            if (textIndex >= texts.length) {
                textIndex = 0;
            }
            
            setTimeout(function() {
                typeText();
            }, 500);
            return;
        }
        
        let speed = isDeleting ? typingDelay / 2 : typingDelay;
        
        speed += Math.random() * 50 - 25;
        
        setTimeout(typeText, speed);
    }
    
    setTimeout(typeText, 1000);
    
    function createLightning() {
        const lightningContainer = document.querySelector('.lightning-container');
        
        for (let i = 0; i < 5; i++) {
            const lightning = document.createElement('div');
            lightning.className = 'lightning';
            lightning.style.left = Math.random() * 100 + '%';
            lightning.style.animationDelay = Math.random() * 3 + 's';
            lightningContainer.appendChild(lightning);
        }
    }
    
    createLightning();
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            const spark = document.createElement('div');
            spark.className = 'spark';
            spark.style.position = 'absolute';
            spark.style.width = '2px';
            spark.style.height = '2px';
            spark.style.backgroundColor = 'var(--accent-lightning)';
            spark.style.borderRadius = '50%';
            spark.style.boxShadow = '0 0 10px var(--accent-lightning-glow), 0 0 20px var(--accent-lightning-glow)';
            spark.style.top = Math.random() * 100 + '%';
            spark.style.left = Math.random() * 100 + '%';
            spark.style.opacity = '0';
            spark.style.transition = 'all 0.5s ease';
            
            this.appendChild(spark);
            
            setTimeout(() => {
                spark.style.opacity = '1';
                spark.style.transform = 'scale(3)';
                
                setTimeout(() => {
                    spark.style.opacity = '0';
                    setTimeout(() => {
                        spark.remove();
                    }, 500);
                }, 200);
            }, 10);
        });
    });
    
    function createBackgroundEffect() {
        const container = document.querySelector('.container');
        const bg = document.createElement('div');
        bg.className = 'background-effect';
        bg.style.position = 'fixed';
        bg.style.top = '0';
        bg.style.left = '0';
        bg.style.width = '100%';
        bg.style.height = '100%';
        bg.style.background = 'radial-gradient(circle at 50% 50%, rgba(0, 30, 60, 0.3), rgba(0, 0, 0, 0) 70%)';
        bg.style.pointerEvents = 'none';
        bg.style.zIndex = '-1';
        
        document.body.insertBefore(bg, container);
        
        let angle = 0;
        setInterval(() => {
            angle += 0.2;
            const x = 50 + Math.sin(angle * Math.PI / 180) * 10;
            const y = 50 + Math.cos(angle * Math.PI / 180) * 10;
            bg.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 30, 60, 0.3), rgba(0, 0, 0, 0) 70%)`;
        }, 50);
    }
    
    createBackgroundEffect();
    
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.position = 'fixed';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.pointerEvents = 'none';
        particlesContainer.style.zIndex = '-1';
        
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 2 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = 'var(--accent-blue)';
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            particle.style.borderRadius = '50%';
            
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            
            particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            particlesContainer.appendChild(particle);
        }
        
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes float {
                0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 0.5;
                }
                90% {
                    opacity: 0.5;
                }
                100% {
                    transform: translateY(-${window.innerHeight}px) translateX(${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    createParticles();
}); 