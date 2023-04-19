1. account address

   - 0x2796c8A8c9d04fAe2D6c763204fB132eE089a392

2. ETH funded Hash

   - 0x91c6f73942bb0687ccc8a1a6dfb4cde5d064df70c8313ff71adfe26fcda89701

3.  ERC funded Hash

   - 0x32516776ae2886b77baeb400ab5850d36e9fb496dd02da7eb0dc7201173e128a

4. ETH transfer Hash

    - 0x317425243b8c43096f989a37e80fa6b018a4443dbb637cfca7b376c740daed05

5. ETH batch transfer Hash

    -  0xe658d78515d7f1f793ce109c09999d911d14102b6463c314a35dd5621a3209a8

6. ERC-20 transfer Hash

    -  0x1c36e151093e3b4fd3e4fe703369808e8d4bc5333c022422320889b3c9361b2c

7. ERC-20 Batch Transfer Hash

    - 0xbdb61fc02cfcb9a57af30c6e3a0836b1a54ad1446de1c4ef78fc7978e34a7627

----------
-----------
Account Creation and Transaction

Explore a basic implementation of account abstraction using ERC-4337. This example will create an account and initiate a transaction on the Ethereum Goerli testnet.

[Stackup quick start](https://docs.stackup.sh/docs/guides/quickstart)

## Create an Account Abstraction

1. To create an account abstraction using ERC-4337, download the script

   ```cmd
   git clone https://github.com/stackup-wallet/erc-4337-examples.git
   ```

2. Install all dependencies

   ```cmd
   yarn install
   ```

3. Initialize your local configuration.

   ```cmd
   yarn run init
   ```

   this will create a `config.json` file with the following content

   ```json
   {
     "bundlerUrl": "http://localhost:4337",
     "rpcUrl": "http://localhost:8545",
     "signingKey": "***",
     "entryPoint": "***",
     "simpleAccountFactory": "***",
     "paymasterUrl": ""
   }
   ```

   as we are not using local bundler so need to create a bundler instance on [app.stackup.sh](https://app.stackup.sh/sign-in) by selecting Ethereum Goerli network and 0.4.0 bundler version. Copy bundler and node link from the instance and update `bundlerUrl` and `rpcUrl` in the above file.

4. Now create an account

   ```cmd
   yarn run simpleAccount address
   ```

   this will create an account and return the account address (not deployed)

   ```
   SimpleAccount address: 0x4A4943C1b6fED2f7F6Ca1DD6C2222eF75e66b9aF
   ```

## Account Funding

1. Fund the account by using some faucet such as [goerlifaucet](https://goerlifaucet.com/) or from some other wallet.

   ```
   ETH funding hash: 0x022d15042acdd781a3a70997f9802584e322c81d7a7a50c8fba1ff25de3dab61
   ```

2. Fund accound with erc-20 token from some fucet or deposit from some other account

   ```
   ERC-20 funding hash: 0x4911a44b9c47793e3f0310ae76564fc1331501c9c6dcaeda0f72f7f658e75713
   ```

## Make eth Transactions

1. Create a transaction by transfering eth to some other address

   ```cmd
   yarn run simpleAccount transfer --to <address> --amount <eth>
   ```

   ```cmd
   yarn run simpleAccount batchTransfer --to 0x42C53eCC67CFf59508ab5f498C863D58426CBFE1 --amount 0.001
   ```

   ```
   Transaction hash: 0x3617da3117107915ed74b17993fcdc6d298d63b14ce36a95542315df0e9e487a
   ```

2. Create a batch transaction by transfering eth to multiple other address

   ```cmd
   yarn run simpleAccount batchTransfer --to <address,address> --amount <eth>
   ```

   ```cmd
   yarn run simpleAccount batchTransfer --to 0x4A4943C1b6fED2f7F6Ca1DD6C2222eF75e66b9aF,0x42C53eCC67CFf59508ab5f498C863D58426CBFE1 --amount 0.001
   ```

   

   ```
   Transaction hash: 0x4545691af2c490d33b2e370a8f6910850abed99c783d961e7252775e9ea50c8d
   ```

## Make ERC-20 Transacton

1. Transfer erc-20 tokens to some other account

   ```cmd
   yarn run simpleAccount erc20Transfer --token <address> --to <address> --amount <decimal>
   ```

   ```cmd
   yarn run simpleAccount batchErc20Transfer --token 0x326C977E6efc84E512bB9C30f76E30c160eD06FB --to 0x42C53eCC67CFf59508ab5f498C863D58426CBFE1 --amount 1
   ```

  

   ```
   Transaction hash: 0xe05ad3e1366133fda329f4a0910408973ac7b9333b65f8fdcfb3864a65954629
   ```

2. Batch transfer erc-20 tokens to some other accounts

   ```cmd
   yarn run simpleAccount batchErc20Transfer --token <address> --to <address,address> --amount <decimal>
   ```

   ```cmd
   yarn run simpleAccount batchErc20Transfer --token 0x326C977E6efc84E512bB9C30f76E30c160eD06FB --to 0x4A4943C1b6fED2f7F6Ca1DD6C2222eF75e66b9aF,0x42C53eCC67CFf59508ab5f498C863D58426CBFE1 --amount 1
   ```


   ```
   Transaction hash: 0xb45e5fe6237f552a7ab67ec4af45815b5de678995e11b714252298a714f47e0a
   ```











yarn run simpleAccount transfer --to 0xc09C3f494b0798A767F9CD16f2Fbf4F3a3127762 --amount 0.01