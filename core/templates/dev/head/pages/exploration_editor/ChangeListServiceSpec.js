describe('Change list service', function() {
    beforeEach(module('oppia'));

    describe('change list service', function() {
        var chls = null;

        beforeEach(inject(function($injector) {
            chls = $injector.get('ChangeListService');
        }));

        it('get change list should return value of type array', function() {
            expect(typeof(chls.getChangeList())).toEqual('object')
        });

        it('isExplorationLockedForEditing should return value of type boolean', function() {
            expect(typeof(chls.isExplorationLockedForEditing())).toEqual('boolean')
        });

        it('loadAutosavedChangeList should assign array', function() {
            chls.loadAutosavedChangeList(['jeden', 'dva', 'tri']);
            expect(chls.isExplorationLockedForEditing()).toBe(true);
        });
    });
});
