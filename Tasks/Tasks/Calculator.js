

function addToExpression(value) {
    const resultInput = document.getElementById('result');
    resultInput.value += value;
  }
  
  function evaluateExpression() {
    const resultInput = document.getElementById('result');
    const expression = resultInput.value;
    let result;
  
    try {
      result = eval(expression);
    } catch (error) {
      result = 'Error';
    }
  
    resultInput.value = result;
  }
  
  function clearExpression() {
    const resultInput = document.getElementById('result');
    resultInput.value = '';
  }
  