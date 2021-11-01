class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <Navbar />
                    <Container>
                        <Flex tamanho="1"/>
                        <Perfil 
                            nome="Marta da Silva Souza"
                            resumo="Devops | Analista de Sistema | Analista de ERP/CRM | Ciências da Computação | Startup | Pessoa Jurídica"
                        />
                        <Descricao 
                            titulo="Olá, Sou a Marta, benvindo ao meu portifolio"
                            texto="Sou paulistana, venho de uma família pequena onde sou a filha do meio, fui criada por uma mulher batalhadora que criou seus três filhos sozinha, com muito esforço e determinação. Possuo Graduação em Matemática, Bacharel em Ciências da Computação e Pós Graduada em Banco de Dados.

                            Profissional com mais de 18 anos de experiência no segmento de tecnologia, implantação de sistemas, atuando com ERP Apolo. Conhecimento profundo nos processos do sistema ERP nas seguintes áreas: Financeiro, Compras, Vendas, Estoque, Logística e Fiscal. Suporte e Treinamento ao usuário. Conhecimento no desenvolvimento em consultas SQL Server, alterações de procedures e triggers conforme necessidade, restauração de base de dados e Backups. E desenvolvimentos de relatórios.
                            
                            Atualmente trabalho como prestadora de serviço em uma Startup, onde estou aprendendo a desenvolver aplicativo para mobile, e adquirindo conhecimentos em programação das seguintes linguagens e bibliotecas: Java Script, Python, JQuery, CSS, Less e Cordova. "
                        >
                            <Habilidade porcentagem="80" tamanho="md" icone="./img/HTML5.png"/>
                            <Habilidade porcentagem="30" tamanho="md" icone="./img/CSS3.png"/>                            
                            <Habilidade porcentagem="30" tamanho="md" icone="./img/JavaScript.png"/>
                            <Habilidade porcentagem="10" tamanho="md" icone="./img/React.png"/>
                        </Descricao> 
                        <Flex tamanho ="1" />   
                    </Container>
                    <Footer nome="Marta">
                        <Icone link={"https://github.com/MartaAngelSouza"} tamanho="sm" icone="./icons/github-square-brands.svg" />
                        <Icone link={"https://www.linkedin.com/in/martasilvasouza/"} tamanho="sm" icone="./icons/linkedin-brands.svg" />
                    </Footer>
                </div>
            </React.Fragment>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)