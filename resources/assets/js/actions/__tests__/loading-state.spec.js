import { expect } from 'chai';
import {
    LOADING_STATE_ENABLED,
    LOADING_STATE_DISABLED
} from 'src/action-types';
import {
    enableLoadingState,
    disableLoadingState
} from 'src/actions/loading-state';

describe('loading-state actions', () => {
    context('when enableLoadingState is called', () => {
        it('has correct action type', () => {
            expect(enableLoadingState()).to.eql({
                type: LOADING_STATE_ENABLED
            });
        });
    });

    context('when disableLoadingState is called', () => {
        it('has correct action type', () => {
            expect(disableLoadingState()).to.eql({
                type: LOADING_STATE_DISABLED
            });
        });
    });
});
