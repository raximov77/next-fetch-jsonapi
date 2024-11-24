/**
 * Created by ASTAKHOV A.A. on 01.06.2022
 */

import {memo} from 'react';
import {NextPage} from 'next';
import Layout from '../../components/Layout/Layout';
import {useRouter} from 'next/router';
import Page from '../../entities/users/Page';
import axios from 'axios';
import {UserDTO} from '../../entities/users/types';
import DocumentTitle from '../../components/Utils/DocumentTitle';

interface ExtraProps {
    user: UserDTO;
}

const UserPage: NextPage<ExtraProps> = memo(({user}) => {
    const {query} = useRouter();
    const {id}: {id: string} = query;

    return (
        <>
            <DocumentTitle title={`Users #${id}`} />
            <Layout>
                <div className="container">
                    <section className="flex flex-col gap-y-10">
                        <h1 className="h1">Users {id}</h1>

                        {user && <Page user={user} />}
                    </section>
                </div>
            </Layout>
        </>
    );
});

export const getServerSideProps = async ({params}) => {
    const {id} = params;

    const user = await axios
        .get<UserDTO>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.data);

    return {
        props: {user},
    };
};

export default UserPage;
