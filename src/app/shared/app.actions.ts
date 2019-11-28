import { AppStateModel } from "./app.state.model";

export class SetState{
    public static readonly type = '[app] set state';

    constructor(public payload: AppStateModel)
    {

    }
}

export class PatchIsLoading{
    public static readonly type = '[app] patch loading';

    constructor(public payload: AppStateModel)
    {

    }
}

export class PatchToken{
    public static readonly type = '[app] patch token';

    constructor(public token: string, public tokenExpires: BigInteger)
    {

    }
}