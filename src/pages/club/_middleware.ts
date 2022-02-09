import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/club') {
    const url = req.nextUrl.clone()
    url.pathname = '/club/about'

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
