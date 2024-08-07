function Menu(){
    let baseName = '/react-course'
 return (
    <div>
        <a href="/">Home</a>&nbsp;&nbsp;
        <a href={baseName + "/sobre"}>Sobre</a>&nbsp;&nbsp;
        <a href={baseName + "/contato"}>Contato</a>
    </div>
 )   
}

export default Menu