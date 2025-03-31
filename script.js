function applyNow() {
    setTimeout(() => {
        window.location.href = "https://forms.gle/2jvKSYbXvdxb5B7Q9";
    }, 1500); // Redirect after 1.5 seconds ;
}

function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const rate = document.getElementById('rate').value;
    const term = document.getElementById('term').value;

    if (amount && rate && term) {
        const monthlyRate = rate / 100 / 12;
        const numberOfPayments = term * 12;
        const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        document.getElementById('result').innerText = `Estimated Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById('result').innerText = 'Please fill in all fields.';
    }
}
