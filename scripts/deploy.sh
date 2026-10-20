#!/usr/bin/env bash
# Build the static site and publish it to S3 + CloudFront.
# Usage: pnpm run deploy:aws
set -euo pipefail

BUCKET="biodanzawithcaroline-site"
DISTRIBUTION_ID="EDVQMXQGPDOO5"
LONG_CACHE="public, max-age=31536000, immutable"
NO_CACHE="public, max-age=0, must-revalidate"

cd "$(dirname "$0")/.."

pnpm build

# The AWS CLI on Windows doesn't know these MIME types, so upload them explicitly
EXPLICIT=(--exclude "*.webp" --exclude "*.woff2" --exclude "*.svg")

# Hashed build assets never change, so cache them for a year
aws s3 sync out/_next/static "s3://$BUCKET/_next/static" --delete \
  "${EXPLICIT[@]}" --cache-control "$LONG_CACHE"
aws s3 cp out/_next/static "s3://$BUCKET/_next/static" --recursive \
  --exclude "*" --include "*.woff2" --content-type font/woff2 --cache-control "$LONG_CACHE"
aws s3 cp out/_next/static "s3://$BUCKET/_next/static" --recursive \
  --exclude "*" --include "*.svg" --content-type image/svg+xml --cache-control "$LONG_CACHE"

# Everything else (HTML, RSC payloads, images) is revalidated on each visit
aws s3 sync out "s3://$BUCKET" --delete \
  --exclude "_next/static/*" "${EXPLICIT[@]}" --cache-control "$NO_CACHE"
aws s3 cp out "s3://$BUCKET" --recursive \
  --exclude "*" --include "*.webp" --exclude "_next/static/*" \
  --content-type image/webp --cache-control "$NO_CACHE"
aws s3 cp out "s3://$BUCKET" --recursive \
  --exclude "*" --include "*.svg" --exclude "_next/static/*" \
  --content-type image/svg+xml --cache-control "$NO_CACHE"

aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query "Invalidation.Id" --output text

echo "Deployed to https://biodanzawithcaroline.com"
