const Header=(props)=>{
    return(
        <header>
            <h1>ApiUsers</h1>
            <button onClick={props.getDetails}>Get Details</button>
        </header>
    )
}

export default Header;