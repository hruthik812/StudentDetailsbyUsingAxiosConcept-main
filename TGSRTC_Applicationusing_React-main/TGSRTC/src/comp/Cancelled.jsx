import React from "react";

const Cancelled=()=>
{
    return(
        <>
       <center> <h2 style={{ color: "aquamarine" }}>Cancelled Services</h2></center> 
            <center>
                <div style={{ border: "1px solid black", width: "70%" }}>
                    <center>
                        <form>
                            
                            Service No:<input type="text"></input><span style={{ paddingLeft: "30px" }}></span>
                            Journey date<input type="date"></input><span style={{ paddingLeft: "30px" }}></span>
                         
                          
                            <button >Submit</button>
                            <br></br>
                        </form>
                    </center>
                </div>
            </center>
       
        </>
    )
}
export default Cancelled;


