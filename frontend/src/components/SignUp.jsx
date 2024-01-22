
import { WrapperCard } from "./WrapperCard";

export default function SignUp(){
    return <div>
        <div style={{
                width:"100vw",
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#8ab4f8"
            }}>
                <div style={{
                    border:"2px solid #ddd",
                    borderRadius:"10px",
                    backgroundColor:"white",
                    boxShadow: " 0 4px 8px rgba(0, 0, 0, 1)"
                }}>
                    <div style={{
                           display:"flex",
                           justifyContent:"center",
                           flexDirection:"column",
                           alignItems:"center",
                           width:"400px",
                           
                        }}>
                        <h1 style={{
                            marginBottom:"30px",
                            marginTop:"30px"
                        }}>Create an account</h1>

                        <input type="text" placeholder="First Name" style={{
                            marginBottom:"20px",
                            boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                            borderRadius:"5px",
                            width:"300px",
                            height:"25px",
                            padding:"10px",
                            fontSize:"16px"
                        }}/>
                        <input type="text" placeholder="Last Name" style={{
                            marginBottom:"20px",
                            boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                            borderRadius:"5px",
                            width:"300px",
                            height:"25px",
                            padding:"10px",
                            fontSize:"16px"
                        }}/>
                        <input type="email" placeholder="Email" style={{
                            marginBottom:"20px",
                            boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                            borderRadius:"5px",
                            width:"300px",
                            height:"25px",
                            padding:"10px",
                            fontSize:"16px"
                        }}/>
                        <input type="password" placeholder="Password" style={{
                            marginBottom:"20px",
                            boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                            borderRadius:"5px",
                            width:"300px",
                            height:"25px",
                            padding:"10px",
                            fontSize:"16px"
                        }}/>
                        <button style={{
                            marginBottom:"30px",
                            marginTop:"15px",
                            padding: "10    px",
                            boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                            borderRadius:"5px",
                            height:"50px",
                            width:"90px",
                            fontSize:"16px"
                        }}>Sign Up</button>
                        <div style={{
                            marginBottom:"20px",
                            fontSize:"16px"
                        }}>Already have an account? <a href="/signin">Log in</a> </div>
                    </div>    
                </div>
        </div>
    </div>
}