import amex from '../img/amex.png';
import dinersclub from '../img/dinersclub.png';
import discover from '../img/discover.png';
import jcb from '../img/jcb.png';
import maestro from '../img/maestro.png';
import mastercard from '../img/mastercard.png';
import mir from '../img/mir.png';
import unionpay from '../img/unionpay.png';
import visa from '../img/visa.png';
import cardSystemIdentifier from './cardSystemIdentifier';
import luhnValidator from './luhnValidator';

document.addEventListener('DOMContentLoaded', () => {
  const homework = document.querySelector('.homework');
  // console.log(homework);
  homework.insertAdjacentHTML(
    'afterBegin',
    `
    <div class="cards">    
    <img src="${amex}" alt="American Express" class="card amex">
    <img src="${dinersclub}" alt="Diners Club" class="card dinersclub">
    <img src="${discover}" alt="Discover" class="card discover">
    <img src="${jcb}" alt="JCB" class="card jcb">
    <img src="${maestro}" alt="Maestro" class="card maestro">
    <img src="${mastercard}" alt="Mastercard" class="card mastercard">
    <img src="${mir}" alt="Mir" class="card mir">       
    <img src="${unionpay}" alt="Union Pay" class="card unionpay">
    <img src="${visa}" alt="Visa" class="card visa">
    </div>
    <form class="validation-card-number-form-widget">
      <div class="form-control">
          <label for="card-number-input">Введите номер карты:</label>
          <input id="card-number-input" class="card-number-input" type="text">
      </div>
      <button class="card-number-submit">Нажмите чтобы проверить карту</button>
      </form>
    `,
  );

  // const invalidMessage = document.querySelector('.message');
  // const formWidget = document.querySelector('.validation-card-number-form-widget');
  const formInput = document.querySelector('.card-number-input');
  const btn = document.querySelector('.card-number-submit');
  const cardsAllElems = document.querySelectorAll('.card');
  formInput.addEventListener('input', () => {
    formInput.classList.remove('invalid');
    formInput.classList.remove('valid');
    // invalidMessage.classList.add('hidden');
    btn.textContent = 'Нажмите чтобы проверить карту';
    // event.preventDefault();
    // console.log('formInput.value', formInput.value.trim());
    // formInput.classList.add('invalid');
  });

  const formSubmit = document.querySelector('.validation-card-number-form-widget');
  formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    formInput.value = formInput.value.trim();
    const luhnIsValid = luhnValidator(formInput.value);
    const cardSys = cardSystemIdentifier(formInput.value);
    // console.log('formInput.value', formInput.value);
    // console.log('luhnIsValid', luhnIsValid);
    // console.log('cardSys', cardSys);
    // console.log('valid*cardSys', cardSys && luhnIsValid);
    const cardElem = document.querySelector(cardSys);
    cardsAllElems.forEach((cardEl) => cardEl.classList.add('card-disable'));
    // console.log('cardElem', cardElem);
    formInput.classList.add('invalid');
    formInput.classList.remove('valid');
    btn.textContent = 'Invalid card';
    if (cardSys && luhnIsValid) {
      // console.log('card isValid', cardSys);
      // invalidMessage.classList.add('hidden');
      formInput.classList.add('valid');
      formInput.classList.remove('invalid');
      btn.textContent = 'Valid card';
      cardElem.classList.add('card-enable');
      cardElem.classList.remove('card-disable');
    } /*  else {
      // invalidMessage.classList.remove('hidden');
      // formInput.classList.add('invalid');
      // formInput.classList.remove('valid');
      // btn.textContent = 'Invalid card';
      // cardsAllElems.forEach((cardEl) => cardEl.classList.add('card-disable'));
      // formWidget.reset();
    } */
    // console.log('cardElem', cardElem);
    // formInput.classList.add('invalid');
    // console.log('formInput.classList', formInput.classList);
    // console.log('formInput.value', formInput.value);
    // console.log('event.value', event.value);
    // console.log('event', event);
    // console.log('event.target.value', event.target.value);
    // console.log('event.target', event.target);
    // console.log('event.currentTarget.value', event.currentTarget.value);//this
    // console.log('event.currentTarget', event.currentTarget);//this
  });
});
