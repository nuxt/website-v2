#!/bin/bash

STATE=$(echo $1 | tr '[:upper:]' '[:lower:]')
CONTEXT=$2
DESCRIPTION=$3
GITHUB_URL="https://github.com"
GITHUB_API_URL="https://api.github.com"

echo "Updating status to ${STATE} for ${CONTEXT} with description ${DESCRIPTION}."

curl --silent --show-error --fail \
    --trace ./${CONTEXT}.log \
    -X POST "${GITHUB_API_URL}/repos/${GITHUB_REPOSITORY}/statuses/${GITHUB_SHA}" \
    -H "Authorization: token ${GITHUB_TOKEN}" \
    -H "Content-Type: text/json; charset=utf-8" \
    -d @- <<EOF
{
    "state": "${STATE}",
    "context": "${CONTEXT}",
    "description": "${DESCRIPTION}"
}
EOF

sleep 5