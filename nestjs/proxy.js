import { NextResponse } from 'next/server'
 
export function proxy(request) {
    const user = (request.cookies.get('user')?.value === 'true');
    const isAuthRoute = request.nextUrl.pathname.startsWith('/auth')

    if(!user && !isAuthRoute){
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    if(user && isAuthRoute){
        return NextResponse.redirect(new URL('/', request.url))
    }
}
 
 
export const config = {
  matcher: ['/', '/auth/:path*'],
}