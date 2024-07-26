'use client';

import NFTCard, { INFTModal } from '@/components/NFTCard';

import NFTModal1 from '@/jsons/1.json';
import NFTModal2 from '@/jsons/2.json';
import NFTModal3 from '@/jsons/3.json';
import NFTModal4 from '@/jsons/4.json';
import NFTModal5 from '@/jsons/5.json';
import NFTModal6 from '@/jsons/6.json';
import NFTModal7 from '@/jsons/7.json';

const page = () => {
    return (
        <div className="w-full">
            <div className='flex justify-center'>
                <div className='body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10 px-10'>
                    <NFTCard data={NFTModal1.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal2.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal3.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal4.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal5.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal5.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal6.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal7.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal2.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal3.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal4.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal5.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal5.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal6.data} mainHash={''} targetVector={''} targethash={''} />
                    <NFTCard data={NFTModal7.data} mainHash={''} targetVector={''} targethash={''} />
                </div>
            </div>
        </div >
    );
};

export default page;