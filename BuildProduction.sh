#!/usr/bin/bash
path=/home/frederik/minecraftadmin
cd $path
npm run build
sudo systemctl restart nginx
