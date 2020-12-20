FROM node:8

COPY 4IT572_ZS_2020_circleci .

RUN npm install \
	&& npm run build

EXPOSE 3000

ENTRYPOINT npm run start
