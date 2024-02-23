import { createPublicClient, http,formatEther} from 'viem'
import { mainnet} from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http("https://eth1.lava.build/lava-referer-ed3b9819-cc31-44bf-923f-c9ba17a3fb91/"),
})

document.getElementById('getData').addEventListener('click', async () => {
  setInterval(async () => {
    const bnum = document.getElementById('bnum')
  const blocknumber = await client.getBlockNumber()
  // console.log(blocknumber);
  bnum.value = blocknumber
  const balance = await client.getBalance({
    address: "0xB38e8c17e38363aF6EbdCb3dAE12e0243582891D",
    chain: mainnet.id
  })
  document.getElementById('balance').value = formatEther(balance)
  },500)
})

setInterval(async () => {
  const b = await client.getBlockNumber()
  console.log(b);
}, 500);