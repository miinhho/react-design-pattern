export interface LoginFormData {
  username: string;
  password: string;
  loggedIn: boolean;
}

type LoginAction = {
  type: "login";
  payload: Omit<LoginFormData, "loggedIn">;
};

type LogoutAction = {
  type: "logout";
};

export type LoginFormAction = LoginAction | LogoutAction;
