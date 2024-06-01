const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {

  ADD_PRODUCT_API: BASE_URL + "/add",
LIST_PRODUCT_API:BASE_URL+  "/list",
DELETE_PRODUCT_API:BASE_URL+ "/remove"
}
