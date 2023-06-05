#!/bin/sh

# Run database migrations
npm run typeorm migration:run -- -d ./src/data-source

# Start the Express app
npm start
