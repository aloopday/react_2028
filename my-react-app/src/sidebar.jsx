function Sidebar(){
    return(
        <aside style={{
            width:'200px',
            background:'#f8f9fa',
            padding:'20px',
            borderRadius:'8px'
        }}>
            <h2>Categories</h2>
            <ul style={{
                listStyle:'none',
                padding:0,
                margin:0
            }}>
                <li style={{marginBottom:'10px'}}>
                    <a href="#" style={{color:'#333',textDecoration:'none'}} >Breed Information</a>
                </li>
                <li style={{marginBottom:'10px'}}>
                    <a href="#" style={{color:'#333',textDecoration:'none'}} >Dogs circle</a>
                </li>
                <li style={{marginBottom:'10px'}}>
                    <a href="#" style={{color:'#333',textDecoration:'none'}} >Dogs Park</a>
                </li>
                <li style={{marginBottom:'10px'}}>
                    <a href="#" style={{color:'#333',textDecoration:'none'}} >Dogs friend</a>
                </li>
            </ul>

        </aside>
    );
}


export default Sidebar;