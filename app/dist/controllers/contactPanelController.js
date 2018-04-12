/// <reference path="../_all.ts"/>
var ContactManagerApp;
(function (ContactManagerApp) {
    var contactPanelController = /** @class */ (function () {
        function contactPanelController(userService, $mdBottomSheet) {
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: 'Phone', icon: 'phone' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Google+', icon: 'google_plus' },
                { name: 'Hangout', icon: 'hangouts' }
            ];
            this.user = userService.selectedUser;
        }
        contactPanelController.prototype.submitContact = function (action) {
            this.$mdBottomSheet.hide(action);
        };
        contactPanelController.$inject = ['userService', '$mdBottomSheet'];
        return contactPanelController;
    }());
    ContactManagerApp.contactPanelController = contactPanelController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=contactPanelController.js.map