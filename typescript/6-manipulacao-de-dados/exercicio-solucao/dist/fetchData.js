export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        if (!response.ok)
            throw new Error("Erro: " + response.status);
        return json;
    }
    catch (error) {
        if (error instanceof Error)
            console.error("fetchData: " + error.message);
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map