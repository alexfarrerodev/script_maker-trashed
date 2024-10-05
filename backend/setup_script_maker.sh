#!/bin/bash

echo "Reloading venv..."
rm -rf backend/venv-env



python3 -m venv backend/venv-env
source backend/venv-env/bin/activate

echo "Installing requirements..."
pip install -r backend/requirements.txt



echo "venv installed succesfully"