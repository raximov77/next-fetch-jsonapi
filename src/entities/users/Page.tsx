import { FC, memo } from 'react';
import { UserDTO } from './types';

interface PageProps {
  user: UserDTO;
}

const Page: FC<PageProps> = memo(({ user }): JSX.Element | null => {
  const { 
    name, 
    username, 
    email, 
    phone, 
    website, 
    address: { street, suite, city, zipcode }, 
    company: { name: companyName, catchPhrase, bs } 
  } = user;

  return (
    <div className="mx-auto p-9 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl space-y-8 border border-gray-200">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[27px] font-extrabold text-gray-800">{name}</h1>
        <p className="text-[25px] text-gray-500">@{username}</p>
      </div>
    <div className='flex gap-12'>
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl text-center font-semibold text-gray-700 border-b pb-2 border-gray-300">
          Contact Information
        </h2>
        <div className="mt-4 space-y-3 text-gray-600">
          <p>
            <span className="font-bold text-gray-800">Email:</span> {email}
          </p>
          <p>
            <span className="font-bold text-gray-800">Phone:</span> {phone}
          </p>
          <p>
            <span className="font-bold text-gray-800">Website:</span>{' '}
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {website}
            </a>
          </p>
        </div>
      </div>

      <div className="w-[250px] p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl text-center font-semibold text-gray-700 border-b pb-2 border-gray-300">
          Address
        </h2>
        <div className="w-[250px] mt-4 text-gray-600">
          <p>{`${street}, ${suite}`}</p>
          <p>{city}</p>
          <p>{zipcode}</p>
        </div>
      </div>

      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl text-center font-semibold text-gray-700 border-b pb-2 border-gray-300">
          Company
        </h2>
        <div className="mt-4 space-y-3 text-gray-600">
          <p>
            <span className="font-bold text-gray-800">Name:</span> {companyName}
          </p>
          <p>
            <span className="font-bold text-gray-800">Catchphrase:</span> "{catchPhrase}"
          </p>
          <p>
            <span className="font-bold text-gray-800">Business Focus:</span> {bs}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
});

export default Page;
