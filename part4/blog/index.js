const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./utils/logger')
const config = require('./utils/config');
const middleware = require('./utils/middleware');
const blogRouter = require('./controllers/Blog')
const Blog = require('./models/blog')
const app = express();


mongoose.connect(config.MONGO_URI).then(()=>logger.info("connected"))
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger)
app.use('/',blogRouter)


app.use(middleware.unknownEndpoint)

app.listen(config.PORT,()=>{
    logger.info('listening on port ',config.PORT);
})