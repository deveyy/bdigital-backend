
import Actor from '../models/actor.js';
import cloudinary from 'cloudinary';

import * as dotenv from 'dotenv';

dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME || '',
    api_key: process.env.CLOUD_API_KEY || '',
    api_secret: process.env.CLOUD_API_SECRET || '',
    secure: true
})

const createActor = async (req, res) => {
    const {name, about, gender } = req.body;
    const {file} = req;

    const newActor = await new Actor({name, about, gender});
}

export {createActor}