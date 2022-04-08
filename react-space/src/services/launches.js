const API_URL = "https://api.spacexdata.com/v3";

export async function getAllLaunches() {
    try {
        const respones = await fetch(`{API_URL}/launches`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}