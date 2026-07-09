import fs from "fs/promises";



const DB_BASE_PATH = process.env.DB_BASE_PATH || "./db";


async function readFromJson(fileName) {
    try {
        const data = await fs.readFile(`${DB_BASE_PATH}/${fileName}`, "utf-8");
        return JSON.parse(data);
    } catch (e) {
        return e
    }
};

async function writeToJson(fileName,data) {
    try{
        await fs.writeFile(`${DB_BASE_PATH}/${fileName}`,data,"utf-8");
        return true
    }catch(e){
        console.error(e);
        return false;
    }
}

export default {
    readFromJson
}

