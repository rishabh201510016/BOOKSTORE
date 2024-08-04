let cart = [];

function loadContent(page) {
    const content = {
        home: `<p>Welcome to the Online Bookstore. Here you can find a wide variety of books for different fields of study.</p>`,
        login: `
            <h2>Login</h2>
            <form action="submit_login.html" method="post">
                <div class="form-group">
                    <label for="login"><b>Login:</b></label><br>
                    <input type="text" id="login" name="login" placeholder="Example123@gmail.com" required>
                </div>
                <div class="form-group">
                    <label for="password"><b>Password:</b></label><br>
                    <input type="password" id="password" name="password" minlength="8" required><br>
                </div>
                <div class="form-group">
                    <br>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        `,
        registration: `
            <h2>Registration</h2>
            <form action="submit_registration.html" method="post">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required>
                </div>
                <div class="form-group">
                    <button type="submit">Register</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        `,
        catalogue: `
            <h2>Catalogue</h2>
            <div class="book" data-book-id="1">
                <img src="download.jpg" alt="Book 1">
                <div class="book-info">
                    <h3>Essential Computer Science</h3>
                    <p>Rs. 999</p>
                    <p>A comprehensive book of computer science, covering all essential topics.</p>
                    <button class="cart-button" onclick="addToCart(1)">Add to Cart</button>
                </div>
            </div>
            <div class="book" data-book-id="2">
                <img src="Research Mtd of CS.jpg" alt="Book 2">
                <div class="book-info">
                    <h3>Research Methods of Computer Science</h3>
                    <p>Rs. 750</p>
                    <p>An in-depth guide to research methods in computer science.</p>
                    <button class="cart-button" onclick="addToCart(2)">Add to Cart</button>
                </div>
            </div>
            <div class="book" data-book-id="3">
                <img src="image.jpg" alt="Book 3">
                <div class="book-info">
                    <h3>Electronic Devices and Circuits</h3>
                    <p>Rs. 900</p>
                    <p>A detailed book on electronic devices and circuits.</p>
                    <button class="cart-button" onclick="addToCart(3)">Add to Cart</button>
                </div>
            </div>
            <div class="book" data-book-id="4">
                <img src="E&C.jpg" alt="Book 4">
                <div class="book-info">
                    <h3>Electronics and Communication</h3>
                    <p>Rs. 750</p>
                    <p>Comprehensive coverage of communication electronics.</p>
                    <button class="cart-button" onclick="addToCart(4)">Add to Cart</button>
                </div>
            </div>
            <div class="book" data-book-id="5">
                <img src="Electrical Eng.jpg" alt="Book 5">
                <div class="book-info">
                    <h3>Electrical Engineering</h3>
                    <p>Rs. 490</p>
                    <p>Comprehensive coverage of electrical engineering.</p>
                    <button class="cart-button" onclick="addToCart(5)">Add to Cart</button>
                </div>
            </div>
        `,
        cart: `
            <h2>Cart</h2>
            <div id="cart-items">
                ${generateCartItems()}
            </div>
            <button onclick="checkout()">Checkout</button>
        `
    };

    document.getElementById('right-frame').innerHTML = content[page];
}

function addToCart(bookId) {
    const books = {
        1: { title: "Essential Computer Science", price: 999 },
        2: { title: "Research Methods of Computer Science", price: 750 },
        3: { title: "Electronic Devices and Circuits", price: 900 },
        4: { title: "Electronics and Communication", price: 750 },
        5: { title: "Electrical Engineering", price: 490 }
    };

    const book = books[bookId];
    cart.push(book);
    alert(`${book.title} has been added to your cart.`);
}

function generateCartItems() {
    if (cart.length === 0) {
        return '<p>Your cart is empty.</p>';
    }

    let items = '';
    cart.forEach((book, index) => {
        items += `
            <div class="cart-item">
                <h3>${book.title}</h3>
                <p>Price: Rs. ${book.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    return items;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    loadContent('cart');
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some books before checking out.');
        return;
    }

    alert('Thank you for your purchase!');
    cart = [];
    loadContent('cart');
}
