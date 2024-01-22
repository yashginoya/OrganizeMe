
import { WrapperCard } from "./WrapperCard";

export default function SignIn(){
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
                        }}>Sign In</h1>
                        
                        <input type="text" placeholder="Email" style={{
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
                            padding: "5px",
                            boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                            borderRadius:"5px",
                            height:"50px",
                            width:"90px",
                            fontSize:"16px"
                        }}>Sign In</button>
                        <div style={{
                            marginBottom:"20px",
                            fontSize:"16px"
                        }}>Don't have an account? <a href="/signup">Create an account</a> </div>
                    </div>    
                </div>
        </div>
    </div>
}