#!bin/bash
pkg update -y
pkg upgrade -y

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"Você tem certeza que deseja atualizar o Ken bot? [s/n]"
read -p "> " opts

if [ $opts = "s" ]; then

clear
echo $YELLOW"Atualizando o KEN BOT, aguarde..."
git clone https://github.com/ninja1184/KENBOTT
cd KENBOTT
cp -r * ..
cd ..
rm -rf KENBOTT
npm i

clear
echo $GREEN"KEN BOT atualizado com sucesso!!"

elif [ $opts = "n"]; then
    clear
    echo $RED"Atualização do KEN BOT foi cancelada"
    exit
fi
##CREDITOS BRIZAS BOT ORION E OBRIGADO AO IAN POR PERMITIR O USO