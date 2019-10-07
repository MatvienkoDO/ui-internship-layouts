#!/bin/bash

sass --no-source-map private/styles/main.sass public/styles.css

sass --no-source-map --watch private/styles/main.sass public/styles.css
