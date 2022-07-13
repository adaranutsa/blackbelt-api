FROM public.ecr.aws/docker/library/node:alpine
WORKDIR /usr/local/app

COPY . .

RUN npm install --production

CMD ["npm", "start"]