function Title({name, paragraph}){
    const soma = 10 * 10;
    const img = "https://blog.ebaconline.com.br/blog/wp-content/uploads/2022/12/anin9lr8mtvnbjliwe4cq-scaled-e1671320301455.jpeg"
    return (
        <div>
            <h1>Olá mundo papai, os guri vieram novamente!</h1>
            <p>{paragraph ? 'Não adianta os guri são ruim pras criança' : 'Sem parágrafo, os guri não vieram'}</p>
            <small>O nome dos guri é: {name ? name : 'Anônimo'}</small>
            <br />
            <small>A soma dos valores é: {soma}</small> 
            <br />
            <img src={img} width={150} alt="Imagem de um código escrito em React" />
        </div>
    )
}

export default Title