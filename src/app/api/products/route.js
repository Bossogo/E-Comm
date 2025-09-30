import data from '@/data/products.json';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json(
            { success: false, error: 'Failed to load products' },
            { status: 500 }
        );
    }
}