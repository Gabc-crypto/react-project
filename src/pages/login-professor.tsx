export const LoginProfessor = () => {
    return (
        <>
            <main className="bg-slate-200 h-screen p-20">
                <div className="layout-fundo p-5 bg-white flex justify-center items-center">
                    <div className="primeira-coluna bg-cyan-950	size-1/2">
                        <h2>Bem-vindo ao sistema</h2>
                        <p>Como professor, você deve informar o seu CPF e senha para efetuar o login</p>
                        <p>Caso não tenho um login, clique em "Cadastrar-se"</p>
                        <button>Cadastrar-se</button>
                    </div>
                    <div className="segunda-coluna">
                        <form>
                            <label htmlFor="">
                                CPF:    
                                <input type="number" name="cpf" id="cpf" />
                                <br />
                                Senha:  
                                <input type="password" name="senha" id="senha" />
                            </label>
                            <br />
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};
export default  LoginProfessor;