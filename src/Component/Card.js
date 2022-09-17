import React ,{ Component } from "react";


class Card extends Component{
    render(){
        return(
            <div className=" bg-white   w-[800px] rounded-lg  p-8">
              <h1 className="text-6xl pb-9 mx-auto w-[90%] ">Sign Up</h1>
              <div className="mt-9 mx-auto w-[90%]">
                <h1 className="text-4xl">Name:</h1>
                <input type='text' className="px-3 py-3 outline-0 text-2xl border-[#999]  rounded-lg border-4 w-[100%]"/>
              </div>
              <div className="mt-9 mx-auto w-[90%]">
                <h1 className="text-4xl">Password:</h1>
                <input type='password' className="px-3 py-3 outline-0 text-2xl border-[#999] rounded-lg border-4 w-[100%]"/>
              </div>
              <div className="mt-9 mx-auto w-[90%]">
                <button className="bg-[#EE5784] w-[100%] text-[30px] px-3 py-3 text-white rounded-xl font-semibold">Sign Up</button>
              </div>
              <hr className="mt-5 mx-auto w-[90%] border-y-2 border-[#999] bg-[#999] "/>
                </div>
        )
    }
}

export default Card