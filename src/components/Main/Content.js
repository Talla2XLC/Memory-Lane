import React from 'react';
import './Content.sass';
import Router from "../../Router";
import {Provider} from "react-redux";

export default function Content() {
  return (
    <div className="Content">
      <Router />
    </div>
  );
}
