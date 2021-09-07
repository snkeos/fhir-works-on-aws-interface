export interface MultiTenancyOptions {
    enabled: boolean;

    /**
     * For url based multitenancy it allows to specify a sub url part, like "tenant", "hospital" etc. or  Empty
     * E.g.
     *  - Named url part: <fhir serverbase url>/<tenantUrlPart>/{tenantId}/resourceType/{resourceId}
     *  - Empty : <fhir serverbase url>/{tenantId}/resourceType/{resourceId}
     */
    tenantUrlPart?: string;
    /**
     * The claim that has an array of tenant ids the logged in user has access to.
     * e.g. cognito user groups
     */
    tenantAccessTokenClaim?: string;
    /**
     * Due to cognito access token customisation limitation,
     * the prefix helps to identify the tenant specific values in a claim.
     * This allows to include access control on tenants next to user groups, like practitioners....
     */
    tenantAccessTokenClaimValuePrefix?: string;
    /**
     * This optional option specifies a scope, which allows access to all tenants.
     */
    tenantAccessTokenAllTenantsScope?: string;
}
