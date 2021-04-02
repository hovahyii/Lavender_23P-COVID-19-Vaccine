import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import { isAuth } from '../../actions/auth';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
            <div className="container-fluid">
                    <div className="row">
                     
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <a href="/admin/crud/blog">Create Blog</a>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                      
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <h2 >Welcome to Admin Dashboard</h2>
                       
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

                    
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;