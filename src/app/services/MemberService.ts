
import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/products";
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../../lib/types/member";

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

   public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = `${this.path}/member/signup`;
      const result = await axios.post(url, input, { withCredentials: true });
      const member: Member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (error) {
      console.log("error: signup", error);
      throw error;
    }
}

 public async login(input: LoginInput): Promise<Member> {
    try {
      const url = `${this.path}/member/login`;
      const result = await axios.post(url, input, { withCredentials: true });
      const member: Member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (error) {
      console.log("error: login", error);
      throw error;
    }
}

public async logout(): Promise<void> {
  try {
    const url = `${this.path}/member/logout`;
    const result = await axios.post(url, {}, { withCredentials: true });
    localStorage.removeItem("memberData");
   
  } catch (error) {
    console.log("error: logout", error);
    throw error;
  }
}

public async updateMember(input : MemberUpdateInput) : Promise<Member> {
  try{
    const formData = new FormData()

    formData.append("memberNick", input.memberNick || "");
    formData.append("memberPhone", input.memberPhone || "");
    formData.append("memberAddress", input.memberAddress || "");
    formData.append("memberDesc", input.memberDesc || "");
     formData.append("memberImage", input.memberImage || "");

    const result = await axios( `${serverApi}/member/updateMember`, {
      method: "POST",
      data: formData,
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    console.log("updateMember", result)

    const member : Member = result.data
    localStorage.setItem("memberData", JSON.stringify(member))
    return member

  }
  catch(error){
    console.log("ERROR update", error)
    throw error
  }

}

}
export default MemberService