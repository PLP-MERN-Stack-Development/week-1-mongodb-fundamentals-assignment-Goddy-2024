
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
