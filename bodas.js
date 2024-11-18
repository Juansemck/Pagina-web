document.querySelectorAll('.service').forEach(service => {
    const quantityDisplay = service.querySelector('.quantity');
    const price = parseFloat(service.getAttribute('data-price'));
    
    let quantity = 0;

    service.querySelector('.increase').addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
        updateTotal();
    });

    service.querySelector('.decrease').addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityDisplay.textContent = quantity;
            updateTotal();
        }
    });

    function updateTotal() {
        let totalCost = 0;
        document.querySelectorAll('.service').forEach(s => {
            const qty = parseInt(s.querySelector('.quantity').textContent);
            const price = parseFloat(s.getAttribute('data-price'));
            totalCost += qty * price;
        });
        document.getElementById('totalCost').textContent = `$${totalCost.toLocaleString()}`; // Formatear el total
    }
});