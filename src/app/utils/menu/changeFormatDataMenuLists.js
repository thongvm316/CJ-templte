import menuData from "./menuData"

const changeKeyData = (data) =>
  data.map((item) => ({
    id: item.menuId,
    title: item.menuNm,
    translate: item.menuNm,
    type: "collapse",
    icon: "",
    children: [
      ...item.subMenu.map((el) => {
        let key
        if (el.subMenu) {
          key = el.subMenu.map((mn) => ({
            id: mn.menuId,
            title: mn.menuNm,
            type: "item",
            url: `/dummy/url/${mn.menuId}`,
          }))
        }

        return {
          id: el.menuId,
          title: el.menuNm,
          type: key ? "collapse" : "item",
          [key ? "children" : "url"]: key || `/dummy/url/${el.menuId}`,
        }
      }),
    ],
  }))[0]

const getMenuListsByMenuId = (data, menuId) => data.filter((item) => item.menuId === menuId)

export const changeFormatDataMenuLists = (menuLists) => {
  const listsMenuId = menuLists.map((item) => item.menuId)

  const appMenus = []
  listsMenuId.forEach((menuId) => {
    if (menuId === "PIMS_PRODUCT") {
      const pimsProduct = menuLists.filter((item) => item.menuId === menuId)[0].subMenu
      appMenus.push(changeKeyData(getMenuListsByMenuId(pimsProduct, "PIMS_PRD")))
      appMenus.push(changeKeyData(getMenuListsByMenuId(pimsProduct, "PIMS_ATTR")))
    } else {
      appMenus.push(changeKeyData(getMenuListsByMenuId(menuLists, menuId)))
    }
  })

  const navigate = []
  const pimsApp = appMenus.filter((item) => item.id.includes("PIMS_")).map((item) => item.id)

  // structure data of pims is different with other, use this instead
  if (pimsApp.length > 0) {
    navigate.push({
      id: "pims",
      title: "PIMS",
      type: "group",
      children: appMenus.filter((item) => item.id.includes("PIMS_")),
    })
  }

  appMenus
    .map((item) => item.id)
    .forEach((el) => {
      if (!pimsApp.includes(el)) {
        navigate.push({
          id: el.toLowerCase(),
          title: el.toUpperCase(),
          type: "group",
          children: appMenus.filter((item) => item.id.includes(el.toUpperCase()))[0].children,
        })
      }
    })

  return navigate
}

export const filterMenuList = (menuLists) => {
  const allMenuIds = menuLists.map((item) => item.menuId)
  const pimsMenu = allMenuIds.filter((item) => item.includes("PIMS"))
  const appMenus = allMenuIds.filter((item) => !item.includes("PIMS"))

  if (pimsMenu.length > 0) appMenus.unshift(pimsMenu[0])

  const menusForUi = []
  appMenus.forEach((item) => {
    const condition = item === "PIMS_PRODUCT" ? "PIMS" : item
    menusForUi.push(menuData.convertedData.filter((el) => el.title === condition)[0])
  })

  return menusForUi
}
