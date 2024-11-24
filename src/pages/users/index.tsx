import {memo} from 'react';
import {GetStaticProps, NextPage} from 'next';
import Layout from '../../components/Layout/Layout';
import List from '../../entities/users/List';
import {UserDTO} from '../../entities/users/types';
import axios from 'axios';
import DocumentTitle from '../../components/Utils/DocumentTitle';

interface ExtraProps {
    users: Array<UserDTO>;
}

const UserList: NextPage<ExtraProps> = memo(({users}) => {
    return (
        <>
            <DocumentTitle title="Пользователи" />
            <Layout>
                <div className="container">
                    <section className="flex flex-col gap-y-10">
                        <h1 className="h1">Users</h1>

                        <List users={users} />
                    </section>
                </div>
            </Layout>
        </>
    );
});

export const getStaticProps: GetStaticProps = async () => {
    const users = await axios
        .get<Array<UserDTO>>('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data);

    return {
        props: {users},
    };
};

export default UserList;
