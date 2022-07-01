import { promises as fs } from 'fs';

init();

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