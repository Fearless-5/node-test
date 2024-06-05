const express = require("express");
const path = require('path');
const app = express();
const port = 3000;
const root = "Pages";
app.use(express.static(path.join(__dirname, root)));
let homePage = `
    	<button>Click me</button>
    	<script>
    		document.querySelector("button").addEventListener("click", () => {
    			window.location = "/contact";
    		});
    	</script>
    `;
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, root, '/home.html'));
    res.send(homePage);
});
app.get('/contact', (req, res) => {
    //res.sendFile(path.join(__dirname, root, '/contact.html'));
    res.send(homePage);
});
app.get('/about', (req, res) => {
    //res.sendFile(path.join(__dirname, root, '/about.html'));
    res.send(homePage);
});
app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname, root, '/error.html'));
    res.send(homePage);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});