const toggle = document.getElementById('toggle');
const statusText = document.getElementById('status-text');

toggle.addEventListener('change', function() {
    if (this.checked) {
        statusText.textContent = "Checked";
        // Opcional: mudar a cor do texto quando ativo
        statusText.style.color = "#3498db"; 
    } else {
        statusText.textContent = "Unchecked";
        statusText.style.color = "#8a929e";
    }
});
