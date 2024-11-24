/**
 * Created by ASTAKHOV A.A. on 01.06.2022
 */

import {memo} from 'react';
import {NextPage} from 'next';
import Layout from '../components/Layout/Layout';
import DocumentTitle from '../components/Utils/DocumentTitle';

const Home: NextPage = memo(() => {
    return (
        <>
            <DocumentTitle title="Home" />
            <Layout>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
                <div className="container p-6 bg-white rounded-lg shadow-lg mx-auto">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome to Our Homepage</h1>
                    
                    <p className="text-lg text-gray-600 mb-4 text-center">
                     In Users you see json-data
                    </p>

                    <div className="flex justify-center gap-4">
                    <button
                        className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                        onClick={() => alert('Explore Now Clicked')}
                    >
                        Explore Now
                    </button>
                    <button
                        className="px-6 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition"
                        onClick={() => alert('Learn More Clicked')}
                    >
                        Learn More
                    </button>
                    </div>
                    
                    <div className="mt-8 flex flex-col items-center justify-center">
                    <img
                        src="https://picsum.photos/600/600"
                        alt="Sample"
                        className="w-[400px] h-auto rounded-md shadow-lg cursor-pointer"
                    />
                    </div>
                </div>
                </div>
            </Layout>
        </>
    );
});

export default Home;
