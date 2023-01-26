export const sendGetRequest = async url => {
    return await fetch(url).then(response => response.json());
};
