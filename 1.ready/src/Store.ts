interface Store<S> {
  state: S;
  actions: ActionTree<S, S>;
  commit: Commit;
}

type Action<S, R> = ActionHandler<S, R>;

type ActionHandler<S, R> = (this: Store<S>, payload?: any) => any;

interface ActionTree<S, R> {
  [key: string]: Action<S, R>;
}

type Commit = (type: string, payload?: any) => any;

const store: Store<string> = {
  state: "abv",
  actions: {
    loginAction({ commit }: Store<string>) {},
  },
};
