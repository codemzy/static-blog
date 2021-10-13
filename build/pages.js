import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { buildPage } from './build';

// components
import ErrorPage from '../components/pages/Error';

// 404 page
buildPage('404', ReactDOMServer.renderToStaticMarkup(<ErrorPage title="404" description="Ooops... the page you are looking for doesn't exist." />));