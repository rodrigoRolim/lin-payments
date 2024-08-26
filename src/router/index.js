import { lazy } from 'react';

const mapComponentToPath = {
  '/criar-cliente': lazy(() => import('../pages/ClientCreating')),
}

export { mapComponentToPath }