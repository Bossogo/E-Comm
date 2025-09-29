import { products } from '@/data/products.json';
import { NextResponse } from 'next/server';

export async function GET(req){
    return NextResponse.json(products);
}