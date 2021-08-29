import { Fragment, useContext } from 'react';

import MainNavigation from './MainHeader';
import Notification from '../ui/notification/notification';
import NotificationContext from '../../store/notification-context';

function Layout(props) {

  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  console.log(activeNotification);
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>

      {activeNotification &&
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      }
    </Fragment>
  );
}

export default Layout;