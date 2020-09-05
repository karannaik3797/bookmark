Bookmarker
=========

Bookmarker is a web app to manage bookmarks. It allows users to create, add and manage bookmarks online with a unique tag associated with each bookmark. We can also remove,add update tags.

This web app is built with the Node.js, Expree and MongoDB on the backend.

Setup
--------------

This web app uses mongodb to store data. You can use a free mongodb database from mongolab.com. Once you have setup your free mongodb database, you can either update the mongo_uri variable in the config file server/config/index.js or create an environment variable called "BOOKMARKER_MONGO_URI" to store your Mongodb URI. The Mongodb URI should look somthing like: "mongodb://abcdef:password@abc1234.mongolab.com:123456/bookmarkerdb".


Installation And Run
--------------

```sh

# Clone Repository
$ git clone https://github.com/karannaik3797/bookmarkingapp.git
$ cd bookmarker
$ npm install
$ npm start

```

For logging in, use the username "test" and password "bookmarker"