import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/products";
import { Member, MemberInput } from "../../lib/types/member";

class MemberService {
    private readonly path: string;

    constructor(){
        this.path= serverApi
    }

    public async getTopUsers(): Promise<Member[]>{
        try{
            const url = this.path + "/member/top-users"
            const result = await axios.get(url)


            return result.data   }
        catch(error){
            console.log("error: getTopUsers", error)
            throw error

        }
    }
    public async getRestaurant(productId: string): Promise<Member>{
        try{
            const url = `${this.path}/member/restaurant/${productId}`
            const result = await axios.get(url, {withCredentials: true})
            console.log("result:", result)
            return result.data
        }
        catch(error){
            console.log("error:getRestaurant", error)
            throw error
        }
    
}
}
export default MemberService