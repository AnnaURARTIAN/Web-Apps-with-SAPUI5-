sap.ui.define([], function() {
	"use strict";

	return {
		statusText: function (rReorder) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			var sResult = "";

			if (rReorder === 0) {
				sResult = oResourceBundle.getText("formatterMailDelivery");
			} else if (rReorder === 5) {
				sResult = oResourceBundle.getText("formatterParcelDelivery");
			} else {
				sResult = oResourceBundle.getText("formatterCarrierDelivery");
			}

			return sResult;
		}

	}
});
