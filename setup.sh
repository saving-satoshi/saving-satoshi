#!/bin/bash

# Install NVM
if ! command -v nvm &> /dev/null
then
    echo "NVM not found, installing..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
fi

# Install the correct Node.js version
echo "Installing correct Node.js version..."
source ~/.nvm/nvm.sh
nvm install
