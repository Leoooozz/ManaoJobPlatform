# Utilisez une image Node.js comme base
FROM node:20

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le fichier package.json et le fichier package-lock.json (s'ils existent) dans le répertoire de travail
COPY package.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste de l'application dans le répertoire de travail
COPY . .

# Exposez le port sur lequel l'application écoute
EXPOSE 5000

# Démarrez l'application NestJS
CMD ["npm", "run", "dev"]
