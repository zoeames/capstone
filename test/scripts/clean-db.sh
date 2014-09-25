#!/bin/bash

if [ -z "$1" ] ; then
    echo "Enter a database name"
      exit 1
    fi

    mongoimport --jsonArray --drop --db $1 --collection users --file ../../db/users.json
    mongoimport --jsonArray --drop --db $1 --collection speed --file ../../db/speed.json
    mongoimport --jsonArray --drop --db $1 --collection captains --file ../../db/captains.json
    mongoimport --jsonArray --drop --db $1 --collection ships --file ../../db/ships.json
