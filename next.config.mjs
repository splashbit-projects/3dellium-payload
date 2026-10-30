import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // googleapis breaks Next webpack bundling ("reading 'prototype'") during
  // "Collecting page data" for /api/[...slug]
  serverExternalPackages: ['googleapis', 'google-auth-library', 'sharp'],
}

export default withPayload(nextConfig)
