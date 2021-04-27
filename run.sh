mv * /var/lib/jenkins/penpenny
cd /var/lib/jenkins/penpenny
sudo -n cat conf.txt >> /etc/nginx/sites-available/node
sudo ufw allow 5010
npm install
npm install express
pm2 start devops.js
sudo -n systemctl restart nginx


