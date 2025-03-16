export const ROUTES = {
  INDEX: {
    path: '/',
  },
  INDEX_LOGIN: {
    path: '/login',
  },
  INDEX_ABOUT: {
    path: '/about',
  },
  INDEX_EXPLORE: {
    path: '/explore',
  },
  PROFILE_CITIZEN: {
    path: '/profile/citizen',
    startWith: true,
  },
  PROFILE_GUARDIAN: {
    path: '/profile/guardian',
    startWith: true,
  },
}

function getPermissionRoutesArray(permission: Array<{ path: string; startWith?: boolean }>): { routes: Array<string>; startWith: Array<string> } {
  const resultArray: { routes: Array<string>; startWith: Array<string> } = {
    routes: [],
    startWith: [],
  }
  permission.forEach((item) => {
    resultArray.routes.push(item.path)
    if (item.startWith) {
      resultArray.startWith.push(item.path)
    }
  })
  return resultArray
}

export const routePermission = {
  visitor: getPermissionRoutesArray([
    ROUTES.INDEX,
    ROUTES.INDEX_ABOUT,
    ROUTES.INDEX_LOGIN,
    ROUTES.INDEX_EXPLORE,
    ROUTES.PROFILE_CITIZEN,
    ROUTES.PROFILE_GUARDIAN,
  ]),
}
