const http = require('http');

const productData = {
    men:[
       { "id": "1",
        "name": "Men's T-Shirt",
        "brand": "ABC",
        "price": 19.99,
        "color": "Blue",
        "size": "M",
        "category": "clothing"
    }
    ],

    women:[
        { "id": "1",
         "name": "Women's T-Shirt",
         "brand": "XYZ",
         "price": 23.99,
         "color": "grey",
         "size": "M",
         "category": "clothing"
        }
     ]
};

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('Welcome to Men & Women Dummy Data\n');
    } else if (req.url === '/men') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(productData.men, null, 2));
    } else if (req.url === '/women') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(productData.women, null, 2));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found\n');
    }
});

const PORT = 3005;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})