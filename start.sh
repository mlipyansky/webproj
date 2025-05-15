#! /bin/bash

if command -v bun &> /dev/null; then
    PM="bun"
elif command -v pnpm &> /dev/null; then
    PM="pnpm"
elif command -v yarn &> /dev/null; then
    PM="yarn"
else
    PM="npm"
fi

case "$1" in
    prod)
        cd client
        $PM run build
        ;;
    *)
        cd client
        $PM start
        ;;
esac
