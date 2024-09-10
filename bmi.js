function calculateBMI() {
    
    const age = parseInt(document.getElementById('age').value, 10);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 
    
 
    if (isNaN(age) || isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById('result').textContent = 'Please enter valid values for all fields.';
        return;
    }
    
    
    const bmi = weight / (height * height);
    
    
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    
    
    const idealBMI = { min: 18.5, max: 24.9 };
    
    
    const resultMessage = `
        Your BMI: ${bmi.toFixed(2)} (${category})\n
        Ideal BMI Range: ${idealBMI.min} - ${idealBMI.max}
    `;
    
    
    document.getElementById('result').textContent = resultMessage;
}
