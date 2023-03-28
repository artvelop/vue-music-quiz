export function asyncView(viewName: any){
    return () => import(`../views/${viewName}`)
}

export function asyncComponent(viewName: any){
    return () => import(`../components/${viewName}`)
}