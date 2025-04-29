const extractData = require("./extract");
const transformData = require("./transform");
const loadData = require("./load");

async function etl(){
    const rawData = await extractData();
    const {masterData, childData} = transformData(rawData);
    await loadData(masterData,childData);
}

etl();