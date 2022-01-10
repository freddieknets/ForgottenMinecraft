#!/usr/bin/bash
path=/srv/minecraftadmin
cd $path
pm2 start --name minecraftadmin -l ${path}/logs/fulloutput.log -o ${path}/logs/output.log -e ${path}/logs/errors.log npm -- run dev
pm2 save
read  -n 1 -p "Copy-paste the following output (hit any key to continue):"
pm2 startup systemd
