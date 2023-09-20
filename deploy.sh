#!/bin/bash

ng build --output-path docs --base-href /angular-material-dashboard/
cp docs/index.html docs/404.html