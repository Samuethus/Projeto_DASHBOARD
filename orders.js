/* -- BANCO DE DADOS EM JAVASCRIPT-- */
const Orders = [
    {
        productName: 'JavaScript Tutorial',
        productNumber: '85743',
        paymentStatus: 'Due',
        status: 'Pending'
    },
    {
        productName: 'CSS Full Course',
        productNumber: '97245',
        paymentStatus: 'Refunded',
        status: 'Declined'
    },
    {
        productName: 'Flex-Box Tutorial',
        productNumber: '36452',
        paymentStatus: 'Paid',
        status: 'Active'
    },
    {
        productName: 'JavaScript Tutorial',
        productNumber: '85743',
        paymentStatus: 'Due',
        status: 'Pending'
    },
    {
        productName: 'CSS Full Course',
        productNumber: '97245',
        paymentStatus: 'Refunded',
        status: 'Declined'
    },
    {
        productName: 'Flex-Box Tutorial',
        productNumber: '36452',
        paymentStatus: 'Paid',
        status: 'Active'
    },
    {
        productName: 'JavaScript Tutorial',
        productNumber: '85743',
        paymentStatus: 'Due',
        status: 'Pending'
    },
    {
        productName: 'CSS Full Course',
        productNumber: '97245',
        paymentStatus: 'Refunded',
        status: 'Declined'
    },
    {
        productName: 'Flex-Box Tutorial',
        productNumber: '36452',
        paymentStatus: 'Paid',
        status: 'Active'
    },
    {
        productName: 'JavaScript Tutorial',
        productNumber: '85743',
        paymentStatus: 'Due',
        status: 'Pending'
    },
    {
        productName: 'CSS Full Course',
        productNumber: '97245',
        paymentStatus: 'Refunded',
        status: 'Declined'
    },
]

/* -- CRIAÇÃO DA TABELA CONFORME BANCO DE DADOS -- */
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'declined' : order.status === 'Pending' ? 'warning' : 'success'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});



/* -- EFEITO CONTAGEM NUEMROS KPIs -- */
let valueDisplay = document.querySelectorAll(".sales-number");
let interval = 3000 ;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor (interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    },duration);
}); 


const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
menuBtn.addEventListener('click', () => {
    sideMenu.style.display  = 'block';
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display  = 'none';
})


const darkMode = document.querySelector('.dark-mode');
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})