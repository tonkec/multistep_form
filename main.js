import './style.scss';

const createInputs = (i, field) => (`<input type='checkbox' id='checkbox-step${i}' />
<label for='checkbox-step${i}' class='label-step label-step${i}'>
  <input type='text' class='input' id='input-step${i}' required placeholder='No placeholder' />
  <span class='msg'></span>
  <label for='input-step${i}' class='label'>
   ${field}
  </label>
  <span class='button'>Next</span>
</label>
`);

document.querySelector('#app').innerHTML = `
  <div class="form-container">
    <form>
      ${createInputs(1, 'Email')}
      ${createInputs(2, 'Password')}
      ${createInputs(3, 'Confirm password')}
    </form>
  </div>
`;
