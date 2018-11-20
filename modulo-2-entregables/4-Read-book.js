/* 4 - READ BOOK */

function isBookRead(books, titleToSearch) {
  const match = books.find(obj => obj.title === titleToSearch);
  return match !== undefined ? match.isRead: false;
}

const books = [
  {title: "Harry Potter y la piedra filosofal", isRead: true},
  {title: "Canción de hielo y fuego", isRead: false},
  {title: "Devastación", isRead: true},
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
