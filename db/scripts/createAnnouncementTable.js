import { query } from "../index.js";


//Creating the table for the annoucement list in the data base
const sqlQuery = `CREATE TABLE IF NOT EXISTS announcementlist(
    index INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    id TEXT,
    topic TEXT,
    student TEXT,
    date TEXT,
    time TEXT)`;

async function announcementList() {
  console.log("Hello");
  const res = await query(sqlQuery);
  console.log("Anouncement Table was created");
}

announcementList();
