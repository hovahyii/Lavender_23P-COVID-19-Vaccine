import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import { isAuth } from '../../actions/auth';

const UserIndex = () => {
    return (
        <Layout>
        <Private>
            <div className="container-fluid">
                <div className="row">
                 
                    <div className="col-md-4">
                        <ul class="list-group">
                            <li className="list-group-item">
                                <a href="/user/crud/blog">Create Blog</a>
                            </li>

                            <li className="list-group-item">
                                <Link href="/user/crud/blogs">
                                    <a>Update/Delete Blog</a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                        <div className="col-md-8">
                            <h2 >Welcome to Dashboard</h2>
                       
                            {isAuth() && isAuth().role === 0 && (
                                <h3>  
                               {`${isAuth().name}`}
                                </h3>  
                            )}

                            { isAuth() && isAuth().role === 1 && (
                                <h3>  
                               {`${isAuth().name}`}
                                </h3>
                            )}
                            <br />

                            <br />
                            <h4>Notes:</h4>
                            <ul>
                                <li>If you need to add additional tag and category, please let the admin, Hovah Yii knows.</li>
                                <li>Please write post only about COVID-19 Vaccine</li>
                                <li>Do not do your work in last minute</li>
                                <li>Remember procrastinate is allowed but please don't let it affects group performance</li>

                            </ul>

                        </div>
                </div>
            </div>
        </Private>
    </Layout>
    );
};

export default UserIndex;