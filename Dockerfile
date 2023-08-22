FROM node:16

WORKDIR /var/app
COPY . .

ENTRYPOINT [ "./entrypoint.sh" ]
