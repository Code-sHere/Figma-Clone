    
    function sendEmail(event){
      event.preventDefault();

      const form = document.getElementById('121');
      const templateParams = {
        email: document.querySelector('#email').value
      };
      emailjs
        .send("service_0ekqrpy", "template_jmb3y24", templateParams)
        then(() => {
        alert("Email sent!");
        form.reset(); // Reset all inputs in the form
      })
      .catch(() => {
        alert("Email not sent!");
      });
    }

    document.getElementById("121").addEventListener("submit",sendEmail)
    
    
    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Swiper setup
    const swiper = document.getElementById('swiper');
    const cardWidth = 320;
    const decBox = document.getElementById('imagedesc');

    // Clone first and last cards with data-desc preserved
    const originalCards = Array.from(swiper.querySelectorAll(".img-swiper"));

    const firstClone = originalCards[0].cloneNode(true);
    firstClone.setAttribute('data-desc', originalCards[0].getAttribute('data-desc'));

    const lastClone = originalCards[originalCards.length - 1].cloneNode(true);
    lastClone.setAttribute('data-desc', originalCards[originalCards.length - 1].getAttribute('data-desc'));

    swiper.appendChild(firstClone);
    swiper.insertBefore(lastClone, originalCards[0]);

    let cards = Array.from(swiper.querySelectorAll(".img-swiper"));
    swiper.scrollLeft = cardWidth;

    // Update active card and description
    function updateActiveCard() {
      const center = swiper.scrollLeft + swiper.offsetWidth / 2;
      let activeFound = false;

      cards.forEach(card => {
        const cardLeft = card.offsetLeft;
        const cardCenter = cardLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);
        const isActive = distance < cardWidth / 2;

        card.classList.toggle('active', isActive);

        if (isActive && !activeFound) {
          const desc = card.getAttribute('data-desc');
          decBox.textContent = desc || "Image description will appear here.";
          activeFound = true;
        }
      });

      if (!activeFound) {
        decBox.textContent = "Image description will appear here.";
      }
    }

    // Scroll listener
    swiper.addEventListener('scroll', () => {
      requestAnimationFrame(updateActiveCard);
    });

    // Navigation buttons
    function slidenext() {
      swiper.scrollBy({ left: cardWidth, behavior: "smooth" });

      setTimeout(() => {
        if (swiper.scrollLeft >= swiper.scrollWidth - cardWidth * 2) {
          swiper.scrollLeft = cardWidth;
        }
        updateActiveCard();
      }, 400);
    }

    function slideprev() {
      swiper.scrollBy({ left: -cardWidth, behavior: "smooth" });

      setTimeout(() => {
        if (swiper.scrollLeft <= 0) {
          swiper.scrollLeft = swiper.scrollWidth - cardWidth * 2;
        }
        updateActiveCard();
      }, 400);
    }

    // Autoplay
    setInterval(slidenext, 6000);

    // Initial description
    updateActiveCard();

    //change buttons
    function showImages(id) {
      const images = document.querySelectorAll('.function-images .image')
      images.forEach(img => img.classList.remove('active'));
      
      const activeImage = document.getElementById(id);
      activeImage.classList.add('active');

      const contentText = activeImage.getAttribute('content');
      const desc = document.querySelector('.content-desc');
      desc.style.opacity = 0;

      const buttons = document.querySelectorAll('.change-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      document.querySelector(`.change-btn[id="${id.replace('img','')}"]`).classList.add('active');

      const linkMap ={
        img1: "https://www.figma.com/design",
        img2: "https://www.figma.com/build",
        img3: "https://www.figma.com/draw",
        img4: "https://www.figma.com/present",
        img5: "https://www.figma.com/promote",
        img6: "https://www.figma.com/prompt",
        img7: "https://www.figma.com/jam",
        img8: "https://www.figma.com/publish"
      };

      const newHerf = linkMap[id];
      document.querySelector('.exa').setAttribute('href',newHerf);

      const spanText = {
        img1: "Explore Figma Design",
        img2: "Explore Dev Mode",
        img3: "Explore Figma Draw",
        img4: "Explore Figma Slides",
        img5: "Explore Figma Buzz",
        img6: "Explore Figma Make",
        img7: "Explore FigJam",
        img8: "Explore Figma Sites"
      }

      const newText = spanText[id];
      document.querySelector('.exa span').textContent = newText;


      setTimeout(() => {
        desc.textContent = contentText;
        desc.style.opacity = 1;
      }, 200);

    }
// collaspe
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach((btn)=>{
      btn.addEventListener('click',()=>{
        const current = btn.nextElementSibling;

        document.querySelectorAll('.contents').forEach((c)=>{
          if(c!==current){
            c.classList.remove('active');
          }
        });
        current.classList.toggle('active');
      })
    })

    function openModal(){
      document.getElementById('overlay').style.display = "flex";
    }
    function closeModal(){
      document.getElementById('overlay').style.display ="none"
    }

    window.onclick = function(e){
      const overlay = document.getElementById('overlay');
      if(e.target === overlay){
        overlay.style.display = "none"
      }
    }

    function openModal1(){
      document.getElementById('overlay1').style.display = "flex";
    }
    function closeModal1(){
      document.getElementById('overlay1').style.display ="none"
    }

    window.onclick = function(e){
      const overlay = document.getElementById('overlay1');
      if(e.target === overlay){
        overlay.style.display = "none"
      }
    }

    // roller

    const slider = document.getElementById('slider');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    let scrollAmount = 0;

    const scrollPerClick = 270;

    right.addEventListener('click',()=>{
      scrollAmount += scrollPerClick;
      if(scrollAmount > slider.scrollWidth - slider.clientWidth){
        scrollAmount = slider.scrollWidth - slider.clientWidth;
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    });

    left.addEventListener('click',()=>{
      scrollAmount -= scrollPerClick;
      if(scrollAmount < 0) scrollAmount = 0
      slider.style.transform =`translateX(-${scrollAmount}px)`
    });