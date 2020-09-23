import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer wi3Ofq1wBvFT_i7qaPmIzGXZ3v2Yub9z3H9So9qYLx-Ejh4dyfsOehq0y-LGONcijCJsSA8e9ma55CNwiCyOfiQ6klEOBZdO14zAqe0A6m1scud3odJ1wUHiz7RpX3Yx'
    }
});
