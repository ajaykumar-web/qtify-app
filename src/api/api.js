import axios from 'axios';

export const BACKEND_ENPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbum = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENPOINT}/albums/top`);
        return response;
    } catch (e) {
        console.error(e);
    }
};
