const searchInput = document.getElementById('searchInput');
const bookList = document.getElementById('bookList');

const fetchData = async () => {
  try {
    const response = await fetch('https://anapioficeandfire.com/api/books');
    if (!response.ok) {
      throw new Error('Error retrieving data from the API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

const displayBooks = async () => {
  const books = await fetchData();
  if (!books) return;

  bookList.innerHTML = '';

  books.slice(0, 10).forEach((book) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>Title:</strong> ${book.name}<br>
      <strong>ISBN:</strong> ${book.isbn}<br>
      <strong>Pages:</strong> ${book.numberOfPages}<br>
      <strong>Authors:</strong> ${book.authors.join(', ')}<br>
      <strong>Publisher:</strong> ${book.publisher}<br>
      <strong>Released:</strong> ${book.released}<br>
      <strong>Characters:</strong> ${book.characters.slice(0, 5).join(', ')}
    `;
    bookList.appendChild(li);
  });
};

const highlightSearchText = () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const bookTitles = bookList.getElementsByTagName('strong');

  Array.from(bookTitles).forEach((title) => {
    const bookTitle = title.innerHTML.toLowerCase();
    if (bookTitle.includes(searchTerm)) {
      const parentElement = title.parentElement;
      parentElement.classList.add('highlight');
    } else {
      const parentElement = title.parentElement;
      parentElement.classList.remove('highlight');
    }
  });
};

searchInput.addEventListener('input', highlightSearchText);

displayBooks();
