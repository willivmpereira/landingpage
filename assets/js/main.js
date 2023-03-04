const testimonials = [
  {
    img: 'https://lh3.googleusercontent.com/a-/ACB-R5TKzWF4VWZXq38kplSUhqTomEWBFV9IYltODlSAog=w36-h36-p-rp-mo-br100',
    name: 'Maria Eduarda Carvalho',
    stars: [5],
    description: 'Excelente atendimento e profissionalismo de toda equipe. Fui muito bem atendida!'
  },
  {
    img: 'https://lh3.googleusercontent.com/a-/ACB-R5RTlEUWh62cZHUSbduwYA3zz8sa3Q2e41VvEvSVvw=w36-h36-p-c0x00000000-rp-mo-br100',
    name: 'Caio Zambrana',
    stars: [5],
    description: 'Ótimo atendimento, profissionais extremamente qualificados e rápida resolução nos problemas!'
  },
  {
    img: 'https://lh3.googleusercontent.com/a-/ACB-R5TxLKEQbVlS9a7bqd12IHi-u-Sd4egQOYJrMcQPeKc=w36-h36-p-c0x00000000-rp-mo-br100',
    name: 'Enzo Gabriel',
    stars: [5],
    description: 'Realizei uma consultoria por vídeo conferência e fui muito bem atendido. Consegui sanar todos as minhas dúvidas e encontramos uma solução.'
  },
  {
    img: 'https://lh3.googleusercontent.com/a-/ACB-R5RB-pND0dcB4sAM41X6OhmPjV7mpGMMZFectUSUjdU=w36-h36-p-c0x00000000-rp-mo-br100',
    name: 'Stephane',
    stars: [5],
    description: 'Ótimo profissional, bom atendimento.'
  },
  {
    img: 'https://lh3.googleusercontent.com/a-/ACB-R5S3iL0O7HbSuWrH2oDoVPCA1Jwv_AF7qoWtsYlgKRY=w36-h36-p-c0x00000000-rp-mo-ba3-br100',
    name: 'Juvenal Silva',
    stars: [5],
    description: 'Excelente atendimento. Recomendo!'
  },
  {
    img: 'https://lh3.googleusercontent.com/a-/ACB-R5T5nuYiafzIlL3EYCbF-D5yqTjYx_IGPMIei4TKOA=w36-h36-p-c0x00000000-rp-mo-br100',
    name: 'Feliphe Holanda',
    stars: [5],
    description: 'Excelente profissional, de confiança e seguro! Indico de olhos fechados!'
  },
  {
    img: 'https://lh3.googleusercontent.com/a-/ACB-R5S7blrSlrEsPfaRd9TGcpiCIHvTjxK2wGbe_p6S=w36-h36-p-c0x00000000-rp-mo-br100',
    name: 'Nicolas Souza',
    stars: [5],
    description: 'Escritório de exímios profissionais. Atendimento de acordo, profissional e direcionado! Diretos e eficientes!'
  },
  {
    img: 'https://lh3.googleusercontent.com/a-/ACB-R5StzwxDc0ySn7VtAyJOXttJlKjDMW_C2TM1L8N2_A=w36-h36-p-c0x00000000-rp-mo-br100',
    name: 'Luiza Rocha',
    stars: [5],
    description: 'Atendimento personalizado e de excelência'
  },
  {
    img: 'https://lh3.googleusercontent.com/a-/ACB-R5Qt2omBR-UUjeRYhLnHXvhttnDRPh2_S9vgVeu1k50=w36-h36-p-c0x00000000-rp-mo-br100',
    name: 'Fernanda Mattos',
    stars: [5],
    description: 'Essa equipe é demais!'
  },
]

for (let item of testimonials) {
  var swiperContent = document.querySelector('.swiper-wrapper'),
      htmlTemporario = swiperContent.innerHTML,
      htmlNew = `
        <div class="swiper-slide">
          <div class="testimonial__content">
            <div class="d-grid">
              <div class="info__pessoa">
                <div class="photo">
                  <img src="${item.img}" width="35" height="35" alt="Foto de ${item.name}"/>
                </div>
                <div class="info__name">
                  <p>${item.name}</p>
                </div>
              </div>
              <div class="stars"></div>
            </div>
            <div class="description">
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;

      htmlTemporario = htmlNew + htmlTemporario;
      swiperContent.innerHTML = htmlTemporario

      if (document.querySelector('.stars')) {
        console.log('iu')
        const starsI = document.querySelector('.stars')
    
        for (let i = 0; i < [5]; i++) {
          starsI.innerHTML += `<i>
                                <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill="#DECE84" d="M8.71801 0L6.53851 6.53851H0L5.44876 10.8975L3.26926 17.436L8.71801 13.077L14.1668 17.436L11.9873 10.8975L17.436 6.53851H10.8975L8.71801 0Z" fill="black"/>
                                </svg>
                              </i>`
        }
      }
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
  });



const modal = {
  open() {
    document.querySelector('.modal__overlay').classList.add('active')
    document.querySelector('body').classList.add('remove-scroll')


  },
  close() {
    document.querySelector('.modal__overlay').classList.remove('active')
    document.querySelector('body').classList.remove('remove-scroll')

  }
}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentElement.classList.toggle("active")
  );
});