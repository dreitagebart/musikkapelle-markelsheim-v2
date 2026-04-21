import { NextRequest, NextResponse } from 'next/server'

export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname === '/club') {
    const url = req.nextUrl.clone()
    url.pathname = '/club/about'
    return NextResponse.redirect(url)
  }

  if (req.nextUrl.pathname === '/markelsheim') {
    const url = req.nextUrl.clone()
    url.pathname = '/markelsheim/region'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/club/:path*', '/markelsheim/:path*']
}
