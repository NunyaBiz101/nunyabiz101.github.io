function addToCart(bookId) {
    alert('Added to cart: Book ' + bookId);
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('main');

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-200px';
        mainContent.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0px';
        mainContent.style.marginLeft = '200px';
    }
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('main');

    sidebar.style.left = '-200px';
    mainContent.style.marginLeft = '0';
}

function toggleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    performSearch(searchTerm);

    if (searchInput.style.width === '0px' || searchInput.style.width === '') {
        searchInput.style.width = '200px';
        searchInput.style.padding = '8px';
        searchBtn.style.backgroundColor = '#3498db';
        searchInput.focus();
    } else {
        searchInput.style.width = '0px';
        searchInput.style.padding = '0';
        searchBtn.style.backgroundColor = 'transparent';
        searchInput.value = '';
        performSearch(); 
    }
}

function performSearch(searchTerm) {
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
        const title = book.getAttribute('data-title').toLowerCase();
        const author = book.getAttribute('data-author').toLowerCase();
        const price = book.getAttribute('data-price').toLowerCase();

        if (title.includes(searchTerm) || author.includes(searchTerm) || price.includes(searchTerm)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });

    if (searchTerm === '') {
        books.forEach(book => {
            book.style.display = 'block';
        });
    }
 
    backToHomeBtn.style.display = searchTerm === '' ? 'none' : 'block';

}

function backToHome() {
    location.reload();
}

