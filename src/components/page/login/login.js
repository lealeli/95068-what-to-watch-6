import React, {memo, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {doLogin} from "../../../store/api-actions";
import {Link, Redirect} from "react-router-dom";
import {getAuthorizationError, getAuthorizationStatus} from "../../../store/user/selector";
import {AppRoute, AuthorizationStatus} from "../../../store/const";

const Login = () => {
  const dispatch = useDispatch();

  const loginRef = useRef();
  const passwordRef = useRef();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authorizationError = useSelector(getAuthorizationError);
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(doLogin({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return <>
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form" onSubmit={handleSubmit}>
          {authorizationError !== `` && <div className="sign-in__message">
            <p>{authorizationError}</p>
          </div>}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                placeholder="Email address"
                type="email"
                name="user-email"
                id="user-email"
                data-testid="email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                placeholder="Password"
                type="password"
                name="user-password"
                id="user-password"
                data-testid="password"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>;
};

export default memo(Login);
