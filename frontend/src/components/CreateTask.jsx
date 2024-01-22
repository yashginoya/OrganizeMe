import { WrapperCard } from "./WrapperCard";

export default function CreateTask(){
    return <div>
        <WrapperCard>
            <div style={{
                        display:"flex", 
                        flexDirection:"column", 
                        width:"100%", 
                        marginRight:"10px"}}>
                <input type="text" placeholder="Enter Title" style={{
                    marginBottom:"10px",
                    padding:"10px",
                    height: "20px",
                    boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                    border: "2px solid #ddd",
                    borderRadius:"5px",
                    fontSize:"16px"
                }}/>
                <input type="text" placeholder="Enter Description" style={{
                    padding:"10px",
                    height:"20px",
                    boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                    border: "2px solid #ddd",
                    borderRadius:"5px",
                    fontSize:"16px"
                }}/>
            </div>
            <button style={{
                width:"100px",
                fontSize: "20px",
                boxShadow:"0 4px 8px rgba(0, 0, 0, 0.01)",
                borderRadius:"5px"
            }}>Add</button>
        </WrapperCard>  
    </div>
}