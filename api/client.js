import sanityClient from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

export default sanityClient({
  projectId: '90jdc705',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2022-04-19',
  token: process.env.SANITY_API_TOKEN,
});
