import { useState } from "preact/hooks";

function Title({name, paragraph, color}){
    const [text, setText] = useState("Título Inicial");
    const [inputText, setInputText] = useState("");
    const soma = 10 * 10;
    const img = "https://blog.ebaconline.com.br/blog/wp-content/uploads/2022/12/anin9lr8mtvnbjliwe4cq-scaled-e1671320301455.jpeg"
    
    function click(){
        setText(inputText);
    }
    
    return (
        <div>
            <h1 style={{ color: color }}>{text}</h1>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={click}>MUDAR</button>
            {paragraph ?
                <p>Esse é o que tem o parágrafo</p>
                :
                ""
            }
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