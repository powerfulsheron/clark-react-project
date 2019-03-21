import axios from "axios";


export default url => {
    axios.get(url).then(response => {
        console.log(response);
        return(response.data.articles);
    }).catch(err => console.log(err));
};
