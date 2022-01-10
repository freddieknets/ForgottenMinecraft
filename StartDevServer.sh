#!/usr/bin/bash
path=/home/frederik/minecraftadmin
cd $path
pm2 start --name minecraftadmin -l ${path}/Logs/fulloutput.log -o ${path}/Logs/output.log -e ${path}/Logs/errors.log npm -- run dev
pm2 save
read  -n 1 -p "Copy-paste the following output (hit any key to continue):"
pm2 startup systemd
