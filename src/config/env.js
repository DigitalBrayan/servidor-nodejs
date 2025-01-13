// require ('dotenv').config();
import dotenv  from 'dotenv';
import env from 'env-var';

// const {get} = require('env-var');
dotenv.config();

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    PUBLIC_PATH:  env.get('PUBLIC_PATH').default('public').asString()
}
