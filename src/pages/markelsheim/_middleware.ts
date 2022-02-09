import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/markelsheim') {
    const url = req.nextUrl.clone()
    url.pathname = '/markelsheim/region'

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
