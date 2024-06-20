function toggleTheme() {
    const body = document.body;
    const isDarkTheme = document.getElementById('theme-toggle').checked;

    if (isDarkTheme) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }

    // Save the current theme in local storage
    const currentTheme = isDarkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

// Event listener for the theme toggle checkbox
document.getElementById('theme-toggle').addEventListener('change', toggleTheme);

// Apply the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('theme-toggle').checked = true;
    }
});
