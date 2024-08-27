import { lazy } from 'react';

const mapComponentToPath = {
  '/add-client': lazy(() => import('../pages/ClientCreating')),
  '/add-service-provider': lazy(() => import('../pages/ServiceProviderCreating')),
  '/clients': lazy(() => import('../pages/ClientManagement')),
}

export { mapComponentToPath }