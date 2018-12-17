describe('AutosaveInfoModalsService', function() {
    beforeEach(module('oppia'));

    describe('test', function() {
        var service = null;

        beforeEach(inject(function($injector) {
            service = $injector.get('AutosaveInfoModalsService');
        }));

        it('isModalOpen should return values of boolean', function() {
            expect(typeof(service.isModalOpen())).toEqual('boolean')
        });

        it('showNonStrictValidationFailModal should open modal', function() {
            service.showNonStrictValidationFailModal();
            expect(service.isModalOpen()).toEqual(true);
        });

        it('showVersionMismatchModal should open modal', function() {
            service.showVersionMismatchModal();
            expect(service.isModalOpen()).toEqual(true);
        });

        it('showLostChangesModal should open modal', function() {
            service.showLostChangesModal();
            expect(service.isModalOpen()).toEqual(true);
        });
    });
});
