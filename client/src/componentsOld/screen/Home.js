import React from 'react';
import Store from '../Store';
import data from '../../api/data.json';
import user from '../../api/user.json';

// const urlConst = {
//   urlHome:'http://api.paullewisjohnston.com:8080/movies/search/findByTitleContaining?title=',
// }
// <Store url={urlConst.urlHome} />

const Home = () => (
    <div>
    <Store user={user} data={data} />
    </div>
);
export default Home;
