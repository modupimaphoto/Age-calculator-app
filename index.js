
/* Your challenge is to build out this age calculator app and 
get it looking as close to the design as possible. 

Your users should be able to: 

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted
*/
const date = new Date();

const day = (day) => {
  const days = document.getElementById('days');
  days.innerHTML = date.getDay() + day;
}
const month = (month) => {
  const months = document.getElementById('months');
  months.innerHTML = date.getMonth() + month;
}
const year = (year) => {
  const years = document.getElementById('years');
  years.innerHTML = date.getFullYear() - Number(year);
}

const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
  event.preventDefault();

  const day_value = document.getElementById('day').value;
  const month_value = document.getElementById('month').value;
  const year_value = document.getElementById('year').value;

  const day_error = document.getElementById('day-error');
  if(day_value.trim() === ''){
    day_error.innerHTML = 'This field is required';
  }else{
    day(day_value);
    day_error.innerHTML = '';
  }

  const month_error = document.getElementById('month-error');
  if(month_value.trim() === ''){
    month_error.innerHTML = 'This field is required';
  }else{
    month(month_value);
    month_error.innerHTML = '';
  }

  const year_error = document.getElementById('year-error');
  if(year_value.trim() === ''){
    year_error.innerHTML = 'This field is required';
  }else{
    year(year_value);
    year_error.innerHTML = '';
  }

})

