import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm"
import { ThirdwebAuth } from "@thirdweb-dev/auth/next"

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "localhost:3000",
  wallet: new PrivateKeyWallet(process.env.ADMIN_PRIVATE_KEY || ""),
})

// Export the handler to setup all your endpoints
export default ThirdwebAuthHandler()
