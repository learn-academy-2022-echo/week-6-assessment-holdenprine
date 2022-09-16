# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: A solid method of solving this issue is editing the schema of students and then migrating said database. The content to edit within the schema should be an added key that you could call "cohort" or something along the same lines thats value is an integer. Only after running the command db:merge will the new key in the database of students be made available and then, if database items are already created in students, values will need to be reassigned using active record queries or some kind of database manager like postman to update the data. If this is not done, the foreign key will be initialized with the nil value because they are initially empty.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, edit, update, and destroy must always be passed params when creating methods inside a given controller. The reason this is the case is because these particular routes require some kind of data to be specified in order to perform actions on it. Show is an obvious contender to take params in that you are asking the controller to show a specific database element. This needs to be specified otherwise theres no way for the controller to know what to actually show. This is different from index in that you can simply use the .all active record query which doesn't need params to display all relevant data. Next is edit which functions similarly to show in that some data must be displayed within the form. This requires some params in order to display the particular piece of data, often times using the primary key. Second to last is update. When updating a piece of data, its obvious some kind of params should be passed in order to manipulate them. Lastly is delete, which again often times goes off the primary key in order to find the exact element to remove from the database.

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: There are a few generator commands that are important for creating files and collections within a rails app. First ill talk about rails generate controller. This command creates a new controller that a developer can use along side the initial control to manage another data set. This is important when dealing with multiple databases that are tied with some kind of relationship. From the command line, rails g controller can take a few parameters from the jump, these are a name, and actions. These actions will initialize methods that we can use. So for example:
```ruby
$rails generate controller Users index
```

this controller will be created with the name UsersController and be initialized with the method index. The next generator ill cover is generate scaffold. Scaffold is a command that will generate the full MVC components; the model, view, controller, resource routes and migrations responsible for building tables. This generate command takes a model name and the associated key value pairs that will be applied to it. After the command is run a db:migrate must be executed in order to apply the scaffolding and build out all files. The last one ill mention is generate migration. You can use generate migration as a means of creating a new migration as appose to running a more generalized db:migrate command. This is a good option when you want to specify a change you want migrated vs a collective migration of all tables.
Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    This controller method would be index as a GET request would need to collect the data in students through the given location route. We know this method is probably index based on the fact that no params are specified in the given route which would imply that the active record query is probably .all which often lives in an index method of a given controller.

action: "POST" location: /students
    This route implies the use of the controller method create. The only differentiation from the above route that specifies the use of create is the fact that the given CRUD action is POST. POST is often used to create a new item which in this case will come from a shown form to add the new item.

action: "GET" location: /students/new
    This route is tied to the controller method new. We know this because of the location route /new. This shows the user will be redirect to a form in which they'll be able to apply information specified by a .erb file that the formatting for the given form. This will specify fields and given variables a user can apply information to be stored. Its important to note, without a create method, the data will not be applied to the database.

action: "GET" location: /students/2
    This route is indicative of the show method being the controller method used here. The show method typically will take the primary key from a given database element and return the element at that given key. In this case the 2 specified in the url will show the element with the primary key 2. 

action: "GET" location: /students/2/edit
    This route specifies the use of the edit method in the controller. The edit method takes a primary key and then directs the user to a form, specified by the edit keyword in the url. Here the url specifies that the database element with the primary key 2 is being called to be edited. Its important to note that these changes will only be saved if the controller contains a specified update method.

action: "PATCH" location: /students/2
    Here, in sequence and as mentioned earlier, the specified action implies that an update method is being used to apply the changes made to a given database element with a primary key of 2. We know this not only because of the primary key in the url but also because of the CRUD action PATCH, which calls for information to be updated.

action: "DELETE" location: /students/2
    The specified CRUD action here implies the use of the destroy method. We know this not only because of the DELETE command but also because of the specified key in the url.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user I should be able to see and access my list of to do items.
2. As a ListItem I should have a name, description, completion deadline, and completion check.
3. As a user I should be able to give my ListItem a name, description, completion deadline, and completion check.
4. As a user I should be able to change specifics of my ListItems.
5. As a user I should be able to update the changes of the edited ListItems.
6. As a user I should be able to share my ListItems with other users.
7. As a user I should be able to specify permissions when I share my ListItems with another user.
8. As a user with a shared ListItem from another user, I should be able to update ListItems.
9. As a user I should be see ListItems removed after completion checks value is marked true.
10. As a user I should be able to see a list of CompletedItems.


