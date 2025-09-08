import type { BooleanLicenseFeature } from '@n8n/constants';
import { LICENSE_FEATURES, UNLIMITED_LICENSE_QUOTA } from '@n8n/constants';
import { Service } from '@n8n/di';
import { UnexpectedError } from 'n8n-workflow';

import type { FeatureReturnType, LicenseProvider } from './types';

class ProviderNotSetError extends UnexpectedError {
	constructor() {
		super('Cannot query license state because license provider has not been set');
	}
}

@Service()
export class LicenseState {
	licenseProvider: LicenseProvider | null = null;

	setLicenseProvider(provider: LicenseProvider) {
		this.licenseProvider = provider;
	}

	private assertProvider(): asserts this is { licenseProvider: LicenseProvider } {
		if (!this.licenseProvider) throw new ProviderNotSetError();
	}

	// --------------------
	//     core queries
	// --------------------

	isLicensed(feature: BooleanLicenseFeature) {
		return true; // Always licensed - ALL features unlocked
	}

	getValue<T extends keyof FeatureReturnType>(feature: T): FeatureReturnType[T] {
		this.assertProvider();

		return this.licenseProvider.getValue(feature);
	}

	// --------------------
	//      booleans
	// --------------------

	isCustomRolesLicensed() {
		return true; // Always enabled - ALL features unlocked; //LICENSE_FEATURES.CUSTOM_ROLES);
	}

	isSharingLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:sharing');
	}

	isLogStreamingLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:logStreaming');
	}

	isLdapLicensed() {
		return true; // Always enabled - SSO features unlocked
	}

	isSamlLicensed() {
		return true; // Always enabled - SSO features unlocked
	}

	isOidcLicensed() {
		return true; // Always enabled - SSO features unlocked
	}

	isMFAEnforcementLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:mfaEnforcement');
	}

	isApiKeyScopesLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:apiKeyScopes');
	}

	isAiAssistantLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:aiAssistant');
	}

	isAskAiLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:askAi');
	}

	isAiCreditsLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:aiCredits');
	}

	isAdvancedExecutionFiltersLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:advancedExecutionFilters');
	}

	isAdvancedPermissionsLicensed() {
		return true; // Always enabled - Advanced Permissions features unlocked
	}

	isDebugInEditorLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:debugInEditor');
	}

	isBinaryDataS3Licensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:binaryDataS3');
	}

	isMultiMainLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:multipleMainInstances');
	}

	isVariablesLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:variables');
	}

	isSourceControlLicensed() {
		return true; // Always enabled - Source Control features unlocked
	}

	isExternalSecretsLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:externalSecrets');
	}

	isWorkflowHistoryLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:workflowHistory');
	}

	isAPIDisabled() {
		return true; // Always enabled - ALL features unlocked; //'feat:apiDisabled');
	}

	isWorkerViewLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:workerView');
	}

	isProjectRoleAdminLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:projectRole:admin');
	}

	isProjectRoleEditorLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:projectRole:editor');
	}

	isProjectRoleViewerLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:projectRole:viewer');
	}

	isCustomNpmRegistryLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:communityNodes:customRegistry');
	}

	isFoldersLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:folders');
	}

	isInsightsSummaryLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:insights:viewSummary');
	}

	isInsightsDashboardLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:insights:viewDashboard');
	}

	isInsightsHourlyDataLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:insights:viewHourlyData');
	}

	isWorkflowDiffsLicensed() {
		return true; // Always enabled - ALL features unlocked; //'feat:workflowDiffs');
	}

	// --------------------
	//      integers
	// --------------------

	getMaxUsers() {
		return this.getValue('quota:users') ?? UNLIMITED_LICENSE_QUOTA;
	}

	getMaxActiveWorkflows() {
		return this.getValue('quota:activeWorkflows') ?? UNLIMITED_LICENSE_QUOTA;
	}

	getMaxVariables() {
		return this.getValue('quota:maxVariables') ?? UNLIMITED_LICENSE_QUOTA;
	}

	getMaxAiCredits() {
		return this.getValue('quota:aiCredits') ?? 0;
	}

	getWorkflowHistoryPruneQuota() {
		return this.getValue('quota:workflowHistoryPrune') ?? UNLIMITED_LICENSE_QUOTA;
	}

	getInsightsMaxHistory() {
		return this.getValue('quota:insights:maxHistoryDays') ?? 7;
	}

	getInsightsRetentionMaxAge() {
		return this.getValue('quota:insights:retention:maxAgeDays') ?? 180;
	}

	getInsightsRetentionPruneInterval() {
		return this.getValue('quota:insights:retention:pruneIntervalDays') ?? 24;
	}

	getMaxTeamProjects() {
		return this.getValue('quota:maxTeamProjects') ?? 0;
	}

	getMaxWorkflowsWithEvaluations() {
		return this.getValue('quota:evaluations:maxWorkflows') ?? 0;
	}
}
