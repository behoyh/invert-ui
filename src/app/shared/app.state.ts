import { SetState } from './app.actions';
import { AppStateModel } from './app.state.model';
import { State, StateContext, Action } from '@ngxs/store';

@State<AppStateModel>({
    name: 'app',
    defaults:
    {
        token: '',
        tokenExpires: null,
        isLoading: false,
        type: '',
        dropdownText: 'Select One',
        imagePreviewUri: ''
    }
})
export class AppState {
    @Action(SetState)
    setUser({setState}:StateContext<AppStateModel>, {payload}: SetState) {
        setState({
            token: payload.token,
            tokenExpires: payload.tokenExpires,
            isLoading: payload.isLoading,
            type: payload.type,
            dropdownText: payload.dropdownText,
            imagePreviewUri: payload.imagePreviewUri
        });
    }
}