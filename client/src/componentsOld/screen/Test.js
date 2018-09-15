import React from 'react';
import Store from '../Store';
import data from '../../api/dataTest.json';
import user from '../../api/user.json';

// const urlConst = {
//   urlHome:'http://localhost:8080/api/movies/search/findByTitleContaining?title=',
// }
//<Store url={urlConst.urlHome} />
const Home = () => (
    <div>
      <Store user={user} data={data} />
    </div>
);
export default Home;
