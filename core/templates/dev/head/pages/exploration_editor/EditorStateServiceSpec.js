describe('StateEditorService', function() {
    beforeEach(module('oppia'));

    describe('test', function() {
        var service = null;
        var solutionValidityService = null;

        beforeEach(inject(function($injector) {
            service = $injector.get('StateEditorService');
            solutionValidityService = $injector.get('SolutionValidityService');
        }));

        it('setActiveStateName should correctly set state', function() {
            service.setActiveStateName('');
            expect(service.getActiveStateName()).toEqual(null);
            service.setActiveStateName(null);
            expect(service.getActiveStateName()).toEqual(null);
            service.setActiveStateName('test');
            expect(service.getActiveStateName()).toEqual('test');
        });

        it('setInteraction should set correct interaction', function() {
            service.setInteraction('test');
            expect(service.getInteraction()).toEqual('test');
        });

        it('setInQuestionMode should set correct mode', function() {
            expect(service.isInQuestionMode()).toEqual(null);
            service.setInQuestionMode(true);
            expect(service.isInQuestionMode()).toEqual(true);
        });

        it('setStateNames should set correct state names', function() {
            expect(service.getStateNames()).toEqual([]);
            service.setStateNames(['xxx']);
            expect(service.getStateNames()).toEqual(['xxx']);
        });

        it('setCorrectnessFeedbackEnabled should set correct value', function() {
            expect(service.getCorrectnessFeedbackEnabled()).toEqual(null);
            service.setCorrectnessFeedbackEnabled('test');
            expect(service.getCorrectnessFeedbackEnabled()).toEqual('test');
        });

        it('isCurrentSolutionValid should be false when not initialized', function() {
            solutionValidityService.init([]);
            service.setActiveStateName('test');
            expect(service.isCurrentSolutionValid()).toEqual(undefined);
        });
    });
});
