import React, { ReactNode } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { paths } from './constants/router';
import Home from "./components/Home";
import Wrapper from './components/common/Wrapper';
import ContentDetail from "./components/ContentDetail";
import Bookmarks from "./components/Bookmarks";
export type Props = {
  header: ReactNode;
  footer: ReactNode;
};

const Router: React.FC<Props> = ({ header, footer }) => {
  return (
    <BrowserRouter>
      {header}
      <Wrapper>
        <Switch>
          <Route exact path={paths.root} render={() => <Redirect to={paths.contents} />} />
          <Route exact path={paths.contents} component={Home} />
          <Route exact path={paths.contentDetail} component={ContentDetail} />
          <Route exact path={paths.bookmarks} component={Bookmarks} />
        </Switch>
      </Wrapper>
      {footer}
    </BrowserRouter>
  );
};

export default Router;
