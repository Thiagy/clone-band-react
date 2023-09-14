//Aqui consome a api que retorna imagens de anúncios
async function getMarketing(){

    try {

        const response = await fetch('https://g1-clone-node-react.onrender.com/marketing')
        const marketing = await response.json()

        return marketing

    } catch (e) {

        console.log(e)
    }
}

export {getMarketing}