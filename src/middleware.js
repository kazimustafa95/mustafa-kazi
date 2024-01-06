

import  {NextResponse}  from 'next/server'
 
export default function middleware(request ){
  
    const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup'

  const token = request.cookies.get('token')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/projects', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
    
}


 export const config = {
  matcher: [

    "/",
    "/login",
    "/projects"

  ]
}