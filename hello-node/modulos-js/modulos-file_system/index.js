import { promises as fs } from 'fs';

init();
writeReadJson();

async function init() {

    try{
        await fs.writeFile("./modulos-file_system/text.txt", "Sou uma promeça");
        await fs.appendFile("./modulos-file_system/text.txt", "\nEstou sendo um apendicie de uma promeça");
        const data = fs.readFile("./modulos-file_system/text.txt", "utf-8");
        
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

async function writeReadJson() {

    try{
        const arrayCarros = ["Gol", "Palio", "Uno"];
        const carros = {
            carros: arrayCarros
        };


        await fs.writeFile("./modulos-file_system/test.json", JSON.stringify(carros));
        const data = await fs.readFile("./modulos-file_system/test.json");

        console.log(JSON.parse(data));
    } catch(err) {
        console.log(err);
    }
}