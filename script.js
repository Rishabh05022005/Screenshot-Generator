
function FormSubmitted(){

    const form_container = document.getElementById("form-container");

    const form = document.getElementById("form-data");

    event.preventDefault();
    const form_data = new FormData(form);

    const data = {};
    form_data.forEach((value, key) => {
        data[key] = value;
    });

    form.style.display = 'none';

    const card = document.createElement('div')
    card.className = 'card';
    card.innerHTML = `<h2>Transaction Details</h2><p>Name: ${data.name}</p><p>Amount: ${data.amount}</p><p>Amount in Text: ${data.amountText}</p><p>To: ${data.to}</p><p>To Details: ${data.toDetails}</p><p>From Details: ${data.fromDetails}</p><p>Transaction Number: ${data.transactionNumber}</p><p>Date: ${data.date}</p><p>Time: ${data.time}</p>`;
    form_container.appendChild(card);

}

