import { subscribe, getdata } from "./firebase/subscribe.js"

const txtName  = document.getElementById("txtName")
const txtEmail = document.getElementById("txtEmail")
const txtLevel = document.getElementById("txtLevel")
const txtCharacter = document.getElementById("txtCharacter")

const btnSubscribe = document.getElementById("btnSubscribe")

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    const subId = await subscribe(subscription);
    console.log(`${subId} foi adicionado com sucesso`);

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value= ''
    txtCharacter.value = ''
});

async function showList() {
    const list = await getdata();
    list.map(li => {
        return console.log(`
        Nome: ${li.name}
        Email: ${li.email}
        Level: ${li.level}
        character: ${li.character}`);
    });
}

showList();