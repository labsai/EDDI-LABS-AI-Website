export interface ProvisionRequest {
  userId: string;
  userEmail: string;
  subscriptionId: string;
  plan: 'monthly' | 'yearly';
}

export interface ProvisionResult {
  instanceId: string;
  instanceUrl: string;
}

export async function provisionEddiInstance(
  req: ProvisionRequest
): Promise<ProvisionResult | null> {
  // ┌──────────────────────────────────────────────────────────────────────────┐
  // │  TODO: Implement Google Cloud provisioning                               │
  // │                                                                          │
  // │  Replace this stub with a call to your GCP endpoint, e.g.:              │
  // │                                                                          │
  // │    const endpoint = import.meta.env.GCP_PROVISIONING_ENDPOINT;          │
  // │    const secret   = import.meta.env.GCP_PROVISIONING_SECRET;            │
  // │    const res = await fetch(endpoint, {                                   │
  // │      method: 'POST',                                                     │
  // │      headers: {                                                          │
  // │        'Authorization': `Bearer ${secret}`,                              │
  // │        'Content-Type': 'application/json',                               │
  // │      },                                                                  │
  // │      body: JSON.stringify(req),                                          │
  // │    });                                                                   │
  // │    if (!res.ok) return null;                                             │
  // │    return res.json() as Promise<ProvisionResult>;                        │
  // └──────────────────────────────────────────────────────────────────────────┘

  console.warn('[GCP] provisionEddiInstance stub — not yet implemented', req);
  return null;
}
