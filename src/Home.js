const Home = () => {
    const handleClick=( )=>{
        console.log('hello ');
    }
    
    const handleClickag=(name)=>{
        console.log('hello'+name)
    }    
    
    return ( 
        <div className="home">
            <h2>
                Homepage
            </h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={ ()=>  handleClickag('mario') }>click again</button>
        </div>
     );
}
 
export default Home;