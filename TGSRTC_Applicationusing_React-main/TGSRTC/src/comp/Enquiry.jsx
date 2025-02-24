import React from "react";

const Enquiry = () => {
    return (
        <>
           <center> <h3 style={{ color: "aquamarine" }}>Ticket Enquiry Status</h3></center>
            <center>
                <div style={{ border: "1px solid black", width: "50%" }}>
                    <center>
                        <form>
                            <input type="radio" name="a" ></input>Ticket Enquiry<span style={{ paddingLeft: "50px" }}></span>
                            <input type="radio" name="a" style={{ paddingLeft: "50px" }}></input> Transaction Status<span style={{ paddingLeft: "50px" }}></span>
                            <input type="radio" name="a" style={{ paddingLeft: "50px" }}></input> Service Status<span style={{ paddingLeft: "50px" }}></span>
                            <br>
                            </br><br></br><br></br>
                            Ticket No:<input type="text"></input><span style={{ paddingLeft: "50px" }}></span>
                            Mobile No:<input type="text"></input><span style={{ paddingLeft: "50px" }}></span>
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
export default Enquiry;


