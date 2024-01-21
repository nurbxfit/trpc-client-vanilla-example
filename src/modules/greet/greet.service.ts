import { client } from "../../lib/trpc-client/client"

export const GreetServiceClient = {
    async greet(){
        try{
            //@ts-ignore
            const result = await client.greet.query();
            console.log('Result:',result);
            return result
        }catch(error:any){
            console.error('Error:',error);
    
        }
    }
}