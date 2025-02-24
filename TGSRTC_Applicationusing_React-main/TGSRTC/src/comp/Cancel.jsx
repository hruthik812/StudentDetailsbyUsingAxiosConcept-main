import React from "react";

const Cancel=()=>
{
    return(
        <>
       <center> <h2 style={{ color: "aquamarine" }}>Cancel Ticket</h2></center>
            <center>
                <div style={{ border: "1px solid black", width: "70%" }}>
                    <center>
                        <form>
                            
                            Ticket No:<input type="text"></input><span style={{ paddingLeft: "30px" }}></span>
                            UID Number:<input type="text"></input><span style={{ paddingLeft: "30px" }}></span>
                            MobileNumber:<input type="text"></input><span style={{ paddingLeft: "30px" }}></span>
                            <br>
                            </br><br></br><br></br>
                            <button >Submit</button>
                            <br></br>
                        </form>
                    </center>
                </div>
            </center>
        </>
    )
}
export default Cancel;


