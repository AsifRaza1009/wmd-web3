"use client"

import React, { useMemo, useState } from 'react'

import { getZeroDevSigner, getSocialWalletOwner } from '@zerodevapp/sdk'

import { 
  SocialWallet, 
  GoogleSocialWallet, 
  FacebookSocialWallet,
  GithubSocialWallet,
  DiscordSocialWallet,
  TwitchSocialWallet,
  TwitterSocialWallet
} from '@zerodevapp/social-wallet';




const Wallet = () => {
 
   
        const [address, setAddress] = useState('')
        const [loading, setLoading] = useState(false)
      
        const socialWallet = useMemo(() => {
          return new SocialWallet()
        }, [])
        
        const createWallet = async () => {
          setLoading(true)
          const signer = await getZeroDevSigner({
            projectId: "efddb303-e1cf-4d35-baa1-32fc102b6c8c",
            owner: await getSocialWalletOwner("efddb303-e1cf-4d35-baa1-32fc102b6c8c", socialWallet)
          })
          setAddress(await signer.getAddress())
          setLoading(false)
        }
      
        const disconnect = async () => {
          await socialWallet.disconnect()
          setAddress('')
        }
      
        const connected = !!address
      
        return (
          <div>
            
            {connected && 
              <div className='flex justify-center p-2 m-1 '>
                <label className='text-sm text-blue bg-gray-100 rounded-lg px-2 py-3 break-all'>Your Wallet address:<span className='text-center my-2  text-red-400 hover:animate-pulse hover:text-red-900' > {address}</span></label>
              </div>
            }
            <div className='flex justify-center' >
              {!connected && <button className='text-center px-2 py-1 my-5 text-md text-red-600 bg-slate-400 rounded-lg' onClick={createWallet} disabled={loading}>{ loading ? 'loading...' : 'Create Wallet'}</button>}
              {connected && 
                <button className='text-red-500 rounded-lg text-xl px-4 py-2 bg-gray-300' onClick={disconnect} disabled={loading}>Disconnect</button>
              }
            </div>
          </div>
        )
      }



export default Wallet