export const connectorStatuses = [
  'ready',
  'missing_credentials',
  'license_required',
  'not_authorized',
  'unsupported_identifier',
  'rate_limited',
  'quota_exceeded',
  'temporarily_unavailable',
  'provider_error',
  'success',
  'no_findings',
] as const

export type ConnectorStatus = (typeof connectorStatuses)[number]

export const correlationClassifications = [
  'confirmed',
  'high_confidence',
  'possible',
  'conflicting',
  'rejected',
] as const

export type CorrelationClassification = (typeof correlationClassifications)[number]
