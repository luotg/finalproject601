const footer = document.getElementById('footer-main');
footer.innerHTML = getFooter();

function getFooter() {
    return `
        <footer>
            <p>&copy;2023 Tiangang Luo</p>
        </footer>
    `;
}

const menu = document.getElementById('nav-menu');
menu.innerHTML = getMenu();

function getMenu() {
    return `
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="rest.html">Eat</a></li>
            <li><a href="place.html">Place</a></li>
        </ul>
    `;
}