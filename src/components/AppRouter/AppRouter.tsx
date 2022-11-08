import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from "../../router/route";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/reducer";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { setIsAuth } from "../../store/actions";

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

const AppRouter = () => {
  const isAuth = useSelector<RootState, boolean>(state => state.isAuth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(setIsAuth(true));
    }
  }, [])

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(source =>
          <Route
            key={source.path}
            path={source.path}
            element={source.component} />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(source =>
          <Route
            key={source.path}
            path={source.path}
            element={source.component} />
        )}
      </Routes>
  )
}

export default AppRouter;
