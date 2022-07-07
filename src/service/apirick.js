
const Enpoint="https://rickandmortyapi.com/api/character";

export const getDataApi= async (url = Enpoint)=>{
    const response = await fetch(url);
    const data = await response.json();
    try {
        console.log("data",data);
        return data;
    } catch (error) {
        console.log(error.message)
    }

}