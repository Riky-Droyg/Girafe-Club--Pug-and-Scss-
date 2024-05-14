let modalForm = {
   formConsultation: {
      title: "Отримай консультацію",
      getBlockTitle: document.getElementById("form-block__title"),
      collectsForm() {
         this.getBlockTitle.textContent = this.title
      },
   },
   formStatement: {
      title: "Залишити заявку",
      getBlockTitle: document.getElementById("form-block__title"),
      collectsForm() {
         this.getBlockTitle.textContent = this.title
      },
   },
   formcConfirmation: {
      title: "Дякуємо!",
      getBlockTitle: document.getElementById("form-block__title"),
      getBlockInputName: document.getElementById('form-block__input-name'),
      getBlockInputTel: document.getElementById('form-block__input-tel'),
      getBlockButton: document.getElementById('form-block__button'),
      getBlockForm: document.getElementById('form-block'),


      createLineOne() {
         let newElement = document.createElement('p');
         newElement.className = 'confirmation-block__text';
         newElement.textContent = 'Ваш запит надіслано.';
         return newElement
      },
      createLineTwo() {
         let newElement = document.createElement('p');
         newElement.className = 'confirmation-block__text';
         newElement.textContent = 'Чекайте дзвінка';
         return newElement
      },

      collectsForm(event) {
         event.preventDefault(); // Зупиняє прокручування сторінки
         // Замінити заголовок
         this.getBlockTitle.textContent = this.title;

         // Додати нові елементи підтвердження
         this.getBlockForm.appendChild(this.createLineOne());
         this.getBlockForm.appendChild(this.createLineTwo());

         // Приховати необхідні елементи форми
         this.getBlockInputName.style.display = 'none';
         this.getBlockInputTel.style.display = 'none';
         this.getBlockButton.style.display = 'none';

         // Опціонально, встановити нові стилі для блоку форми
         this.getBlockForm.style.padding = 'clamp(62.5px, 6.25vw, 6.25vw) clamp(22.917px, 2.1875vw, 2.1875vw) clamp(62.5px, 6.25vw, 6.25vw) clamp(21.875px, 2.1875vw, 2.1875vw)';
         // щоб уникнути прогортання сторінки
         
      },
      resetForm() {
         // Повернути заголовок до початкового
         this.getBlockTitle.textContent = 'Почніть, будь ласка, введення даних';

         // Повернути відображення елементів форми
         this.getBlockInputName.style.display = 'block';
         this.getBlockInputTel.style.display = 'block';
         this.getBlockButton.style.display = 'block';

         // Видалити підтвердження з форми
         let confirmationTexts = this.getBlockForm.querySelectorAll('.confirmation-block__text');
         confirmationTexts.forEach(function (element) {
            element.remove();
         });
         // Опціонально, повернути стилі до початкових
         this.getBlockForm.style.padding = 'clamp(62.5px, 6.25vw, 6.25vw) clamp(22.917px, 2.1875vw, 2.1875vw) clamp(62.5px, 6.25vw, 6.25vw) clamp(21.875px, 2.1875vw, 2.1875vw)';
      },
   },
   openForm() {
      let clickedElement = event.target;
      let backgroundForm = document.getElementById("background-form");
      let formBlock = document.getElementById("form-block");
      let body = document.body;

      if (clickedElement.id === "hero__button") {
         modalForm.formConsultation.collectsForm()
      } else if (clickedElement.id === "services__button") {
         modalForm.formStatement.collectsForm()
      }

      backgroundForm.style.display = 'block'
      formBlock.style.display = 'flex'
      body.style.overflow = 'hidden'

   },
   closeForm() {
      let backgroundForm = document.getElementById("background-form");
      let formBlock = document.getElementById("form-block");
      let body = document.body;

      backgroundForm.style.display = 'none'
      formBlock.style.display = 'none'
      body.style.overflow = 'visible'
      modalForm.formcConfirmation.resetForm()
   },
}

