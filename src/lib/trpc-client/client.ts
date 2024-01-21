import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

// should be the Router from ur trpc server,
// U should import the type here, I dont have now, so I just use any
type AppRouter = any;
export const client = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:4444/trpc',

            // if ur trpc is protected by authorization headers, u can use code below
            async headers(){
                return {
                    authorization: 'Bearer sometoken'
                }
            }
        })
    ]    
})