#!/bin/bash

sass --no-source-map private/styles/main.scss public/styles.css

sass --no-source-map --watch private/styles/main.scss public/styles.css
