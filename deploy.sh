#!/usr/bin/env bash

# Exit on error
set -e
set -o pipefail
set -x

ROOT_PATH="/ext/aarhof.eu"
NUM_RELEASES=2
CURRENT_TIME=$(date "+%Y%m%d_%H%M%S")
RELEASE_PATH="$ROOT_PATH/releases/$CURRENT_TIME"
ACTIVE_PATH="$ROOT_PATH/current"
SHARED_PATH="$ROOT_PATH/shared"
SSH_COMMAND="root@home.aarhof.eu"
SHARED_FILES=(
  ".env"
)

npm run lint
npm run build
ssh $SSH_COMMAND "if [ ! -d $RELEASE_PATH ]; then mkdir -p $RELEASE_PATH; fi"
ssh $SSH_COMMAND "if [ ! -d $SHARED_PATH ]; then mkdir -p $SHARED_PATH; fi"

for FILE in "${SHARED_FILES[@]}"; do
  ssh $SSH_COMMAND "if [ ! -f $SHARED_PATH/$FILE ]; then touch $SHARED_PATH/$FILE; fi"
  ssh $SSH_COMMAND "ln -s $SHARED_PATH/$FILE $RELEASE_PATH/$FILE"
done

rsync -az .output $SSH_COMMAND:$RELEASE_PATH
scp ./ecosystem.config.cjs $SSH_COMMAND:$RELEASE_PATH

# Set active release
ssh $SSH_COMMAND "if [ -d $ACTIVE_PATH ]; then rm $ACTIVE_PATH; fi"
ssh $SSH_COMMAND "ln -s $RELEASE_PATH $ACTIVE_PATH"

PM2BIN=$(ssh $SSH_COMMAND '( which pm2 )')
ssh $SSH_COMMAND "cd $ACTIVE_PATH && $PM2BIN stop ecosystem.config.cjs"
ssh $SSH_COMMAND "cd $ACTIVE_PATH && $PM2BIN delete ecosystem.config.cjs"
ssh $SSH_COMMAND "cd $ACTIVE_PATH && $PM2BIN start ecosystem.config.cjs"

# Remove old releases
ssh $SSH_COMMAND "ls -t $RELEASE_PATH/.. | tail -n +$((NUM_RELEASES + 1)) | xargs -I {} rm -rf $RELEASE_PATH/../{}"