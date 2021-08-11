const menu18 = (prefix) => {
	return `
┏━━━━°🎯 ❬ *TERMUX* ❭ 🎯°━━
┃
┣⊱❥ Comandos básicos do Termux que você deve saber
┃    Rodar o Termux o levará diretamente ao ambiente de linha de comando.
┃    A partir daqui, você pode instalar novas ferramentas. 
┃    Termux usa o mesmo instalador de pacote encontrado no Debian, 
┃    Ubuntu e distribuições Linux relacionadas.
┃
┣⊱❥ Ele usa ferramentas de empacotamento avançadas
┃    (mais comumente chamadas de APT) 
┃    Para pesquisar, instalar e remover programas no aplicativo Termux.
┃    Comece a atualizar e atualizar pacotes com estes comandos:
┃
┃    apt update
┃                    ou      apt update && apt upgrade
┃    apt upgrade
┃
┃
┃
┃  A seguir, descubra quais aplicativos estão disponíveis:
┃
┣⊱❥ apt list
┃   Para saber mais sobre um desses pacotes, use
┃
┣⊱❥ apt show [package name]
┃   Isso exibirá: nome, admin, tamanho do arquivo, dependências e outros detalhes úteis.
┃   Para instalar um aplicativo, basta usar:
┃
┣⊱❥ apt install [package name]
┃    Nosso guia especial falará sobre Uso de APT Mais informações sobre esta ferramenta, por exemplo, como atualizar pacotes. Você pode executar um utilitário instalado digitando seu nome no Terminal na linha de comando Termux.
┃
┃
┣⊱❥ Além do APT, a lista de comandos interna do Termux funciona no Android:
┃
┃    Deixa você cp Copiar um arquivo
┃    Vai servir mv Transferindo um arquivo
┃    Listas ls Conteúdo do guia
┃    rm Exclui (remove) os dados
┃    Crio ln Link simbólico (por exemplo, ln / data / data / com.termux / files / home / documents para / sdcard / Documents)
┃    Com essas ferramentas integradas, você pode reduzir a necessidade de um gerenciador de arquivos Android.
┃    Além disso, este aplicativo irá evitar que você tenha que Poderes do Root no seu telefone Para desfrutar deste trabalho.
┃
┗━━━━━━━━━━━━━━━━━━━━
`
}

exports.menu18= menu18