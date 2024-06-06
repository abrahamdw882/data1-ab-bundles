// script.js

// Function to show product details in a modal
function showDetails(productName) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    
    let content = '';

    if (productName === 'SME Plus') {
        content = `
            <h2>MTN Group share- MTN UP2U</h2>
            <p>SME Plus offers comprehensive solutions tailored for small and medium-sized enterprises. Enjoy seamless connectivity and robust services to boost your business efficiency.</p>
            <button onclick="openIframe('./up2u-login')">Login to Sell</button>
            <button onclick="openIframe('./up2u-purchase')">Purchase</button>
            
        `;
    } else if (productName === 'Webwiz') {
        content = `
            <h2>iShare</h2>
            <p>The flexi bundle is a sponsored data plan .</p>
            <button onclick="openIframe('./ishare-login/')">Login to Sell</button>
            <button onclick="openIframe('https://evnetwork.shop/at-gh/buy/')">Purchase</button>
            
        `;
    } else if (productName === 'Business Messenger') {
        content = `
            <h2>T-Boss</h2>
            <p>You become a boss of telecel data usage on Telecel platform for secure and efficient business communication. Connect with family and friends and businesses and partners.</p>
            <button onclick="openIframe('https://evnetwork.shop/voda-gh/')">Get started</button>
        `;
    } else if (productName === 'evMoneyTransfer') {
        content = `
            <h2>AB Money Transfer</h2>
            <p>Coming soon.</p>
            <button onclick="openIframe('#')">Agent</button>
            <button onclick="openIframe('#')">customer</button>
            
        `;
    } else if (productName === 'Detector') {
        content = `
            <h2>Phone Number Tracking</h2>
            <p>This project was officially released by the ev team in Kenya.</p>
            <button onclick="openIframe('https://detectico.com/hptc/?exp_name=ir-on_chanfun_detecticocom_en&exp_var_id=2')">Get Started</button>
        `;
    } else if (productName === 'AFA') {
        content = `
            <h2>AFA Registration</h2>
            <p>This chosen service is strictly user (customer) registration and verification.</p>
            <p>Please note, this platform does not offer AFA Agent registration. BUT. you can use this platform to register others by filling their details here too.</p>            
            <button onclick="openIframe('https://paystack.com/pay/mtn_afa')">Get Started</button>
        `;
    } else if (productName === 'Investment') {
        content = `
            <h2>Investment Registration</h2>
            <p>This chosen service is strictly user (customer) registration and verification.</p>
            <p>Please note, this platform does not offer AFA Agent registration. BUT. you can use this platform to register others by filling their details here too.</p>            
            <button onclick="openIframe('https://paystack.com/pay/mtn_afa')">Get Started</button>
        `;
    } else if (productName === 'j4u') {
        content = `
            <h2>MTN Just4U offer</h2>
            <p>This offer is an internet bundle plan with a validity period of 3 days. (This means after 3 days data will expire only if not used). This offer can be rolled over on the dangerous day to get expired to another 3 days by re-purchasing the offer.</p>
            <br>
            <p> Offers are unique to each customer and same may not be available to another customer â€“ it is
            â€œjust for youâ€.</p>
            <p>One4All (*161*1#) EVD vendors are allowed to use this platform to request for Just4U for their customers.</p>            
            <button onclick="openIframe('https://evnetwork.shop/just4u/')">Get Started</button>
        `;
    }

    modalDetails.innerHTML = content;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Function to open an iframe
function openIframe(url) {
    const modalDetails = document.getElementById('modal-details');
    const iframeContent = `
        <button onclick="closeModal()">Close</button>
        <iframe src="${url}" style="width:100%; height:90vh;"></iframe>
    `;
    modalDetails.innerHTML = iframeContent;
}
