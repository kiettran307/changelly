
// const ipfsClient = require('ipfs-http-client')
//  // connect to ipfs daemon API server
// const ipfs = ipfsClient('localhost', '5001', { protocol: 'http' }) 
// const { globSource } = ipfs

const IPFS = require('ipfs')
const { globSource, CID } = IPFS
const fs = require('fs');


// let testFile = fs.readFileSync('./images/86272159_2855551654505430_6147579294278221824_n.jpg');
//Creating buffer for ipfs function to add file to the system
// let testBuffer = Buffer.from(testFile);
// console.log('testBuffer ', testBuffer);

async function ipfsInit(){
const ipfs = await IPFS.create()
// for await (const result of ipfs.add(testBuffer)) {
//     console.log(result)
//   }
for await (const file of ipfs.add(globSource('/Users/kiet/Desktop/s3/', { recursive: true }))) {
  console.log(file.cid.toBaseEncodedString())
}
}
ipfsInit();