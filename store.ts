import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const UsersState = atom({
  key: 'UsersState',
  default: [],
});

/**
 *  to set/get value from store
 *  const {at} = useRecoilValue(getUsers);
 *  remember at is return by below
 */

export const storeUsers = (Users: any) => {
  const [users, setUsers] = useRecoilState(UsersState);
  setUsers(Users);
};

export const getUsers = selector({
  key: 'getUsers',
  get: ({ get }) => {
    const at = get(UsersState);
    console.log(at);
    return {
      at,
    };
  },
});
