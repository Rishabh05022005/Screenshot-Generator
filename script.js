
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000);
});


function FormSubmitted(){

    const form_container = document.getElementById("form-container");

    const form = document.getElementById("form-data");

    event.preventDefault();
    const form_data = new FormData(form);

    const data = {};
    form_data.forEach((value, key) => {
        data[key] = value;
    });

    // Getting form values

    const profile = data.to[0];

    form.style.display = 'none';

    const card = document.createElement('div')
    card.className = 'card';
    card.innerHTML = `

<style>

    @font-face {
    font-family: 'Product Sans';
    font-style: normal;
    font-weight: 100;
    src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
    }

    .container-card{
        background-color: #1f1f1f;
        display: flex;
        flex-direction: column;
        padding: 10px;
        align-items: center;
        text-align: center;
        font-family: Product Sans;
    }

    .card-profile{
        margin-top: 4rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        font-size: small;
        flex-direction: column;
        justify-content: center;
        background-color: #5c88aa;
        margin-bottom: 10px;
    }

    .card-profile-txt{
        color: white;
        font-size:x-large;
    }

    .card-to-details{
        color: white;
        margin-bottom: 1rem;
        font-size: small;
    }

    .card-amount-details{
        color: white;
        display: flex;
        align-items: center;
        margin-bottom: 1.2rem;
    }

    .card-amount-details-symbol{
        font-size: 28px;
    }
    .card-amount-details-amount{
        font-size: 40px;
        font-weight: lighter;
    }
    .card-buttons{
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.7rem;

    }
    .card-buttons-1{
        background-color: #A8C8FB;
        padding: 0.5rem 0.7rem;
        border-radius: 2rem;
        font-size: small;
        color: #1f1f1f;
        min-width:4.5rem;
    }
    .card-buttons-2{
        border: gray solid 1px;
        padding: 0.5rem 0.7rem;
        border-radius: 2rem;
        font-size: small;
        color: #A8C8FB;
        min-width: 7rem;

    }
    .card-completed{
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        padding-bottom: 0.7rem;
        width: 13rem;
        font-size: 11px;
        font-weight:lighter;
        border-bottom: #ffffff4a solid 1px;
        margin-bottom: 1rem;
    }
    .card-container-tick{
        width: 0.7rem;
    }

    .card-date-time{
        color: white;
        font-size: 11px;
        font-weight:normal;
        margin-bottom: 1.5rem;
    }

    .card-transaction-details{
        border: #ffffff4a solid 1px;
        /* padding: 1rem; */
        border-radius: 1rem;
        margin-bottom: 1.5rem;
        width: 21rem;

    }

    .card-transaction-details-bank{
        display: flex;
        color: white;
        align-items: center;
        justify-content: space-between;
        gap: 0rem;
        padding: 1rem;
        padding-bottom: 1rem;
        font-size: small;
        border-bottom: #ffffff4a solid 1px;
    }
    .card-transaction-details-bank-logo{
        background-color: aliceblue;
        height: 1.4rem;
        padding: 0 0.7rem;
        border-radius: 0.4rem;
    }

    .card-transaction-details-bank-name{
        margin-right: 3rem;
    }

    .card-transaction-details-subcard{
        padding: 0rem 1rem;
        font-size: 13px;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin: 1rem 0rem;
    }
    .card-transaction-details-subcard-upper{
        color: white;
        padding-bottom: 0.3rem;


    }
    .card-transaction-details-subcard-lower{
        color:#ffffff9e;

    }
    .card-footer{
        display: flex;
        flex-direction: column;
        height: 6rem;
        justify-content: space-between;
    }
    .card-footer-upi{
        
        width: 3rem;
        margin-left: 10px;
    }
    .card-footer-gpay{

        width: 4rem;

    }
</style>
<body>

    <div class="container-card">
        <div class="card-profile">
            <span class="card-profile-txt">${profile}</span>
        </div>
        <div class="card-to-details">
            To : ${data.to}
        </div>
        <div class="card-amount-details">
            <span class="card-amount-details-symbol">&#8377</span><span class="card-amount-details-amount">${data.amount}</span>
        </div>
        <div class="card-buttons">
            <div class="card-buttons-1">
                Pay again
            </div>
            <div class="card-buttons-2">
                Split with friends
            </div>
        </div>
        <div class="card-completed">
            <img src="/New folder/tickgpay.png" class="card-container-tick"> Completed
        </div>
        <div class="card-date-time">
            ${data.date}, ${data.time}

        </div>
        <div class="card-transaction-details">

            <div class="card-transaction-details-bank">
                <img src="/New folder/pnb.png" class="card-transaction-details-bank-logo">
                <span class="card-transaction-details-bank-name">Punjab National Bank 1584</span>
                <i class="fa-solid fa-angle-down"></i>
            </div>

            <div class="card-transaction-details-subcard">
                <div class="card-transaction-details-subcard-upper">
                    UPI transaction ID
                </div>
                <div class="card-transaction-details-subcard-lower">
                    ${data.transactionNumber}
                </div>
            </div>

            <div class="card-transaction-details-subcard">
                <div class="card-transaction-details-subcard-upper">
                    To: ${data.to}
                </div>
                <div class="card-transaction-details-subcard-lower">
                    ${data.toDetails}
                </div>
            </div>

            <div class="card-transaction-details-subcard">
                <div class="card-transaction-details-subcard-upper">
                    From: ${data.name} 
                </div>
                <div class="card-transaction-details-subcard-lower">
                    ${data.fromDetails}
                </div>
            </div>
            <div class="card-transaction-details-subcard">
                <div class="card-transaction-details-subcard-upper">
                    Google transaction ID
                </div>
                <div class="card-transaction-details-subcard-lower">
                    48ie-twjk891
                </div>
            </div>            

        </div>

        <div class="card-footer">
            <img src="/New folder/UPI-White.png" class="card-footer-upi">
            <img src="/New folder/image-removebg-preview.png" class="card-footer-gpay">
        </div>

    </div>



    
</body>
`;
    form_container.appendChild(card);

    function download(){

        alert("FEATURE UNDER DEVELOPMENT !!")

        const screeshotTarget = document.getElementById("form-container");

        html2canvas(screeshotTarget).then((canvas) =>{
            const base64image =  canvas.toDataURL("image/png");
            var anchor = document.createElement('a');
            anchor.setAttribute("href", base64image);
            anchor.setAttribute("download" , "SS.png");
            anchor.click();
            anchor.remove();
        })
    }



}

