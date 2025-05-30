<<<<<<< HEAD
// insert_books.js - Script to populate MongoDB with sample book data

// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data
const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  }
];

// Function to insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
    });

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks().catch(console.error);

/*
 * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 1950:
 *    db.books.find({ published_year: { $gt: 1950 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })
 */ 
=======
//Task2: --
db.books.insertMany(
    [
        {title:"PracticalMongoDB", author:"Dedan", genre:"Databases", published_year:2005, price:1600.00, in_stock:true, pages:100, publisher:"Godswill"},
        {title:"FrontendReact", author:"Franklin Swaggart", genre:"Frontend", published_year:2015, price:1900.00, in_stock:true, pages:250, publisher:"William"},
        {title:"Programmers mares", author:"Don Hayler", genre:"Programs", published_year:2009, price:1500.00, in_stock:true, pages:150, publisher:"Teddy"},
        {title:"EcmaScript 1", author:"Freddy Moen", genre:"Programs", published_year:2011, price:1400.00, in_stock:false, pages:150, publisher:"Godswill"},
        {title:"Java night", author:"Jimmy Winams", genre:"Databases", published_year:2020, price:2500.00, in_stock:true, pages:450, publisher:"Trevor"},
        {title:"Render It", author:"James Okore", genre:"Frontend", published_year:2015, price:500.00, in_stock:false, pages:550, publisher:"Godswill"},
        {title:"Tailwind tonardo", author:"Dedan", genre:"Frontend", published_year:2010, price:3500.00, in_stock:true, pages:100, publisher:"Godswill"},
        {title:"Data Structures", author:"Jimmy Winams", genre:"Databases", published_year:2019, price:4000.00, in_stock:true, pages:150, publisher:"Adrian"},
        {title:"Code it diligently", author:"Freddy Moen", genre:"Programs", published_year:2025, price:9500.00, in_stock:true, pages:300, publisher:"Godswill"},
        {title:"Camping with C", author:"Dedan", genre:"Databases", published_year:2017, price:1500.00, in_stock:true, pages:150, publisher:"Teddy"}
    ]
)

//FINDING ALL BOOKS IN A SPECIFIC GENRE:
//condition1: Genre == "Databases"
db.books.find(
    {genre: "Databases"}
)
//Condition2: Genre == "Programs"
db.books.find(
    {genre: "Programs"}
)
//Condition3: Genre == "Frontend"
db.books.find(
    {genre: "Frontend"}
)
//Books published after 2015
db.books.find(
    {published_year: {$gt:2015}}
)
//Books by a specific author say "Dedan"
db.books.find(
    {author:"Dedan"}
)
//Update the price of a specific book
db.books.updateOne(
   {title:"UI/UX Render"}, {$set:{price:1000.00}}
)
//Deleting a Book:
db.books.deleteOne(
    {title:"PracticalMongoDB"}

)

// Task 3: Advanced Queries
// a) Books in stock and published after 2010

db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// b) Projection (only title, author, price)

db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })
// c) Sort by price
// Ascending
db.books.find().sort({ price: 1 })
// Descending
db.books.find().sort({ price: -1 })
// d) Pagination (5 books per page)
// Page 1

db.books.find().skip(0).limit(5)
// Page 2

db.books.find().skip(5).limit(5)
// Aggregation Pipeline
// a) Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])
// b) Author with the most books

db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])
// c) Group books by publication decade and count

db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $concat: [ { $toString: { $multiply: ["$_id", 10] } }, "s" ] },
      count: 1,
      _id: 0
    }
  }
])
// Task 5: Indexing
// a) Create index on title

db.books.createIndex({ title: 1 })
// b) Compound index on author and published_year

db.books.createIndex({ author: 1, published_year: -1 })
// c) Use explain() to check performance
// Before index:

db.books.find({ title: "Camping with C" }).explain("executionStats")
// After index:

db.books.find({ title: "Camping with C" }).explain("executionStats")
>>>>>>> 9ee0a4d (MongoDB Assignment)
