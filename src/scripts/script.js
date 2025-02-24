function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    const login = document.querySelector('input[type="text"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if (!login || !senha) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }
});
