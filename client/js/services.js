'use strict';
/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  factory("Book",function(){
	var book={};
	  //to create unique id
    var uid = 1;
    
    //book array to hold list of all books
    var books = [{
        id: 0,
        'name': 'hi',
            'author': 'hello',
            'published date': '123-2343-44',
			'user':'leo',
			'category':'fiction'			
    }];
    
    //save method create a new book if not already exists
    //else update the existing object
    book.save = function (book) {
        if (book.id == null) {
            //if  new book, add it in books array
            book.id = uid++;
            books.push(book);
        } else {
            //for existing book, find this contact using id
            //and update it.
            for (var i=0;i<books.length;i++) {
                if (books[i].id == book.id) {
                    books[i] = book;
                }
            }
        }

    }

    //simply search books list for given id
    //and returns the book object if found
    book.get = function (id) {
        for (var i=0;i<books.length;i++) {
            if (books[i].id == id) {
                return books[i];
            }
        }

    }
    
    //iterate through books list and delete 
    //book if found
    book.delete = function (id) {
        for (var i=0;i<books.length;i++) {
            if (books[i].id == id) {
                books.splice(i, 1);
            }
        }
    }

    //simply returns the books list
    book.list = function () {
        return books;
    }
	return book;
  }).factory("Category",function(){
	var category={};
	  //to create unique id
    var uid = 1;
    
    //book array to hold list of all category
    var categories = [{
        id: 0,
        'name': 'fiction',
            'description': 'science fiction'			
    }, {
        id: 1,
        'name': 'filosofy',
            'description': 'filosofy'			
    }
	];
    
    //save method create a new category if not already exists
    //else update the existing object
    category.save = function (category) {
        if (category.id == null) {
            //if  new category, add it in books array
            category.id = uid++;
            categories.push(category);
        } else {
            //for existing category, find this category using id
            //and update it.
            for (var i=0;i<categories.length;i++) {
                if (categories[i].id == category.id) {
                    categories[i] = category;
                }
            }
        }

    }

    //simply search categories list for given id
    //and returns the category object if found
    category.get = function (id) {
        for (var i=0;i<categories.length;i++) {
            if (categories[i].id == id) {
                return categories[i];
            }
        }

    }
    
    //iterate through categories list and delete 
    //book if found
    category.delete = function (id) {
        for (var i=0;i<categories.length;i++) {
            if (categories[i].id == id) {
                categories.splice(i, 1);
            }
        }
    }

    //simply returns the categories list
    category.list = function () {
        return categories;
    }
	return category;
  });
