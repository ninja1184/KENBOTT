const menu17 = (prefix) => {
	return `
╔ ═ ═ ═ 〘 JOGO DA VELHA 〙
║
╟➟ Para iniciar digite:
║    └「 ${prefix}ttt [ DIFICULDADE ] 」
║
╟➟ Apenas uma pessoa por vez
║
╚ ═ ═ ═ ═ ═ ═ ═ ═ ═

╔ ═ ═ 〘 DIFICULDADE 〙
║
╟➟  easy : totalmente aleatório
║      
╟➟  normal : 66% de empate
║             44% de ganho
║           
╟➟  hard : 90% de empate
║           10% de ganho
║
╟➟  impossible : 100% empate
╚ ═ ═ ═ ═ ═ ═ ═ ═ ═


╔ ═ ═ 〘 PARTIDA 〙
║
╟➟ Uma nova partida só poderá
║   ser iniciada após um intervalo
║   de 4 minutos apartir do início
║   da partida anterior
║
╟➟ A partida terminará 
║   automaticamente após 4 minutos
╚ ═ ═ ═ ═ ═ ═ ═ ═ ═


╔ ═ ═ 〘 COMANDOS 〙
║
╟➟ Para marcar digite:
║    └「 ${prefix}coord [ COORDENADA ] 」
║
║
╟➟ Exemplo:
║	 └「   ${prefix}coord a1 
║        -------------------------------
║	       🌀1️⃣2️⃣3️⃣
║	       🅰️❌🔲🔲
║	       🅱️🔲🔲🔲
║	       ©️🔲🔲🔲  」
║
╚ ═ ═ ═ ═ ═ ═ ═ ═ ═


╔ ═ ═ 〘 SEUS STATUS 〙
║
╟➟  Para ver seu status digite:
║        └「 ${prefix}tttme 」
║          
╚ ═ ═ ═ ═ ═ ═ ═ ═ ═


╔ ═ ═ 〘 RECOMPENSAS 〙
║
╟➟ EASY
║    ├ Vitória : +「 25 / 50 」
║    └ Derrota : -「 200 / 200 」
║
╟➟ NORMAL
║    ├ Vitória : +「 75 / 150 」
║    └ Derrota : -「 75 / 150 」
║
╟➟ HARD
║    ├ Vitória : +「 200 / 400 」
║    └ Derrota : -「 25 / 50 」
║
╟➟ IMPOSSIBLE
║    ├ Vitória : +「 1000 / 2000 」
║    └ Derrota : -「 0 / 0 」
║
╟➟ EMPATE
║    └「 0 / 0 」
║
╟➟ PARTIDA NÃO FINALIZADA
║         └ -「 75 / 150 」
║
╚ ═ ═ ═ ═ ═ ═ ═ ═ ═
`
}

exports.menu17= menu17