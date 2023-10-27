// https://vanilla-extract.style/documentation/integrations/next/
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withVanillaExtract(nextConfig);
