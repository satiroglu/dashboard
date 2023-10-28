import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import {  } from '@/app/lib/data';
import fetchLatestInvoices from "../../app/lib/data";
 
export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();
 
  return (
    latestInvoices
  );
}