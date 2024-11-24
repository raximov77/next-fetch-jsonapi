import {FC, memo} from 'react';
import {UserDTO} from './types';
import Link from 'next/link';

interface UserListProps {
    users: Array<UserDTO>;
}

const List: FC<UserListProps> = memo(({users}): JSX.Element | null => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">
            {users.map(({id, name, email, phone}) => (
                <Link
                    href={{
                        pathname: '/users/[id]',
                        query: {
                            id,
                        },
                    }}
                >
                    <a key={id} className="p-6 flex flex-col gap-y-4 text-sm border border-gray-300 bg-white shadow-md rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg">
                        <p><span className='font-extrabold text-lg text-blue-400'>Name:</span> {name}</p>
                        <p><span className='font-extrabold text-lg text-blue-400'>Email:</span> {email}</p>
                        <p><span className='font-extrabold text-lg text-blue-400'>Phone Number:</span> {phone}</p>
                        <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                            View Details
                        </button>
                    </a>
                </Link>
            ))}
        </div>
    );
});

export default List;
