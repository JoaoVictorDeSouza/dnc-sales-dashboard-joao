import Cookies from 'js-cookie'

/**
 * confirm É uma requisição pro usuario fazer a confirmação
 */
export function logout() {
  if (confirm('Deseja seguir com o logout?') === true) {
    Cookies.remove('Authorization')
    window.location.href = '/'
  }
}
