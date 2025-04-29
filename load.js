const connection = require("./db.js");

async function loadData(masterData,childData){
    for(const row of masterData){
        await new Promise((resolve, reject)=>{
            connection.query('INSERT INTO user_details (id, name, email, submitted_at) VALUES (?,?,?,?)',
                [row.id, row.name, row.email, row.submitted_at],
                (err) => (err ? reject(err):resolve())
            );
        });
    }

    for (const row of childData) {
        await new Promise((resolve, reject) => {
          connection.query(
            'INSERT INTO user_responses (submission_id, question, answer) VALUES (?, ?, ?)',
            [row.submission_id, row.question, row.answer],
            (err) => (err ? reject(err) : resolve())
          );
        });
    }

    
  console.log('Data loaded into MySQL!');

}

module.exports = loadData;