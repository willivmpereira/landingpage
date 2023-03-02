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

const objNumber = [];
for (let i = 0; i < [5]; i++) {
  objNumber.push({ value : i})
}

for (let item of testimonials) {
  // const swiperContent = document.querySelector('.swiper-wrapper');

  var swiperContent = document.querySelector('.swiper-wrapper'),
      htmlTemporario = swiperContent.innerHTML,
      htmlNew = `
        <div class="swiper-slide">
          <div id="oi">
            <div class="info__pessoa">
              <div class="photo">
                <img src="${item.img}" alt="Foto de ${item.name}"/>
              </div>
              <div class="info__name">
                <p>${item.name}</p>
              </div>
            </div>
            <div class="stars">
              ${objNumber.map(item => {
                `<span>${item}</span>`
              }) }
              <span></span>
            </div>
            <div class="description">
              <p>${item.description}</p>
            </div>
          </div>
        </div>
      `;

      htmlTemporario = htmlNew + htmlTemporario;

      swiperContent.innerHTML = htmlTemporario



  // const swiperContentHtml = document.createElement('div') 
  // swiperContentHtml.innerHTML = `
  //   <div class="swiper-slide">
  //     <div id="oi">
  //       <div class="info__pessoa">
  //         <div class="photo"></div>
  //         <div class="info__name">
  //           <p>${item.name}</p>
  //           <span>3 avaliações</span>
  //         </div>
  //       </div>
  //       <div class="stars">
  //         <span></span>
  //       </div>
  //       <div class="description">
  //         <p>${item.description}</p>
  //       </div>
  //     </div>
  //   </div>
  // `

  // swiperContent.appendChild(swiperContentHtml)
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 40,
    grabCursor: true,
    autoplay: {
      delay: 4000,
    },
    loop: true,
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



