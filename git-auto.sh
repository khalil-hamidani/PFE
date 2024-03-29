#!/usr/bin/env bash

## Usage:
##  git-auto -p ;; auto commit and push
##  git-auto -b main -p ;; set git branch
##  git-auto -o -p;; execute once

usage="usage: $0
    [-d <git directory>]
    [-i <interval seconds>]
    [-p <push to remote server>]
    [-r rebase before pushing changes]
    [-s git remote server]
    [-b git branch]
    [-o <execute once]"

push_to_server=0
server=origin
interval=600
once=0

OPTIND=1
while getopts d:i:b:s:pro flag; do
  case "${flag}" in
  d) directory=${OPTARG} ;;
  p) push_to_server=1 ;;
  r) rebase=1 ;;
  o) once=1 ;;
  s) server=${OPTARG} ;;
  b) branch=${OPTARG} ;;
  i) interval=${OPTARG} ;;
  *)
    echo "ERROR: ${usage}" >&2
    exit 1
    ;;
  esac
done
shift $((OPTIND - 1))

if  [[ "${directory}" ]]; then
  cd "${directory}" || exit 1
fi

if [[ -z "${branch}" ]]; then
  branch=$(git rev-parse --abbrev-ref HEAD)
fi

get-commit-message() {
    local commit_message=$(git diff --name-only HEAD~1..HEAD)
    commit_message=$(echo "${commit_message}" | sed -e 's/^.*\///')
    echo "${commit_message}"
}

auto-commit-and-push() {
  if ! [[ $(git status) =~ "working tree clean" ]]; then
    git add .
    git commit -m "$(get-commit-message)"

    if [[ 1 == ${rebase} ]]; then
      git pull --rebase
    fi

    if [[ 1 == "${push_to_server}" ]]; then
      git push "${server}" "${branch}"
    fi
  fi
}

date

if [[ 1 == "${once}" ]]; then
  auto-commit-and-push
else
  while true; do
    auto-commit-and-push
    sleep "${interval}"
  done
fi
