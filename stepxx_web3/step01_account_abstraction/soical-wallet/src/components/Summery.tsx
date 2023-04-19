import React from "react";
import Wallet from "./Wallet";

export default function Summery() {
  return (
    <>
      <div className='bg-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-5 '>
        <div className='bg-white p-6'>
          <h1 className='text-3xl text-blue-500'>1-Account Creation </h1>

          <h2 className='text-xl text-red-500 py-2'>1. Account Address</h2>
          <p className='text-xs underline text-purple-400 break-all'>0x2796c8A8c9d04fAe2D6c763204fB132eE089a392
          </p>
          <h2 className='text-xl text-red-500 py-2'>2.ETH funded Hash</h2>
          <p className='text-xs underline text-purple-400 break-all'> 0x91c6f73942bb0687ccc8a1a6dfb4cde5d064df70c8313ff71adfe26fcda89701
          </p>
          <h2 className='text-xl text-red-500 py-2'>3.ERC Token Funded Hash</h2>
          <p className='text-xs underline text-purple-400 break-all'>0x32516776ae2886b77baeb400ab5850d36e9fb496dd02da7eb0dc7201173e128a
          </p>
          <h2 className='text-xl text-red-500 py-2'>4.ETH fund transfer Hash</h2>
          <p className='text-xs underline text-purple-400 break-all'>0x317425243b8c43096f989a37e80fa6b018a4443dbb637cfca7b376c740daed05
          </p>
          <h2 className='text-xl text-red-500 py-2'>5. ETH batch transfer Hash</h2>
          <p className='text-xs underline text-purple-400 break-all'>0xe658d78515d7f1f793ce109c09999d911d14102b6463c314a35dd5621a3209a8
          </p>
          <h2 className='text-xl text-red-500 py-2'>6. ERC-20 Token Transfer Hash</h2>
          <p className='text-xs underline text-purple-400 break-all'>0x1c36e151093e3b4fd3e4fe703369808e8d4bc5333c022422320889b3c9361b2c
          </p>
          <h2 className='text-xl text-red-500 py-2'>7. ERC-20 Token Batch Transfer Hash</h2>
          <p className='text-xs underline text-purple-400 break-all'>0xbdb61fc02cfcb9a57af30c6e3a0836b1a54ad1446de1c4ef78fc7978e34a7627
          </p>
        </div>
        <div className='bg-white p-6'>
          <h1 className='text-3xl text-blue-500'>2-Mint NFT </h1>
          <h2 className='text-xl text-red-500 py-2'>1. My address</h2>
          <p className='text-xs underline text-green-400 break-all'>0xe9360f975932AdFAf029570202475363A893908E
          </p>
          
          <h2 className='text-xl text-red-500 py-2'>2.NFT Mint Hash</h2>
          <p className='text-xs underline text-green-400 break-all'>0xe80d0cc5abd99f7bae2c102c491389cbe18d09a70651731a202142b4d226da57
          </p>
          <h2 className='text-xl text-red-500 py-2'>3.Multiple NFT Mint Hash</h2>
          <p className='text-xs underline text-green-400 break-all'>0xdb7cf4c140e71f6689f01332ee5c18670f40319b7a9a6241fefc22d5742e648f
          </p>
          
        </div>
        <div className='bg-white p-6'>
          <h1 className='text-3xl text-blue-500'>3-Social Wallet</h1>
          <p className='text-md'>
            For Creation of Social wallet please click the Button Creat Wallet{" "}
          </p>
           <Wallet/> 
        </div>
      </div>
    </>
  );
}
