const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema")
const mongoose = require("mongoose");

const app = express();
const PORT = 4000

//connect to mongodb database
mongoose.connect('mongodb+srv://anday:gohome33@nodetuts.x2wgp.mongodb.net/graphql-tuts?retryWrites=true&w=majority', 
{useUnifiedTopology: true, useNewUrlParser: true})
    .then((result) => app.listen(PORT, () => {
        console.log(`now listening for requests on port ${ PORT }`)
    }));
mongoose.connection.once('open', () => {
    console.log("connected to database");
})

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));



