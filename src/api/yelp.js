import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer YgiobF-Rza-_TTgeX1HsM5au3pwgAVN4xEmTCOv1cEhN5CFS5I_VI0iWQM3JwnvsmW12jHrb4Sweo0Va3jDFJ_VUz5XtWuOmKF1X-9c-vShbyBHv8N-K9siyb_poXnYx'
    }
});