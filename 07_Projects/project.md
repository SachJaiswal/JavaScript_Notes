# Project Code
## Solution 1  [Change Color]

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-fyctwyyo)

``` javascript
const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Solution 2  [BMI Calculator]

``` javascript
const forms = document.querySelector('form');

forms.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === ' ' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height `;
  } else if (weight === ' ' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight`;
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    result.innerHTML = `<span>${bmi} </span>`;

    if (bmi <= 18.6) {
      result.innerHTML = `Under Weight ${bmi}`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `Normal Weight ${bmi}`;
    } else {
      result.innerHTML = `Over Weight ${bmi}`;
    }
  }
});
```