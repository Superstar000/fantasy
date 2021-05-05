import app from './config/app.config.js';
import vars from './config/var.config.js';
import db from './config/db.config.js';

// Connect mongodb
db();

// Run server
app.listen(vars.port, () => console.info(`Capos server started on port ${vars.port}(${vars.env})`));
