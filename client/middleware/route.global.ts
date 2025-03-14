import { ROUTES, routePermission } from '~/config/permission.route'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (routePermission.visitor.routes.includes(to.path) || routePermission.visitor.startWith.some((p) => to.path.startsWith(p))) {
    return
  }
  return //navigateTo(ROUTES.INDEX.path)
})
